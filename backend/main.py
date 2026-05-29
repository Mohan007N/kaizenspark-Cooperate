from fastapi import FastAPI, File, UploadFile, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import os
from datetime import datetime
from pydantic import BaseModel
from typing import Optional
import resend
import base64

# Load .env file automatically if it exists (local development)
def load_env():
    for env_file in [Path(".env"), Path("../.env")]:
        if env_file.exists():
            try:
                with open(env_file, "r", encoding="utf-8") as f:
                    for line in f:
                        line = line.strip()
                        if not line or line.startswith("#"):
                            continue
                        if "=" in line:
                            key, val = line.split("=", 1)
                            key = key.strip()
                            val = val.strip().strip('"').strip("'")
                            if key:
                                os.environ[key] = val
            except Exception as e:
                print(f"Error loading {env_file}: {e}")

load_env()

# Initialize FastAPI app
app = FastAPI(title="KaizenSpark Careers API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:8080",  # Current Vite dev server
        "https://kaizenspark-cooperate-1.onrender.com",  # Backend URL
        "https://kaizensparktech.com",  # Production domain
        "https://client-ui-v1-5.vercel.app",  # Client Login Portal
    ],
    allow_origin_regex="https://.*\\.vercel\\.app",  # Matches dynamic Vercel preview branches
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Resend API
resend.api_key = os.getenv("RESEND_API_KEY") or os.getenv("VITE_RESEND_API_KEY")
RESEND_FROM_EMAIL = os.getenv("RESEND_FROM_EMAIL", "KaizenSpark Tech <onboarding@resend.dev>")
RECIPIENT_HR_EMAIL = os.getenv("RECIPIENT_EMAIL") or os.getenv("VITE_RECIPIENT_EMAIL") or "hr@kaizensparktech.com"
RECIPIENT_OFFICIALS_EMAIL = os.getenv("RECIPIENT_OFFICIALS_EMAIL") or os.getenv("VITE_OFFICIALS_EMAIL") or "officials@kaizensparktech.com"

if not resend.api_key:
    print("WARNING: RESEND_API_KEY / VITE_RESEND_API_KEY environment variable not set!")

# Create uploads directory if it doesn't exist
UPLOAD_DIR = Path("uploads/resumes")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


class ContactForm(BaseModel):
    name: str
    email: str
    message: str
    company: Optional[str] = None
    service: Optional[str] = None

@app.get("/")
async def root():
    return {"message": "KaizenSpark Careers API is running"}


@app.post("/api/apply")
async def submit_application(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    experience: str = Form(...),
    portfolio: str = Form(""),
    coverLetter: str = Form(...),
    jobTitle: str = Form(...),
    jobId: str = Form(...),
    resume: UploadFile = File(...),
):
    """
    Handle job application submissions
    """
    try:
        # Securely parse the filename to avoid path traversal or absolute path issues on Windows
        raw_filename = resume.filename or "resume.pdf"
        base_filename = os.path.basename(raw_filename)
        # Keep only letters, numbers, dots, dashes, and underscores (no spaces)
        clean_filename = "".join(c for c in base_filename if c.isalnum() or c in "._-").replace(" ", "_")

        # Validate file type
        allowed_extensions = [".pdf", ".doc", ".docx"]
        file_ext = Path(clean_filename).suffix.lower()
        
        if file_ext not in allowed_extensions:
            raise HTTPException(
                status_code=400,
                detail="Invalid file type. Only PDF, DOC, and DOCX files are allowed."
            )
        
        # Validate file size (5MB max)
        resume_content = await resume.read()
        if len(resume_content) > 5 * 1024 * 1024:  # 5MB in bytes
            raise HTTPException(
                status_code=400,
                detail="File size exceeds 5MB limit."
            )
        
        # Generate unique filename
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        safe_name = "".join(c for c in name if c.isalnum() or c in "._-").lower()
        filename = f"{safe_name}_{timestamp}_{clean_filename}"
        file_path = UPLOAD_DIR / filename
        
        # Save resume to disk
        with open(file_path, "wb") as f:
            f.write(resume_content)
        
        # Prepare email content
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                .header {{
                    background: linear-gradient(135deg, #2563EB 0%, #0B1F3A 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 10px 10px 0 0;
                    text-align: center;
                }}
                .header h1 {{
                    margin: 0;
                    font-size: 24px;
                }}
                .content {{
                    background: #f8f9fa;
                    padding: 30px;
                    border-radius: 0 0 10px 10px;
                }}
                .field {{
                    margin-bottom: 20px;
                    background: white;
                    padding: 15px;
                    border-radius: 8px;
                    border-left: 4px solid #2563EB;
                }}
                .field-label {{
                    font-weight: bold;
                    color: #2563EB;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 5px;
                }}
                .field-value {{
                    color: #333;
                    font-size: 15px;
                }}
                .cover-letter {{
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    border: 1px solid #e0e0e0;
                    margin-top: 10px;
                    white-space: pre-wrap;
                    line-height: 1.8;
                }}
                .footer {{
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 2px solid #e0e0e0;
                    color: #666;
                    font-size: 12px;
                }}
                .badge {{
                    display: inline-block;
                    background: #2563EB;
                    color: white;
                    padding: 5px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: bold;
                    margin-top: 5px;
                }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🎯 New Job Application Received</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Position: {jobTitle}</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">👤 Applicant Name</div>
                    <div class="field-value">{name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">📧 Email Address</div>
                    <div class="field-value">{email}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">📱 Phone Number</div>
                    <div class="field-value">{phone}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">💼 Years of Experience</div>
                    <div class="field-value">{experience}</div>
                </div>
                
                {f'''
                <div class="field">
                    <div class="field-label">🔗 Portfolio / LinkedIn</div>
                    <div class="field-value"><a href="{portfolio}" style="color: #2563EB;">{portfolio}</a></div>
                </div>
                ''' if portfolio else ''}
                
                <div class="field">
                    <div class="field-label">💼 Applied Position</div>
                    <div class="field-value">
                        {jobTitle}
                        <span class="badge">Job ID: {jobId}</span>
                    </div>
                </div>
                
                <div class="field">
                    <div class="field-label">📄 Cover Letter</div>
                    <div class="cover-letter">{coverLetter}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">📎 Resume</div>
                    <div class="field-value">
                        Saved as: <code>{filename}</code><br>
                        Location: <code>{file_path}</code>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>KaizenSpark Tech</strong> - Careers Portal</p>
                <p>Application received on {datetime.now().strftime("%B %d, %Y at %I:%M %p")}</p>
            </div>
        </body>
        </html>
        """
        
        # Send email notification via Resend
        try:
            # Base64 encode the resume file to attach it to the email
            encoded_content = base64.b64encode(resume_content).decode("utf-8")
            
            resend.api_key = os.getenv("CAREER_RESEND_API_KEY") or os.getenv("RESEND_API_KEY") or os.getenv("VITE_RESEND_API_KEY")
            recipient_hr = os.getenv("VITE_RECIPIENT_EMAIL") or os.getenv("RECIPIENT_EMAIL") or "hr@kaizensparktech.com"
            
            params = {
                "from": RESEND_FROM_EMAIL,
                "to": [recipient_hr],
                "reply_to": email,
                "subject": f"New Application: {jobTitle} - {name}",
                "html": html_content,
                "attachments": [
                    {
                        "filename": clean_filename,
                        "content": encoded_content
                    }
                ]
            }
            
            email_response = resend.Emails.send(params)
            print(f"Email sent successfully: {email_response}")
            
        except Exception as email_error:
            print(f"Email sending failed: {email_error}")
            # Don't fail the entire request if email fails
            # The resume is still saved
        
        return {
            "success": True,
            "message": "Application submitted successfully",
            "data": {
                "applicant": name,
                "job": jobTitle,
                "resume_saved": str(file_path),
                "timestamp": datetime.now().isoformat(),
            }
        }
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error processing application: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Failed to process application: {str(e)}"
        )


@app.post("/api/contact")
async def submit_contact(form: ContactForm):
    """
    Handle contact form submissions (General Contact, Quotes, Partnerships)
    """
    try:
        # Determine the email type/template
        is_partnership = form.service == "Partnership Program Application"
        is_quote = "Quote" in str(form.service) or "Consultation" in str(form.service) or "Estimate" in str(form.service)
        
        if is_partnership:
            # Parse custom fields from raw text message
            phone = ""
            website = ""
            business_type = ""
            experience = ""
            goals = form.message
            
            lines = form.message.split("\n")
            for line in lines:
                line_s = line.strip()
                if line_s.startswith("Phone:"):
                    phone = line_s.replace("Phone:", "", 1).strip()
                elif line_s.startswith("Website:"):
                    website = line_s.replace("Website:", "", 1).strip()
                elif line_s.startswith("Business Type:"):
                    business_type = line_s.replace("Business Type:", "", 1).strip()
                elif line_s.startswith("Experience:"):
                    experience = line_s.replace("Experience:", "", 1).strip()
            
            if "Goals & Expectations:" in form.message:
                parts = form.message.split("Goals & Expectations:")
                if len(parts) > 1:
                    goals = parts[1].strip()
            
            subject = f"🤝 New Partnership Application from {form.company or form.name}"
            html_content = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; }}
                    .card {{ background: white; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; overflow: hidden; }}
                    .header {{ background: linear-gradient(135deg, #10b981 0%, #047857 100%); color: white; padding: 32px 24px; text-align: center; }}
                    .header h1 {{ margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }}
                    .header p {{ margin: 8px 0 0 0; font-size: 13px; opacity: 0.9; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }}
                    .content {{ padding: 24px; }}
                    .section-title {{ font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #10b981; border-bottom: 2px solid #ecfdf5; padding-bottom: 6px; margin: 24px 0 12px 0; }}
                    .section-title:first-of-type {{ margin-top: 0; }}
                    .grid {{ display: grid; gap: 16px; margin-bottom: 16px; }}
                    .field {{ background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #f1f5f9; }}
                    .field-label {{ font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 4px; }}
                    .field-val {{ font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word; }}
                    .field-val a {{ color: #10b981; text-decoration: none; }}
                    .message-box {{ background: #f0fdf4; border-left: 4px solid #10b981; padding: 16px; border-radius: 8px; margin-top: 8px; font-size: 13.5px; line-height: 1.7; color: #064e3b; white-space: pre-wrap; }}
                    .footer {{ text-align: center; margin-top: 24px; font-size: 11px; color: #94a3b8; font-weight: 500; }}
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="header">
                        <h1>🤝 Partnership Application</h1>
                        <p>KaizenSpark Partner Network</p>
                    </div>
                    <div class="content">
                        <div class="section-title">Personal Information</div>
                        <div class="grid">
                            <div class="field">
                                <div class="field-label">Full Name</div>
                                <div class="field-val">{form.name}</div>
                            </div>
                            <div class="field">
                                <div class="field-label">Email Address</div>
                                <div class="field-val"><a href="mailto:{form.email}">{form.email}</a></div>
                            </div>
                            {f'''<div class="field">
                                <div class="field-label">Phone Number</div>
                                <div class="field-val">{phone}</div>
                            </div>''' if phone else ''}
                        </div>
                        
                        <div class="section-title">Business Information</div>
                        <div class="grid">
                            <div class="field">
                                <div class="field-label">Business / Company Name</div>
                                <div class="field-val">{form.company or "N/A"}</div>
                            </div>
                            {f'''<div class="field">
                                <div class="field-label">Website URL</div>
                                <div class="field-val"><a href="{website}" target="_blank">{website}</a></div>
                            </div>''' if website else ''}
                            {f'''<div class="field">
                                <div class="field-label">Business Type</div>
                                <div class="field-val">{business_type}</div>
                            </div>''' if business_type else ''}
                            {f'''<div class="field">
                                <div class="field-label">Years of Experience</div>
                                <div class="field-val">{experience}</div>
                            </div>''' if experience else ''}
                        </div>
                        
                        <div class="section-title">Goals & Expectations</div>
                        <div class="message-box">{goals}</div>
                    </div>
                </div>
                <div class="footer">
                    <p>Sent autonomously via KaizenSpark Cooperate API • Received at {datetime.now().strftime("%B %d, %Y, %I:%M %p")}</p>
                </div>
            </body>
            </html>
            """
        elif is_quote:
            subject = f"⚡ New Project Consultation & Quote Request from {form.name}"
            html_content = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; }}
                    .card {{ background: white; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; overflow: hidden; }}
                    .header {{ background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; padding: 32px 24px; text-align: center; }}
                    .header h1 {{ margin: 0; font-size: 22px; font-weight: 800; letter-spacing: -0.5px; }}
                    .header p {{ margin: 8px 0 0 0; font-size: 13px; opacity: 0.9; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }}
                    .content {{ padding: 24px; }}
                    .section-title {{ font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #2563eb; border-bottom: 2px solid #eff6ff; padding-bottom: 6px; margin: 24px 0 12px 0; }}
                    .section-title:first-of-type {{ margin-top: 0; }}
                    .grid {{ display: grid; gap: 16px; margin-bottom: 16px; }}
                    .field {{ background: #f8fafc; padding: 12px 16px; border-radius: 8px; border: 1px solid #f1f5f9; }}
                    .field-label {{ font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 4px; }}
                    .field-val {{ font-size: 14px; font-weight: 600; color: #0f172a; word-break: break-word; }}
                    .field-val a {{ color: #2563eb; text-decoration: none; }}
                    .checklist {{ background: #f0fdf4; border: 1px solid #dcfce7; padding: 16px; border-radius: 12px; margin-bottom: 20px; }}
                    .checklist-item {{ font-size: 12.5px; color: #166534; font-weight: 600; margin-bottom: 8px; }}
                    .checklist-item:last-of-type {{ margin-bottom: 0; }}
                    .message-box {{ background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; border-radius: 8px; margin-top: 8px; font-size: 13.5px; line-height: 1.7; color: #1e3a8a; white-space: pre-wrap; }}
                    .footer {{ text-align: center; margin-top: 24px; font-size: 11px; color: #94a3b8; font-weight: 500; }}
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="header">
                        <h1>⚡ Project Consultation Request</h1>
                        <p>{form.service}</p>
                    </div>
                    <div class="content">
                        <div class="checklist">
                            <div class="checklist-item">✓ Dedicated engineering experts assigned</div>
                            <div class="checklist-item">✓ No monthly hidden fees guaranteed</div>
                            <div class="checklist-item">✓ Core Web Vitals (90+ lighthouse) targeted</div>
                        </div>
                        
                        <div class="section-title">Client Information</div>
                        <div class="grid">
                            <div class="field">
                                <div class="field-label">Client Name</div>
                                <div class="field-val">{form.name}</div>
                            </div>
                            <div class="field">
                                <div class="field-label">Email Address</div>
                                <div class="field-val"><a href="mailto:{form.email}">{form.email}</a></div>
                            </div>
                            {f'''<div class="field">
                                <div class="field-label">Target Service</div>
                                <div class="field-val">{form.service}</div>
                            </div>''' if form.service else ''}
                        </div>
                        
                        <div class="section-title">Project Details</div>
                        <div class="message-box">{form.message}</div>
                    </div>
                </div>
                <div class="footer">
                    <p>Sent autonomously via KaizenSpark Cooperate API • Received at {datetime.now().strftime("%B %d, %Y, %I:%M %p")}</p>
                </div>
            </body>
            </html>
            """
        else:
            subject = f"🚀 New Contact Form Submission from {form.name}"
            html_content = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }}
                    .header {{ background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }}
                    .header h1 {{ margin: 0; font-size: 24px; }}
                    .content {{ background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; }}
                    .field {{ margin-bottom: 20px; background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb; }}
                    .field-label {{ font-weight: 600; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }}
                    .field-value {{ color: #1e293b; font-size: 16px; }}
                    .message-box {{ background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px; }}
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>🚀 New Contact Form Submission</h1>
                    <p style="margin: 10px 0 0 0; opacity: 0.9;">KaizenSpark Tech</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="field-label">Full Name</div>
                        <div class="field-value">{form.name}</div>
                    </div>
                    {f'<div class="field"><div class="field-label">Company</div><div class="field-value">{form.company}</div></div>' if form.company else ''}
                    <div class="field">
                        <div class="field-label">Email Address</div>
                        <div class="field-value"><a href="mailto:{form.email}">{form.email}</a></div>
                    </div>
                    {f'<div class="field"><div class="field-label">Service Interested In</div><div class="field-value">{form.service}</div></div>' if form.service else ''}
                    <div class="message-box">
                        <div class="field-label">Message</div>
                        <div class="field-value" style="white-space: pre-wrap; margin-top: 10px;">{form.message}</div>
                    </div>
                </div>
            </body>
            </html>
            """
        
        resend.api_key = os.getenv("RESEND_API_KEY") or os.getenv("VITE_RESEND_API_KEY")
        recipient_officials = os.getenv("VITE_OFFICIALS_EMAIL") or os.getenv("RECIPIENT_OFFICIALS_EMAIL") or "officials@kaizensparktech.com"
        
        params = {
            "from": RESEND_FROM_EMAIL,
            "to": [recipient_officials],
            "reply_to": form.email,
            "subject": subject,
            "html": html_content,
        }
        
        email_response = resend.Emails.send(params)
        return {"success": True, "message": "Contact form submitted successfully"}
        
    except Exception as e:
        print(f"Error sending contact email: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "upload_dir": str(UPLOAD_DIR.absolute()),
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

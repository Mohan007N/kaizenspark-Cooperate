# KaizenSpark Careers Backend

FastAPI backend for handling job applications.

## Features

- Job application submission endpoint
- Resume file upload (PDF, DOC, DOCX, max 5MB)
- Email notifications via Resend API
- CORS enabled for frontend

## Setup

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Server

```bash
python main.py
```

Server runs at: http://localhost:8000

## API Endpoints

### POST /api/apply

Submit job application with resume.

**Parameters:**
- `name` (string, required)
- `email` (string, required)
- `phone` (string, required)
- `experience` (string, required)
- `portfolio` (string, optional)
- `coverLetter` (string, required)
- `jobTitle` (string, required)
- `jobId` (string, required)
- `resume` (file, required) - PDF/DOC/DOCX, max 5MB

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": {
    "applicant": "John Doe",
    "job": "Senior Full-Stack Developer",
    "resume_saved": "/path/to/resume.pdf",
    "timestamp": "2026-05-05T10:30:00"
  }
}
```

### GET /health

Health check endpoint.

## Configuration

**Email:** Applications sent to `hr@kaizensparktech.com`  
**API Key:** Set `RESEND_API_KEY` in `.env`  
**CORS:** Configured for `localhost:5173` and `localhost:3000`

## File Storage

Resumes saved to: `backend/uploads/resumes/`

## Production

- Set proper CORS origins
- Use environment variables
- Configure cloud storage (S3)
- Add authentication if needed

import fs from 'fs';
import path from 'path';
import https from 'https';
import readline from 'readline';

// Create CLI interface for prompting
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// Parse .env file
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  const env = {};
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf-8');
    content.split('\n').forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        let value = match[2] || '';
        // Remove surrounding quotes if present
        if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
          value = value.substring(1, value.length - 1);
        }
        if (value.length > 0 && value.charAt(0) === "'" && value.charAt(value.length - 1) === "'") {
          value = value.substring(1, value.length - 1);
        }
        env[match[1]] = value.trim();
      }
    });
  }
  return env;
}

// Send email via HTTPS
function sendEmail(apiKey, from, to, subject, html) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      subject,
      html
    });

    const options = {
      hostname: 'api.resend.com',
      port: 443,
      path: '/emails',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        let parsed = {};
        try {
          parsed = JSON.parse(body);
        } catch (e) {
          parsed = { message: body };
        }
        
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(parsed);
        } else {
          reject({ statusCode: res.statusCode, error: parsed });
        }
      });
    });

    req.on('error', (e) => reject(e));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('\x1b[36m%s\x1b[0m', '==================================================');
  console.log('\x1b[36m%s\x1b[0m', '       Resend API Connection & Testing Tool       ');
  console.log('\x1b[36m%s\x1b[0m', '==================================================');
  
  const env = loadEnv();
  const defaultKey = env.VITE_RESEND_API_KEY || '';
  const defaultTo = env.VITE_RECIPIENT_EMAIL || '';

  // Parse command line arguments
  const args = {};
  for (let i = 0; i < process.argv.length; i++) {
    const arg = process.argv[i];
    if (arg === '--api-key' || arg === '-k') args.apiKey = process.argv[i + 1];
    if (arg === '--from' || arg === '-f') args.from = process.argv[i + 1];
    if (arg === '--to' || arg === '-t') args.to = process.argv[i + 1];
  }

  if (defaultKey) {
    console.log(`\x1b[32m✔ Loaded API Key from .env: ${defaultKey.substring(0, 7)}...${defaultKey.substring(defaultKey.length - 4)}\x1b[0m`);
  } else {
    console.log('\x1b[33m⚠ VITE_RESEND_API_KEY was not found in your root .env file.\x1b[0m');
  }

  console.log('\n\x1b[35mℹ RESEND SANDBOX RULES:\x1b[0m');
  console.log('  • If you are using a free tier without a verified domain:');
  console.log('    - The Sender (From) email MUST be: \x1b[33monboarding@resend.dev\x1b[0m');
  console.log('    - The Recipient (To) email MUST be your registered/verified Resend account email.');
  console.log('  • If you have verified your domain (e.g. yourdomain.com):');
  console.log('    - You can send from any address at that domain (e.g. info@yourdomain.com).');
  console.log('    - You can send to any recipient.\n');

  let apiKey = args.apiKey;
  if (!apiKey) {
    const apiKeyInput = await prompt(`Enter Resend API Key [${defaultKey ? 'Press Enter to use .env key' : 'Required'}]: `);
    apiKey = apiKeyInput.trim() || defaultKey;
  }

  if (!apiKey) {
    console.log('\x1b[31m❌ Error: API Key is required to run the test.\x1b[0m');
    rl.close();
    return;
  }

  let fromEmail = args.from;
  if (!fromEmail) {
    const fromEmailInput = await prompt('Enter Sender Email (From) [default: onboarding@resend.dev]: ');
    fromEmail = fromEmailInput.trim() || 'onboarding@resend.dev';
  }

  let toEmail = args.to;
  if (!toEmail) {
    const toEmailInput = await prompt(`Enter Recipient Email (To) [default: ${defaultTo || 'your-email@example.com'}]: `);
    toEmail = toEmailInput.trim() || defaultTo;
  }

  if (!toEmail) {
    console.log('\x1b[31m❌ Error: Recipient Email is required.\x1b[0m');
    rl.close();
    return;
  }

  console.log('\n🚀 Sending test email...');
  console.log(`   From: ${fromEmail}`);
  console.log(`   To:   ${toEmail}`);
  
  const subject = `Resend API Test - ${new Date().toLocaleTimeString()}`;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #fcfcfc;">
      <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">⚡ Resend API Test Successful!</h2>
      <p>Hello!</p>
      <p>This is a test email triggered by your interactive API testing tool in the <strong>kaizenspark-Cooperate</strong> workspace.</p>
      <div style="background-color: #f1f5f9; padding: 15px; border-radius: 5px; margin: 15px 0; font-family: monospace; font-size: 14px;">
        <strong>Details:</strong><br>
        • Status: WORKING<br>
        • Timestamp: ${new Date().toISOString()}<br>
        • Sender: ${fromEmail}<br>
        • Recipient: ${toEmail}
      </div>
      <p style="color: #64748b; font-size: 12px; margin-top: 20px;">Powered by Resend & Antigravity Assistant</p>
    </div>
  `;

  try {
    const result = await sendEmail(apiKey, fromEmail, toEmail, subject, html);
    console.log('\n\x1b[32m🎉 SUCCESS! Email sent successfully.\x1b[0m');
    console.log('\x1b[36mResponse from Resend API:\x1b[0m', JSON.stringify(result, null, 2));
    console.log('\n📧 Check your inbox (and spam folder) for the test email!');
  } catch (err) {
    console.log('\n\x1b[31m❌ FAILED: Email sending encountered an error.\x1b[0m');
    if (err.statusCode) {
      console.log(`Status Code: \x1b[33m${err.statusCode}\x1b[0m`);
      console.log('\x1b[31mError Details:\x1b[0m', JSON.stringify(err.error, null, 2));
      
      const errorMsg = err.error?.message || '';
      const errorCode = err.error?.name || '';
      
      console.log('\n\x1b[36m💡 Troubleshooting Guide:\x1b[0m');
      if (errorMsg.includes('verified') || errorCode.includes('validation_error')) {
        console.log('  👉 \x1b[1mThis is a Resend restriction.\x1b[0m');
        console.log('  👉 Make sure you are sending FROM \x1b[33monboarding@resend.dev\x1b[0m if you have not verified a domain.');
        console.log('  👉 Make sure you are sending TO your \x1b[33mverified email address\x1b[0m (the one you used to sign up).');
      } else if (err.statusCode === 401 || errorMsg.includes('Unauthorized') || errorMsg.includes('API key')) {
        console.log('  👉 Your Resend API key seems invalid or expired. Check that it starts with "re_" and is copied correctly.');
      } else {
        console.log('  👉 Please check your API key, domain validation status, and network connection.');
      }
    } else {
      console.log('System Error:', err);
    }
  }

  rl.close();
}

main();

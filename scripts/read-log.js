import fs from 'fs';
import path from 'path';

const logPath = path.join(process.cwd(), 'dev.log');
if (fs.existsSync(logPath)) {
  const content = fs.readFileSync(logPath, 'utf-16le');
  console.log('--- dev.log contents ---');
  console.log(content);
} else {
  console.log('dev.log file does not exist.');
}

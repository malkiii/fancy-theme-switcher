import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

// Define your EJS template data
const data = {};

// Render the EJS template to static HTML and save it to the public folder
ejs.renderFile(path.join(process.cwd(), 'views/index.ejs'), data, (err, str) => {
  if (err) throw err;
  fs.writeFileSync('public/index.html', str);
  console.log('Static HTML generated in public/index.html 🎉');
});

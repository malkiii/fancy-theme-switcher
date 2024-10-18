import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import { rimraf } from 'rimraf';

// Clean the 'dist' directory
rimraf.sync('dist');

// Define your EJS template data
const data = {};

// Render the EJS template to static HTML and save it to 'dist/index.html'
ejs.renderFile(path.join(process.cwd(), 'views/index.ejs'), data, (err, str) => {
  if (err) throw err;
  fs.writeFileSync('dist/index.html', str);
  console.log('Static HTML generated in dist/index.html 🎉');
});

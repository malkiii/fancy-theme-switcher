import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import { rimraf } from 'rimraf';

// Clean the 'dist' directory
rimraf.sync('dist');

// Create the 'dist' directory
fs.mkdirSync('dist');

// Copy static assets from 'public' to 'dist'
fs.mkdirSync('dist/css', { recursive: true });
// fs.copyFileSync('public/css/styles.css', 'dist/css/styles.css');

// Define your EJS template data
const data = {
  title: 'Home Page',
  heading: 'Hello, EJS!',
};

// Render the EJS template to static HTML and save it to 'dist/index.html'
ejs.renderFile(path.join(process.cwd(), 'src/views/index.ejs'), data, (err, str) => {
  if (err) throw err;
  fs.writeFileSync('dist/index.html', str);
  console.log('Static HTML generated in dist/index.html 🎉');
});

import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the public directory
// app.use(express.static('public'));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'src/views'));

// Define routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', heading: 'Hello, EJS!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

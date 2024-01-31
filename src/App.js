import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Node.js server
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        {/* Home Page Content */}
        <section>
          <h1>Your React Website</h1>
          <p>{message}</p>
        </section>

        {/* Gallery Page Content */}
        <Gallery />
      </main>
      <footer>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
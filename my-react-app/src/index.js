import React from 'react';
import ReactDOM from 'react-dom/client';

// Define the App component
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import { useState } from 'react';
import quotes from './assets/quotes.json';
import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa";
import './App.css';

interface Quote {
  quote: string;
  author: string;
};

// Quotes function, return random quote and author value
const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

// Random colors (RGB color)
const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red} ${green} ${blue})`;
};

const transition = "all 1s";

function App() {
  // Quotes state
  const [quote, setQuote] = useState<Quote>(getRandomQuote());

  // Random colors state
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  // OnClick function, set qoute, author, and colors
  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <div className='background' style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor, transition }}>
          <h2 id="text">
            <FaQuoteLeft size="30px" style={{ marginRight: "10px" }} />
            {quote.quote}
            <FaQuoteRight size="30px" style={{ marginLeft: "10px" }} />
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginLeft: "10px",
              transition,
            }}>
            <FaTwitter color="white" />
          </a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor, transition }}>
            Change Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

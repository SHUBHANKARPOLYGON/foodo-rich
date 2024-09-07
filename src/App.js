import React from 'react';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Foodo Rich</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Icon Text" />
            </Helmet>
      <header className="App-header">
        <img src="foodo_rich_logo.png" className="logo" alt="logo" />
        <h1 className="headline">
  <span className="line">ORDER ONLINE</span>
  <span className="from">FROM</span>
  <span className="line restaurant">NEAREST RESTAURANT</span>
</h1>

        <p className="download-text">Download App</p>
        <div className="store-buttons">
          <a href="https://www.apple.com/app-store/" className="store-button">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on the App Store"
              className="store-badge"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.foodorich" className="store-button">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" 
              alt="Get it on Google Play"
              className="store-badge"
            />
          </a>
        </div>
        <footer>
          <img src="icon_logo.png" className="footer-logo" alt="FoodoRich" />
          <div className="footer-links">
            <a href="/tnc.pdf">Terms of Service</a>
            <a href="/privacyPolicy.pdf">Privacy Policy</a>
            <a href="/contact-us.pdf">Contact Us</a>
          </div>
        </footer>
      </header>
    </div>
  );
}

export default App;

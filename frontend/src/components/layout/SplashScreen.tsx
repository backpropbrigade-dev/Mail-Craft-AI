import { useEffect, useState } from "react";
import "../../styles/SplashScreen.css";

interface SplashScreenProps {
  fadeOut: boolean;
}

const SplashScreen = ({ fadeOut }: SplashScreenProps) => {
  const messages = [
    "Preparing your workspace...",
    "Setting up your writing space...",
    "Almost ready...",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) =>
        prev < messages.length - 1 ? prev + 1 : prev
      );
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
      {/* Background grid */}
      <div className="splash-grid" />

      <div className="splash-content">

        {/* Brand */}
        <div className="splash-brand">
          <span className="splash-line" />

          <span className="splash-label">
            AI EMAIL STUDIO
          </span>
        </div>

        <h1>MAILCRAFT</h1>

        <p className="splash-subtitle">
          AI EMAIL WRITER
        </p>

        {/* Loading */}
        <div className="splash-loading">

          <div className="progress-container">
            <div className="progress-bar" />
          </div>

          <div className="loading-row">
            <span className="loading-text">
              {messages[messageIndex]}
            </span>

            <span className="loading-status">
              01 / 03
            </span>
          </div>

        </div>

      </div>

      {/* Bottom metadata */}
      <div className="splash-footer">
        <span>MAILCRAFT AI</span>
        <span>THOUGHT → EMAIL</span>
      </div>
    </div>
  );
};

export default SplashScreen;
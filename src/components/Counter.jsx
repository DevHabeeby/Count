
import { useState } from "react";
import {
  Plus,
  Minus,
  RotateCcw,
  TrendingUp,
} from "lucide-react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <main className="counter-page">
      <nav className="navbar">
        <h2 className="logo">
          Count<span>Up.</span>
        </h2>
        <span className="nav-tag">React Project</span>
      </nav>

      <section className="counter-section">
        <div className="intro">
          <span className="small-label">
            <TrendingUp size={16} />
            SIMPLE COUNTER APP
          </span>

          <h1>
            Keep track of <span>every count.</span>
          </h1>

          <p>
            A simple and beautiful way to count,
            track and manage your numbers.
          </p>
        </div>

        <div className="counter-card">
          <div className="card-top">
            <span>YOUR CURRENT COUNT</span>
            <span className="status-dot">● ACTIVE</span>
          </div>

          <div className="count-display">
            {count}
          </div>

          <p className="count-message">
            {count === 0
              ? "Ready when you are!"
              : count > 0
              ? "Keep going! You're doing great."
              : "Your count is below zero."}
          </p>

          <div className="counter-buttons">
            <button
              className="counter-btn minus-btn"
              onClick={decrease}
              aria-label="Decrease count"
            >
              <Minus size={22} />
            </button>

            <button
              className="counter-btn plus-btn"
              onClick={increase}
              aria-label="Increase count"
            >
              <Plus size={22} />
            </button>
          </div>

          <button
            className="reset-btn"
            onClick={reset}
          >
            <RotateCcw size={16} />
            Reset Counter
          </button>
        </div>

        <div className="features">
          <div>
            <span>01</span>
            <h3>Simple</h3>
            <p>Easy to use controls.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Fast</h3>
            <p>Instant number updates.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Responsive</h3>
            <p>Works on every screen.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React.js | CountUp © 2026</p>
      </footer>
    </main>
  );
}

export default Counter;

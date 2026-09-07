import "./App.css";
import { useState } from "react";
import TaskDashboard from "./components/TaskDashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
  return <TaskDashboard setShowDashboard={setShowDashboard} />;
  }

  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">TaskFlow</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <button
          className="nav-button"
          onClick={() => setShowDashboard(true)}
        >
          Get Started
        </button>
      </nav>


      <section className="hero" id="home">

        <div className="hero-content">

          <p className="tagline">
            SIMPLE TASK MANAGEMENT
          </p>

          <h1>
            Organize your work.
            <span> Get things done.</span>
          </h1>

          <p className="hero-description">
            TaskFlow helps you organize your daily tasks,
            stay focused, and get more done without the
            unnecessary complexity.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => setShowDashboard(true)}
            >
              Start Managing Tasks
            </button>

            <button className="secondary-button">
              Learn More
            </button>

          </div>

        </div>

      </section>


      <section className="features" id="features">

        <div className="section-heading">

          <p className="tagline">FEATURES</p>

          <h2>
            Everything you need to stay organized
          </h2>

          <p>
            Simple tools designed to help you manage
            your tasks efficiently.
          </p>

        </div>


        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon">✓</div>

            <h3>Create Tasks</h3>

            <p>
              Quickly create tasks and keep track of
              everything you need to accomplish.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">✓</div>

            <h3>Track Progress</h3>

            <p>
              Mark tasks as completed and easily see
              what is still pending.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">✓</div>

            <h3>Stay Organized</h3>

            <p>
              Keep your tasks organized in one simple
              and easy-to-use place.
            </p>

          </div>

        </div>

      </section>


      <section className="about" id="about">

        <div>

          <p className="tagline">ABOUT TASKFLOW</p>

          <h2>
            Less planning.
            <br />
            More doing.
          </h2>

        </div>

        <p>
          TaskFlow is designed to keep task management
          simple. Instead of complicated project management
          tools, you get a clean workspace where you can
          focus on what actually needs to be done.
        </p>

      </section>


      <section className="cta">

        <h2>
          Ready to get organized?
        </h2>

        <p>
          Start managing your tasks today.
        </p>

        <button
          className="primary-button"
          onClick={() => setShowDashboard(true)}
        >
          Get Started
        </button>

      </section>


      <footer>
        <p>© 2026 TaskFlow. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
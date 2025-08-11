import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Inclusive Health & Well-Being Platform</h1>
        <p>Connecting Blood Donors, NGOs, and Health Workers for a Healthier Future</p>
      </header>

      <nav className="home-nav">
        <Link to="/signin" className="btn">Sign In</Link>
        <Link to="/signup" className="btn btn-primary">Sign Up</Link>
      </nav>

      <section className="roles">
        <h2>Who Can Join?</h2>
        <ul>
          <li><strong>Blood Donors</strong> – Save lives by donating blood.</li>
          <li><strong>NGOs</strong> – Collaborate to improve community health.</li>
          <li><strong>Health Workers</strong> – Provide essential health services.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;

import "./../css/Home.css";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Handcrafted Cakes
          <br />
          Made With Love
        </h1>

        <p>
          Freshly baked homemade cakes crafted for birthdays,
          weddings, anniversaries, and every special celebration.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Order Now
          </button>

          <button className="secondary-btn">
            Custom Cakes
          </button>
        </div>

      </div>

      <div className="hero-image">

        {/* Replace this with your hero cake image */}
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700"
          alt="Cake"
        />

      </div>

    </section>
  );
}

export default Home;
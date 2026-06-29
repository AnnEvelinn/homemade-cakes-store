import { useState } from "react";
import "../css/Products.css";

const cakes = [
  {
    id: 1,
    name: "Funfetti Birthday Cake",
    price: 750,
    flavor: "Vanilla",
    theme: "Birthday",
    image:
      "https://i.pinimg.com/736x/c0/7b/72/c07b72d8fc5ac78af44659d52975b739.jpg",
  },
  {
    id: 2,
    name: "Classic Wedding Cake",
    price: 1500,
    flavor: "Buttercream",
    theme: "Wedding",
    image:
      "https://i.pinimg.com/1200x/97/b9/ad/97b9ad9cf9b373b56e781f9d5cc95c1e.jpg",
  },
  {
    id: 3,
    name: "Red Velvet Anniversary Cake",
    price: 1800,
    flavor: "Red Velvet",
    theme: "Anniversary",
    image:
      "https://i.pinimg.com/736x/ca/c4/14/cac41421e1275e3bdfd9a7278a7cb1c3.jpg",
  },
  {
    id: 4,
    name: "Chocolate Drip Cake",
    price: 1750,
    flavor: "Chocolate",
    theme: "Birthday",
    image:
      "https://i.pinimg.com/736x/ef/d6/8c/efd68c395307475fffc96e639fdac77e.jpg",
  },
];

export default function Products() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredCakes = cakes.filter((cake) => {
    return (
      (selectedTheme === "" || cake.theme === selectedTheme) &&
      (selectedFlavor === "" || cake.flavor === selectedFlavor) &&
      (maxPrice === "" || cake.price <= parseInt(maxPrice))
    );
  });

  return (
    <div className="products">
      <h1>Our Cakes</h1>

      {/* Filters */}
      <div className="filters">
        <select onChange={(e) => setSelectedTheme(e.target.value)}>
          <option value="">Filter by Theme</option>
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <select onChange={(e) => setSelectedFlavor(e.target.value)}>
          <option value="">Filter by Flavor</option>
          <option value="Vanilla">Vanilla</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Red Velvet">Red Velvet</option>
          <option value="Buttercream">Buttercream</option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Cake Cards */}
      <div className="cake-grid">
        {filteredCakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p>Flavor: {cake.flavor}</p>
            <p>Theme: {cake.theme}</p>
            <p>₹{cake.price}</p>
            <button
              className="btn order-btn"
              onClick={() => alert(`Ordering: ${cake.name}`)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

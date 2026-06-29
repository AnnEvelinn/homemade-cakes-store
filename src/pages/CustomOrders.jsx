import { useState } from "react";
import "../css/CustomOrders.css";

export default function CustomOrders() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    location: "",
    weight: "",
    occasion: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="custom-orders">
      <h1>Design Your Dream Cake</h1>
      <p className="intro">
        Every celebration is unique — let us craft a cake that matches your
        vision. Share your ideas and we’ll bring them to life.
      </p>

      {!isSubmitted ? (
        <form className="custom-form" onSubmit={handleSubmit}>
          <label>
            Your Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Delivery Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Cake Weight (kg):
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Theme / Occasion:
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Special Instructions:
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
            ></textarea>
          </label>

          <button type="submit" className="btn order-btn">
            Submit Request
          </button>
        </form>
      ) : (
        <div className="confirmation-box">
          <h2>🎉 Order Confirmed!</h2>
          <p>Here are your order details:</p>
          <ul>
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Phone:</strong> {formData.phone}</li>
            <li><strong>Delivery Date:</strong> {formData.date}</li>
            <li><strong>Location:</strong> {formData.location}</li>
            <li><strong>Weight:</strong> {formData.weight} kg</li>
            <li><strong>Occasion:</strong> {formData.occasion}</li>
            {formData.instructions && (
              <li><strong>Instructions:</strong> {formData.instructions}</li>
            )}
          </ul>
          <p>We’ll contact you soon to finalize everything. Thank you!</p>
        </div>
      )}
    </div>
  );
}

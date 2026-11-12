import { useState } from "react";

function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    isAvailable: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.price) return;

    await onAdd({
      name: form.name.trim(),
      image: form.image.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      isAvailable: form.isAvailable,
    });

    setForm({
      name: "",
      image: "",
      description: "",
      price: "",
      isAvailable: true,
    });
  };

  return (
    <form className="mt-3 mx-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="product-name" className="form-label">
          Name
        </label>
        <input
          id="product-name"
          name="name"
          type="text"
          className="form-control"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="product-image" className="form-label">
          Image URL
        </label>
        <input
          id="product-image"
          name="image"
          type="url"
          className="form-control"
          value={form.image}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="product-description" className="form-label">
          Description
        </label>
        <textarea
          id="product-description"
          name="description"
          className="form-control"
          rows="2"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="product-price" className="form-label">
          Price
        </label>
        <input
          id="product-price"
          name="price"
          type="number"
          min="0"
          className="form-control"
          value={form.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-check mb-3">
        <input
          id="product-availability"
          name="isAvailable"
          type="checkbox"
          className="form-check-input"
          checked={form.isAvailable}
          onChange={handleChange}
        />
        <label htmlFor="product-availability" className="form-check-label">
          Available
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Add product
      </button>
    </form>
  );
}

export default ProductForm;

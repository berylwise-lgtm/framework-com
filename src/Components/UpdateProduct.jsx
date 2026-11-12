import { useState } from "react";
import { updateProduct } from "../api";

function UpdateProduct({ product, onProductUpdated }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: product.name,
    image: product.image || "",
    description: product.description || "",
    price: String(product.price),
    isAvailable: product.isAvailable ?? true,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCancel = () => {
    setForm({
      name: product.name,
      image: product.image ?? "",
      description: product.description ?? "",
      price: String(product.price),
      isAvailable: product.isAvailable ?? true,
    });
    setError("");
    setIsEditing(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const price = Number(form.price);

    if (!name || !Number.isFinite(price) || price < 0) {
      setError("Enter a product name and a valid, non-negative price.");
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      const updatedProduct = {
        ...product,
        name,
        image: form.image.trim(),
        description: form.description.trim(),
        price,
        isAvailable: form.isAvailable,
      };
      const savedProduct = await updateProduct(product.id, updatedProduct);
      onProductUpdated(savedProduct);
      setIsEditing(false);
    } catch (updateError) {
      console.error("Failed to update product:", updateError);
      setError("Could not save the product. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (!isEditing) {
    return (
      <button
        type="button"
        className="btn btn-outline-primary mt-2"
        onClick={() => setIsEditing(true)}
      >
        Edit product
      </button>
    );
  }

  return (
    <form className="mt-2" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label" htmlFor={`product-name-${product.id}`}>
          Name
        </label>
        <input
          id={`product-name-${product.id}`}
          className="form-control"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-2">
        <label className="form-label" htmlFor={`product-image-${product.id}`}>
          Image URL
        </label>
        <input
          id={`product-image-${product.id}`}
          className="form-control"
          name="image"
          type="url"
          value={form.image}
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label
          className="form-label"
          htmlFor={`product-description-${product.id}`}
        >
          Description
        </label>
        <textarea
          id={`product-description-${product.id}`}
          className="form-control"
          name="description"
          rows="2"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div className="mb-2">
        <label className="form-label" htmlFor={`product-price-${product.id}`}>
          Price
        </label>
        <input
          id={`product-price-${product.id}`}
          className="form-control"
          name="price"
          type="number"
          min="0"
          step="any"
          value={form.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-check mb-2">
        <input
          id={`product-availability-${product.id}`}
          className="form-check-input"
          name="isAvailable"
          type="checkbox"
          checked={form.isAvailable}
          onChange={handleChange}
        />
        <label
          className="form-check-label"
          htmlFor={`product-availability-${product.id}`}
        >
          Available
        </label>
      </div>

      {error && <p className="text-danger">{error}</p>}

      <button
        type="submit"
        className="btn btn-primary me-2"
        disabled={isSaving}
      >
        {isSaving ? "Saving..." : "Save"}
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleCancel}
        disabled={isSaving}
      >
        Cancel
      </button>
    </form>
  );
}

export default UpdateProduct;

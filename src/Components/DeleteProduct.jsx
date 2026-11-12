import { useState } from "react";

function DeleteProduct({ id, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setIsDeleting(true);
    setError("");

    try {
      await onDelete(id);
    } catch (deleteError) {
      console.error("Failed to delete product:", deleteError);
      setError("Could not delete the product. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-danger mt-2"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete product"}
      </button>
      {error && <p className="text-danger mt-2 mb-0">{error}</p>}
    </>
  );
}

export default DeleteProduct;

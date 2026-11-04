function ProductCard({ product }) {
  const { name, image, description, price, isAvailable } = product;

  return (
    <article className="h-100 d-flex flex-column border rounded p-2">
      <img
        src={image}
        alt={name}
        className="img-fluid rounded mb-2"
        loading="lazy"
      />
      <h3 className="h5 mb-1">{name}</h3>
      <p className="text-muted small flex-grow-1 mb-2">{description}</p>
      <p className="fw-bold mb-0">${price}</p>
      {!isAvailable && (
        <span className="badge bg-secondary mt-1 align-self-start">
          Out of stock
        </span>
      )}
    </article>
  );
}

export default ProductCard;
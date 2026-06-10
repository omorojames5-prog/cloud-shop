
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} className="product-card-content" alt={product.name} />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <a href="#" className="btn btn-secondary">View Details</a>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
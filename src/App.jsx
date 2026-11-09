import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Market from "./Components/Market";
import Footer from "./Components/Footer";
import CartDrawer from "./Components/CartDrawer";
import Features from "./Components/Features";
import Highlights from "./Components/Highlights";
import ProductForm from "./Components/ProductForm";
import {
  getProducts,
  addProduct,
  getCart,
  addCartItem,
  deleteCartItem,
} from "./api";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load products and cart from db.json on mount
  useEffect(() => {
    getProducts().then(setProducts);
    getCart().then(setCart);
  }, []);

  const handleAddToCart = async (product) => {
    const item = {
      productId: product.id,
      name: product.name,
      price: product.price,
    };
    const saved = await addCartItem(item);
    setCart((prev) => [...prev, saved]);
  };

  const handleRemoveFromCart = async (id) => {
    await deleteCartItem(id);
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddProduct = async (product) => {
    const saved = await addProduct(product);
    setProducts((prev) => [...prev, saved]);
  };

  return (
    <>
      <header className="app-header py-3 py-md-4">
        <NavBar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      </header>

      <main className="container app-main">
        <Hero />
        <Market products={products} cart={cart} addToCart={handleAddToCart} />
        <ProductForm onAdd={handleAddProduct} />
        <Features />
        <Highlights />
      </main>

      <footer className="mt-4">
        <Footer />
      </footer>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        removeFromCart={handleRemoveFromCart}
      />
    </>
  );
}

export default App;

import Hero from "./Components/Hero";
import ProductCard from "./Components/ProductCard";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
function App() {
  const products = [
    {
      image:
        "https://images.frame.work/frameworkmarketplace/aeUO651ZCF7ETVrh_fw13-family_overview_highlights_customize.jpg?auto=format%2Ccompress",
      title: "Customize",
      description:
        "Expansion Cards, keyboard languages, Bezel colors. It’s yours to choose.",
    },
    {
      image:
        "https://images.frame.work/frameworkmarketplace/aeUO7Z1ZCF7ETVrj_fw13-family_overview_highlights_upgrade.jpg?auto=format%2Ccompress",
      title: "Upgrade",
      description:
        "Upgrade your processor generation-over-generation, and add more memory and storage whenever you need.",
    },
    {
      image:
        "https://images.frame.work/frameworkmarketplace/aeUO7J1ZCF7ETVri_fw13-family_overview_highlights_repair.jpg?auto=format%2Ccompress",
      title: "Repair",
      description:
        "Every part is replaceable with just the one tool that comes in the box.",
    },
  ];
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="container app-main py-4 py-md-5">
        <Hero />
        <section
          className="row g-3 align-items-stretch"
          aria-labelledby="products-heading"
        >
          <h1 id="products-heading" className="col-12 h2 mb-0">
            Products
          </h1>
          {products.map((product) => (
            <div
              className="col-12 col-sm-6 col-lg-4 product-card"
              key={product.title}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
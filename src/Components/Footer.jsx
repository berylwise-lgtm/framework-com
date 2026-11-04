function Footer() {
  const year = new Date().getFullYear();
  return (
    <p className="text-center m-3 p-3 fw-bold text-muted">
      © {year} Framework Computer
    </p>
  );
}

export default Footer;

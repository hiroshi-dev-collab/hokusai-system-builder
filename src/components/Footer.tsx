const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-foreground font-medium">Hiroshi</p>
            <p className="text-sm text-muted-foreground">Software Developer · Japan</p>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

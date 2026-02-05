 import Header from "@/components/Header";
 import Hero from "@/components/Hero";
 import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
     <main className="min-h-screen bg-background pt-16 md:pt-20">
       <Header />
       <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

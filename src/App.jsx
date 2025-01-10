import React from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import ContentSection from './components/ContentSection';
    import Footer from './components/Footer';

    function App() {
      return (
        <div className="bg-background text-primary font-sans">
          <Header />
          <Hero />
          <ContentSection />
          <Footer />
        </div>
      );
    }

    export default App;

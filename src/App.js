import './App.css';
import Header from './components/header.js';
import Hero from './components/hero-section.js';
import Working from './components/working.js';
import Why from './components/why.js';
import Questions from './components/Questions.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App bg-orange-100">
      <Header/>
      <Hero/>
      <Working/>
      <Why/>
      <Questions/>
      <Footer/>
    </div>
  );
}

export default App;

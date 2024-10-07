import './App.css';
import Header from './components/header.js';
import Hero from './components/hero-section.js';
import Working from './components/working.js';

function App() {
  return (
    <div className="App bg-orange-100">
      <Header/>
      <Hero/>
      <Working/>
    </div>
  );
}

export default App;

import './App.css';
import Applications from './components/applications/Applications';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Applications/>
    </div>
  );
}

export default App;

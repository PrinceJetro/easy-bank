import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Features from './components/features';
import Articles from './components/articles';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Features/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;

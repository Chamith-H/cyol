import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Body from './Components/Layout/Body';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div className="App">
      <div className="Hero-Image">
          <div className="Align-Hero"/>
      </div>

      <div className="Header-Margin"/>

      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;

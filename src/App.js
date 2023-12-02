import './App.css';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';

function App() {
  const country = "India";
  return (
    <div className="App">
      <Header country={country}/>
      <ImageSlider/>
    </div>
  );
}

export default App;

import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import './App.css';
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

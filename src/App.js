
import './App.css';
import Fighter from './components/Fighter';


function App() {
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
      <Fighter name={'Roy'} color={'blue'} />
      <Fighter name={'Fox'} color={'green'} />
      <Fighter name={'Ganondorf'} color={'purple'}/>
      <Fighter name={'Sheik'} color={'lightskyblue'}/>
      </div>
      <div className="fighter-screen"> 
        <h2>Roy</h2>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png"/> 
        <p>lorem ipsum</p>
      </div>
    </div>
  );
}

export default App;

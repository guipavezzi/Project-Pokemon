import './App.css';
import { City } from './components/city';
import { CityInfo } from './components/cityInformation';
import { Header } from './components/header';
import { ShowPokemon} from './components/Pokemon';
import { CityProvider } from './context/cityContext';

function App() {
  return (
    <div className="App">
      <CityProvider>
          <Header/>
          <City/>
          <ShowPokemon/>
          <CityInfo/>
      </CityProvider>
    </div>
  );
}


export default App;

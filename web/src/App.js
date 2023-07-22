
import './App.css';
import Header from './Components/Header/Header';
import Nav from './Components/NavBar/Nav';
import Slider from './Components/Slider/Slider';
import QuicNav from './Components/QuickNav/QuicNav';
import Welcome from './Components/Welcome/Welcome';
import Services from './Components/Services/Services';
import Map from './Components/Map/Map';
import Announcements from './Components/Announcements/Announcements';
import Exchange from './Components/Exchange/Exchange';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div >
      <header>
      <Header/>
      <Nav/>
      <Slider/>
      </header>
      <QuicNav/>
      <Welcome/>
      <Services/>
      <Map/>
      <Announcements/>
      <Exchange/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

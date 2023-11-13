import NavBarComponent from "./components/NavBar/NavBarComponent";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageWithText from "./components/Home/ImageWithText"
import CardsSectionComponent from "./components/CardsSection/CardsSectionComponent";
import SectionTitleComponent from "./components/SectionTitle/SectionTitleComponent";
import ThreeStripesSection from "./components/ThreeStripes/ThreeStripesSection";
import vehicles from "./assets/data/vehicles.json"

function App() {

 

  return <div>
    <NavBarComponent/>
    <ImageWithText
        title="Transporte Pedro"
        text="El transporte que necesitas, al alcance de tus manos"/>
    <SectionTitleComponent title="Por qué elegirnos?" />
    <ThreeStripesSection/>
    <SectionTitleComponent title="Conoce nuestra flota" />
    <CardsSectionComponent data={vehicles}/>
  </div>;

}

 

export default App;

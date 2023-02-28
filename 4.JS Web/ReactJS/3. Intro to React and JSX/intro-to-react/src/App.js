import './App.css';
import Description from './components/Description';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { NavTabs } from './components/NavTabs';
import Schedule from './components/Schedule';
import { Speakers } from './components/Speakers';
import { TabPanels } from './components/TabPanels';
import { Tickets } from './components/Tickets';
import Navigation from './components/navigation';

function App() {
  return (
    <div>

      <Navigation />

      <Header />

      <div className="container">
        <Description />
        <Speakers />
      </div>

      <Tickets />

      <Schedule>
        <NavTabs />
        <TabPanels />
      </Schedule>

      <Footer />

    </div>
  );
}

export default App;

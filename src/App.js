import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import MainContent from './component/MainContent';
import MainVisual from './component/MainVisual';
import News from './component/News';
import Portfolio from './component/Portfolio';
import Promotion from './component/Promotion';
import Solution from './component/Solution';
const App = () => {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <MainContent />
        <Portfolio />
        <Solution />
        <Promotion />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;

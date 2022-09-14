import './App.css';
import Header from './component/Header';
import MainContent from './component/MainContent';
import MainVisual from './component/MainVisual';
import Portfolio from './component/Portfolio';
const App = () => {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <MainContent />
        <Portfolio />
      </main>

    </div>
  );
}

export default App;

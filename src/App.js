import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import MainContent from './component/MainContent';
import MainVisual from './component/MainVisual';
import News from './component/News';
import Popup from './component/Popup';
import Portfolio from './component/Portfolio';
import Promotion from './component/Promotion';
import Solution from './component/Solution';
import ToTop from './component/ToTop';
import Wrapper from './component/Wrapper';
const App = () => {
  return (
    <Wrapper>
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
      <ToTop />
      <Popup />
    </Wrapper>
  );
}

export default App;

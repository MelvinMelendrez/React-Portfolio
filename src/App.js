/* eslint-disable no-unused-vars */
import './App.scss';
import { About, Footer, Header, Skills, Work } from './container/index';
import { Navbar } from './components';


function App() {

  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
    );
}

export default App;

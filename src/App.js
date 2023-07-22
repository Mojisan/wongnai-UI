import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import { ItemsProvider } from './context/ItemsContext';
import Footer from './components/layout/Footer/Footer.js';
import Header from './components/layout/Header/Header.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemsProvider>
        <Main />
      </ItemsProvider>
      <Footer />
    </div>
  );
}

export default App;

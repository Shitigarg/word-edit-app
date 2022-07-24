
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';


function App() {
  return (
    <>
    <Navbar title="ShitiGarg" about="About Us"/>
    <div className="container">
    <Textbox/>
    </div>
    </>
  );
}

export default App;

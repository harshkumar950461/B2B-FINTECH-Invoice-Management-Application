import MyGrid from './Components/MyGrid';
import Addform from './Components/Addform';
import Editform from './Components/Editform';
import DeleteForm from './Components/DeleteForm';
import Footer from './Components/Footer';
import Grid from "@mui/material/Grid";
import AppBar from './Components/AppBar';
import './App.css';
function App() {
  return (
  <>
    <div className="App">
      <AppBar />    
      <MyGrid />
    </div>
    <Footer />
    </>
  );
  }

export default App;

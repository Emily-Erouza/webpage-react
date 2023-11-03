import './App.css';
import Home from "./components/Home";
import Service from "./components/Service";
import Menu from "./components/Menu";
import Form from "./components/Form";
import Contact from "./components/Contact";
// import 'bootstrap/dist/css/bootstrap.css';





function App() {

 
  return (
    <div className="App">

     
    <div className='page'>
    <Home />

    </div>
        <Service />
    <Menu/>
    <Form/>
    <Contact/>
    </div>
  );
}

export default App;

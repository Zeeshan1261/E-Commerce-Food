import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import CardDetails from './Components/CardDetails';
import {Routes,Route} from 'react-router-dom'
function App() {

return (

<>
<Header/>
<Routes>
<Route path='/'  element={<Cards/>}/>
<Route path='/cart'  element={<CardDetails/>}/>


</Routes>
</>

);
}

export default App;

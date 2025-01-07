import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavContact from './Components/NavContact';
import Home from './Components/Home';
import ListContacts from './Components/ListContacts';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';

function App() {
  return (
    <div>
      <NavContact/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListContacts' element={<ListContacts/>}/>
        <Route path='/AddContact' element={<AddContact/>}/>
        <Route path='/EditContact/:id' element={<EditContact/>}/>
      </Routes>
    </div>
  );
}

export default App;

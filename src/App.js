import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail';
import RequireAuth from './components/RequireAuth/RequireAuth';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItem from './Pages/MyItem/MyItem';
import NotFound from './Pages/NotFound/NotFound';
import OurTeam from './Pages/OurTeam/OurTeam';
import Registration from './Pages/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/addNewItem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/ourTeam" element={<OurTeam></OurTeam>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>

        <Route path="/myItems" element={
        <RequireAuth>
            <MyItem></MyItem>
        </RequireAuth>
        }></Route>
       
        <Route path="/inventory/:id" element={
        <RequireAuth>
            <ItemDetail></ItemDetail>
        </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

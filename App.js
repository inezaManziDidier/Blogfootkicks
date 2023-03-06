import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/signup';
import { Component } from 'react';
import Team from './pages/Team'
import SideBar from './component/sideBar';
import Table from './component/Table_Dash';
import SideBar1 from './component/SideBar1';
import SideBar2 from './component/sidebar_2';

class App extends Component{
   render(){
    return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/sign-up" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<SideBar/>}></Route>
        <Route path="/dash_table" element={<SideBar1/>}></Route>
        <Route path="/dash_new_blog" element={<SideBar2/>}></Route>
      

      </Routes>
    
    );
   }
}

export default App;

/* eslint-disable*/
import { useState } from 'react';
import './App.css';
import img from './bgFile/오리쉑.jpeg';
import data from "./data/Data";
import {Header, ShoesCard} from './card/Component';
import DetailPage from "./pages/Detail"
import EventPage from "./pages/Event"
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"





function App() {
  let [item] = useState(data);
  

  return (
    <div className="App">
      <Routes> 

        <Route path="/detail/:id" element={<DetailPage item={item}/>}/>

        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<p>첫 주문시 오리쉑 인형을 선물로!</p>}/>
          <Route path="two" element={<p>쿠폰 받아가세요~</p>}/>
        </Route>

        <Route path="/" element={
          <div>
            <Header/>
            <div className="mainPic" style={{backgroundImage : 'url('+ img +')'}}></div>
            <ShoesCard/>
          </div>}/>

        <Route path="*" element={<div>없는 페이지입니다.</div>}/>
        
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>어바웃 멤버</div>}/>
          <Route path="location" element={<div>어바웃 로케이션</div>}/>
        </Route>
  
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;

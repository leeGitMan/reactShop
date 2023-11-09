/* eslint-disable*/
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"


const EventPage = function EventPpageComponent(){
    let nav = useNavigate();
    let cursor = {cursor:'pointer'};
    

    
    return(
        <>
            <div>오늘의 이벤트</div>
            <p style = {cursor} onClick={() =>{nav('/event/one')}}>무슨 이벤트냐구요? 그럼 click!</p>
            <Outlet></Outlet>
        </>
    )
}

export default EventPage;
/* eslint-disable*/

import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"


const EventPage = function EventPpageComponent(){
    return(
        <>
            <div>오늘의 이벤트</div>
            <Outlet></Outlet>
        </>
    )
}

export default EventPage;
/* eslint-disable*/
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from '../data/Data';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"




const Header = function NavFromCom(){
    let [shoes] = useState(data);
    let navigate = useNavigate();
    return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container className="navCon">
          <Navbar.Brand href="#home" className="navBar">오리쉑 shoes shop</Navbar.Brand>
          <Nav className="me-auto nav">
            <Nav.Link onClick={ () => {navigate("/") }}>오리쉑 집</Nav.Link>
            <Nav.Link onClick={ () => {navigate("/detail") }}>오리쉑 상세</Nav.Link>
            <Nav.Link onClick={ () => {navigate("/event") }}>오리쉑의 이벤트</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
    )
}


const ShoesCard = function BodyCompontent(){
    let [shoes] = useState(data);
    return(
    <Container>
        <Row>
            {shoes.map((item, index) =>(
                <Col xs key={index}>
                    <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" />
                    <h4>{item.title}</h4>
                    <p>{item.price}원</p>
                </Col>
            ))}
        </Row>
    </Container>
    )
}





export {Header, ShoesCard};
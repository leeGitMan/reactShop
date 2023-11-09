/* eslint-disable*/
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from '../data/Data';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom"
import axios from 'axios'




const Header = function navFromCom(){
    let [watchedItem, setWatchedItem] = useState(JSON.parse(localStorage.getItem('watched')));
    let navigate = useNavigate();
    console.log(watchedItem);
    return(
    <Navbar bg="dark" data-bs-theme="dark" className='navBar'>
        <Container className="navCon">
          <Navbar.Brand href="/" className="navBar">오리쉑 shoes shop</Navbar.Brand>
          <Nav className="me-auto nav">
            <Nav.Link onClick={ () => {navigate("/") }}>오리쉑 집</Nav.Link>
            <Nav.Link onClick={ () => {navigate("/cart") }}>오리쉑의 카트</Nav.Link>
            <Nav.Link onClick={ () => {navigate("/event") }}>오리쉑의 이벤트</Nav.Link>
          </Nav>
        </Container>
        {
            watchedItem != null ? <WatchedItemUI watchedItem={watchedItem} /> : null
        }

    </Navbar>
    )
}


// 버튼을 한번더 눌렀을 때 데이터 더 불러오기
// 버튼을 2번이상 눌렀을 때는 데이터 없다하기
// 버튼을 눌렀을 때 로딩중입니다 UI 띄우기

function LoadingUl(props){
    
    return(
        <h4>로딩중입니다요</h4>
    )
}


function WatchedItemUI(props){
    return(
        <div className="watchedItemBox">
            <h4>최근 본 상품</h4>
            {
                props.watchedItem.map((item) =>{
                    return(
                        <a href={`detail/${item}`}><img src={`https://codingapple1.github.io/shop/shoes${item + 1}.jpg`} width="10%" /></a>
                    )
                })
            }
        </div>
        
    )
}


const ShoesCard = function bodyCompontent(){
    let [btnCount, setCount] = useState(1);
    let [shoes, setShoes] = useState(data);
    let [loadingUi, setLoading] = useState(false);
    
    let countBtn = () =>{
        setCount(btnCount + 1);
        if(btnCount == 1){
            setLoading(true);
            axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((result) =>{
                let copyShoes = [...shoes, ...result.data];
                setShoes(copyShoes);
                
            })
            .catch(() =>{
                alert("데이터 가져오기 실패");
                setLoading(false);
            })
        }else if(btnCount == 2){
            setLoading(true);
            axios
            .get('https://codingapple1.github.io/shop/data3.json')
            .then((result) =>{
                let copyShoes = [...shoes, ...result.data];
                setShoes(copyShoes);
                
            })
            .catch(() =>{
                alert("데이터 가져오기 실패");
                setLoading(false);
            })
        }else if(btnCount > 2){
            alert("더이상은 야매로");
            setLoading(false);
        }
    }

    return(
    <Container>
        <Row>
            {shoes.map((item, index) =>(
                <Col xs key={index}>
                    <a href={`detail/${index}`}><img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" /></a>
                    <h4>{item.title}</h4>
                    <p>{item.price}원</p>
                </Col>
            ))}
            <button onClick={countBtn}>더보기</button> 
            {
                loadingUi == false ? null : <LoadingUl/>
            }    
        </Row>
    </Container>
    )
}





export {Header, ShoesCard};
export default Header;
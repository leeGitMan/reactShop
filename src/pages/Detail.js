/* eslint-disable*/
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components'
import Header from '../card/Component';
import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { order } from './../store.js'
import { useDispatch, useSelector } from 'react-redux';
import Cart from "./Cart.js"


let YellowBtn = styled.button`
    background: ${ props => props.bg };
    color : ${ props => props.bg === 'yellow' ? 'red' : 'white' };
    padding: 10px;
`

let ChangeButton = styled.button`
    background : ${props => props.color};
    color : ${props => props.color === 'red' ? 'yellow' : 'white'};
    padding : 10px;
`



const DetailPage = function detailComponent(props){
    
    let [inputVal,  setInputVal] = useState('');
    let [count, setCount] = useState(0);
    let [color, setColor] = useState("red");
    let [alarm, setAlarm] = useState(true);
    let [tap, setTap] = useState(0);
    let [fadeDetail, setFadeDetail] = useState('');
    let dispatch = useDispatch();
    let navigate = useNavigate();
    
    

    let onClickChange = () =>{
        color === 'red' ? setColor('blue') : setColor('red');
    }
    
    let {id} = useParams();
    let findItem = props.item.find( (item) =>{
        return item.id == id; 
    })

    console.log(findItem);

    // push는 배열에 요소를 추가하고 새로운 길이를 반환한다.

    // let watchedItem = JSON.parse(localStorage.getItem('watched'));
    // watchedItem.push(findItem.id);
    // localStorage.setItem('watched', JSON.stringify(watchedItem));
    // 이렇게 하면 배열에 중복되는 id가 들어가게된다.
    // Set객체를 이용해서 중복을 없애고, (물론 findIndex나 find로 없앨 수 있지만)
    // 배열에 다시 담아서 JSON으로 로컬스토리지에 보내자

    useEffect(() =>{
        let watchedItem = new Set(JSON.parse(localStorage.getItem('watched')));
        watchedItem.add(findItem.id);
        // Set을 배열로 변환 후 다시 저장
        localStorage.setItem('watched', JSON.stringify(Array.from(watchedItem)));
    },[]);

    

    // useEffect(() => {
    //     setTimeout(() => {
    //         setAlarm(false);
    //     }, 2000);
    //     if(isNaN(inputVal)){
    //         alert("숫자만 입력하래두");
    //     }
    // },[inputVal]);


    useEffect( () =>{
        setTimeout(() =>{
            setFadeDetail('after');
        }, 100);
        
        return () =>{
            setFadeDetail('')
        }
    },[])


   
    
    return (
        <div className={`container start ${fadeDetail}`}>
            
            <div className="row">
            <Header></Header>

            {
                alarm == true ? <AlertPage/> : null
            }

            {count}<YellowBtn bg="yellow" onClick={() => {
                setCount(count + 1);
            }}>프롭스 버튼</YellowBtn>
            
            <ChangeButton color={color} onClick={onClickChange} >색깔 바뀌는 버튼</ChangeButton>
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${findItem.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) =>{
                        setInputVal(e.target.value);
                    }}/><label>주문할 갯수를 입력해주세요.</label>
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}원</p>
                    <button className="btn btn-danger" onClick={ () =>{
                        dispatch(order({ id : findItem.id + 3, name : findItem.title, count : inputVal}))
                    }}>주문하기</button> <button onClick={ () =>{ navigate("/cart")}}>카트로 가기</button>
                </div>
            </div>


            <Nav justify variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick = { () => { setTap(0) }} eventKey="link0">0번</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ () => { setTap(1) }}  eventKey="link1">1번</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={ () => { setTap(2) }}  eventKey="link2">2번</Nav.Link>
                </Nav.Item>
            </Nav>

            <TapContent tap={tap} item = {props.item}/>

        </div>
    )
}

// function TapContent(props){
//     if(props.tap == 0){
//         return <div>내용0번</div>
//     }else if(props.tap == 1){
//         return <div>내용1번</div>
//     }else if(props.tap == 2){
//         return <div>내용2번</div>
//     }
// }

function TapContent(props){

    let [fade, setFade] = useState('');

    useEffect(() =>{
        let a = setTimeout(() =>{
            setFade('after');
        },10)
        
        return () =>{
            clearTimeout(a);
            setFade('');
        }
    }, [props.tap])

    return <div className={`start ${fade}`}>
        {[<div>안녕하세요 신발명 : {props.item[0].title} </div>, <div>오리쉑 쇼핑몰입니다.</div>, <div>아아 잘 보이나요?</div>][props.tap]}
    </div>;
}


function AlertPage(){
    return(
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
    )
}

export default DetailPage;
/* eslint-disable*/
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Header from '../card/Component';
import { useState } from "react";


let YellowBtn = styled.button`
    background: ${ props => props.bg };
    color : ${ props => props.bg === 'yellow' ? 'red' : 'white' };
    padding: 10px;
`

let ChangeButton = styled.button`
    background : ${props => props.color};
    color : ${props => props.color === 'red' ? 'yellow' : 'black'};
    padding : 10px;
`



const DetailPage = function detailComponent(props){

    let [color, setColor] = useState("red");
    let onClickChange = () =>{
        color === 'red' ? setColor('blue') : setColor('red');
    }
    
    let {id} = useParams();
    let findItem = props.item.find( (item) =>{
        return item.id == id; 
    })
    
    
    return (
        <div className="container">
            
            <div className="row">
            <Header></Header>
            <YellowBtn bg="yellow">프롭스 버튼</YellowBtn>
            <ChangeButton color={color} onClick={onClickChange} >색깔 바뀌는 버튼</ChangeButton>
            
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${findItem.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div>
    )
}

export default DetailPage;
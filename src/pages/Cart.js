/* eslint-disable*/
import Header from '../card/Component';
import { useEffect, useState } from "react";
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import user, { changeName, increaseAge} from './../store.js'
import cartData, { countPlus, countMinus, deleteItem} from './../store.js'




function Cart(){

    let cartData = useSelector((state) =>{ return state.cartData});
    let user = useSelector((state) => state.user)
    let dispatch = useDispatch()
    return(
        <div>
            <Header/>
            {user.name}의 장바구니
            {/* <button onClick={() => { dispatch(increaseAge(1)) }}>1씩 나이 올리기</button>
            <button onClick={() => { dispatch(increaseAge(10)) }}>10씩 나이 올리기</button>
            <button onClick={() => { dispatch(increaseAge(100)) }}>100씩 나이 올리기</button> */}
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>상품명</th>
                        <th>갯수</th>
                        <th>변경하기</th>
                        <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((item, index) =>{
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.count}</td>
                            <td>
                                <button onClick={ () =>{
                                dispatch(countPlus({id : item.id}));
                            }}> + </button>

                                <button onClick={ () =>{
                                dispatch(countMinus({id : item.id}));
                            }}> - </button>
                            </td>
                            <td style={{cursor : 'pointer'}}>
                                <button onClick={ () =>{
                                dispatch(deleteItem({id: item.id}));
                            }}>삭제</button>
                            </td>
                        </tr>
                    })}
                </tbody>
                <button onClick={ () =>{
                        dispatch(changeName());
                    }}>테스트</button>
            </Table> 
        </div>
    )
}

export default Cart;
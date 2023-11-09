/* eslint-disable*/
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';

let cartData = createSlice({
    name : 'cartData',
    initialState: 
    [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        countPlus(state, action){
            let {id} = action.payload;
            let findId = state.find((state) =>{
                return state.id === id
            });
            if(findId){
                findId.count++;
            }
        },
        countMinus(state, action){
            let {id} = action.payload;
            let findId = state.find((state) =>{
                return state.id === id
            });
            if(findId){
                findId.count--;
            }
        },
        order(state, action){
            let { id, name, count} = action.payload;
            // 해당 id를 가진 아이템을 찾자
            // +=을 할때 문자열로 받아지다 보니, 정수로 변환을 해주어야한다.
            count = parseInt(count, 10)

            let existingItem = state.find(item => item.id === id);
            if(existingItem){
                existingItem.count += count;
                alert('기존 장바구니 상품에서 갯수를 더하였습니다.');
            }else{
                let priorLength = state.length;
                state.push({id,name,count});
                let currentLength = state.length;
                if(priorLength < currentLength){
                    alert('주문 성공!');
                }else{
                    alert('주문 실패!');
                }
            }
        },
        deleteItem(state, action){
            // 해당 인덱스를 찾고
            // 삭제하자
            // findIndex()
            let findIndex = state.findIndex((state) => state.id === action.payload.id);
            if(findIndex != -1){
                state.splice(findIndex,1);
            }
        }
    }
});

export let { countPlus, countMinus, order, deleteItem} = cartData.actions

export default cartData
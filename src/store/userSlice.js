/* eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name: '오리쉑', age : 20},
    reducers :{
        changeName(state){
            state.name = 'hyun ' + state.name;
        },
        increaseAge(state, action){
            state.age += action.payload;
        }
    }
});

export let { changeName,increaseAge } = user.actions

export default user


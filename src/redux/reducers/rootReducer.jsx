import { combineReducers } from '@reduxjs/toolkit';
import {BurgerReducer} from './reducers/BurgerReducer';

export const rootReducer = combineReducers({
    BurgerReducer
})
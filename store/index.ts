import {configureStore, combineReducers} from '@reduxjs/toolkit'
import languageSlice from './languageSlice'
const reducers = combineReducers({
    language: languageSlice
})
export type rootState = ReturnType<typeof reducers>
export default configureStore({
    reducer: reducers
})
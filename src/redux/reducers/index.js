import { combineReducers } from 'redux'
import roomData from './rooms.js'

const appReducers = combineReducers({
    roomData : roomData
})

export default appReducers
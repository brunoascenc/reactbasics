import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceCreamReducer from './icecream/iceCreamReducers'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer
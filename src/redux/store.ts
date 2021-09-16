import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import feedReducer from './reducers/feed-reducer'
import itemReducer from './reducers/item-reducer'
import jobsReducer from './reducers/jobs-reducer'


const rootReducer = combineReducers({
    feed: feedReducer,
    jobs: jobsReducer,
    item: itemReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export type AppStateType = ReturnType<typeof rootReducer>

export default store
import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreameSlice'
import courseDetailsReducer from '../pages/courseDetails/courseDetailsSlice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        course: courseDetailsReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
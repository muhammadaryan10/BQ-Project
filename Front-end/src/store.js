import { createStore } from "@reduxjs/toolkit";
import rootReducer from './reducer/main'
 const store=createStore(rootReducer);
 export default store;
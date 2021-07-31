
import {SEARCH_TODO,FETCH_API} from "./action.type";

export const ReducerComp = (state,action) => {
    switch(action.type){
        case SEARCH_TODO : 
           return {
               ...state,
               traks: action.payload,
               heading: "Search Result",
               
            };
        case FETCH_API :
           return {
               ...state,
               traks: action.payload,
               heading: "Top 10 Song",
               
        }
        default :
         return state;
    }
}
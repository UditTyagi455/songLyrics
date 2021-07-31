import React,{useEffect,useReducer} from 'react'
import Axios from "axios";
import { Contexts } from '../Context';
import Traks from "./Traks";
import {ReducerComp} from "../Reducer/Reducers"
import Search from "./Search"

const initialState = {
    traks: [],
    heading: ''
}

const Home = () =>{

    

     const [state,dispatch]= useReducer(ReducerComp,initialState);
     
     const fetchDetail = async () =>{
         try{
             const {data} =await Axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`);
            
             dispatch({type: 'FETCH_API',payload: data.message.body})
                 
         }
         catch(error){
             console.log(error);

         }
     }
     
     useEffect(()=>{
         fetchDetail();
     },[]);
    return(
        <>
         <Contexts.Provider value={{state,dispatch}}>
             <Search/>
              <Traks/>
         </Contexts.Provider>
         </>
    );
}

export default Home;
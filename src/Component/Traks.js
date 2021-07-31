import React,{useContext} from 'react'
import {Container,Row} from "reactstrap";
import {Contexts} from "../Context"
import NotFound from './NotFound';
import Content from "./Content"


const  Traks = () =>{
     const data=useContext(Contexts);
     
    return (
            <Container>
                    {(data.state.traks.track_list === undefined || data.state.traks.track_list === 0) ? 
                      
                      <NotFound/>
                      :
                      <React.Fragment>                              
                      <h3 className="text-center m-4 text-warning" style={{textTransform: "uppercase",fontSize: "2rem",fontWeight: "bold"}}><ul>{data.state.heading}</ul></h3>
                      <Row>
                         {data.state.traks.track_list.map((item)=>(
                             <Content key={item.track.track_id} track={item.track}/>
                         ))}
                      </Row>
             </React.Fragment>
                }         
            </Container>
                
            )
}
export default Traks;

import React,{useContext,useState} from 'react'
import {Container,Button, Card, CardBody, Form, FormGroup} from "reactstrap";
import {BsMusicNoteBeamed} from "react-icons/bs";
 import Axios from "axios";
 import {Contexts} from "../Context"

const Search = () =>{

     const [values,setValues] =useState("");
    //  const [query,setQuery] = useState("");
    //  const [apiValue,setApiValue] = useState({});

    const {dispatch}=useContext(Contexts);
    
        
        // const APIfetch = async () =>{
        //     try{
        //     const {data} = await Axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&apikey=${key}`);

        //     console.log(data.message.body);
        //     // dispatch({type: 'SEARCH_SONG_LIST',payload: data.message.body})
        //      setApiValue(data.message.body);

        //     }catch(error){
        //         console.log(error);
        //     }
        // }

    // useEffect(() =>{
    //     APIfetch();
    // },[query]); 


    const changeValue = (e) =>{
        setValues(e.target.value);
    }
    const handleClick = async (e) =>{
        e.preventDefault();
        // setQuery(values);

            try{
            const {data} = await Axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${values}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`);

            dispatch({type: 'SEARCH_SONG_LIST',payload: data.message.body})
            //  setApiValue(data.message.body);

            }catch(error){
                console.log(error);
            }

       if(values === ''){
         return  console.log("please! enter the value");
       }
    //    dispatch({type: 'SEARCH_SONG_LIST',payload: apiValue})
       
       
    }
      
    return (
        <div>
            <Container className="text-center" style={{marginTop: "2rem"}}>
                <Card>
                    <CardBody className="mb-4 p-4">
                        <h1 className="display-3 text-center">
                          <BsMusicNoteBeamed/>  Search For A Song
                        </h1>
                        <Form onSubmit={handleClick}>
                            <FormGroup>
                            <input type="text" placeholder="Search Song" className="form-control form-control-lg" value={values} onChange={changeValue} style={{borderRadius: "4px",padding: "4px 6rem 6px 9px",border: "2px solid black",textTransform: "capitalize"}}/><br/><br/>
                            <Button color="danger" style={{padding: "1.5vh 31vw",cursor: "pointer"}} size="lg" block>Search Music</Button>                   
                        
                            </FormGroup>
                        </Form>
                        
                    </CardBody>
                </Card>
                
            </Container>
        </div>
    )
}
export default Search;
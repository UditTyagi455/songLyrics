import React,{useEffect,useState} from 'react';
import {Container,Button,Card, CardBody, CardHeader} from "reactstrap"
import {useParams,Link} from "react-router-dom";
import Axios from "axios";
import NotFound from './NotFound';

export default function Lyrics() {
     
    const [lyrics,setLyrics] =useState({});
    const [detail,setDetail] =useState({});
    

    const {id}= useParams();
    


      const fetchData = async () =>{
        
          const {data} =await Axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_API_KEY}`);

        
          setLyrics(data.message.body.lyrics); //set the lyrics value
      }

      const fetchTheAPI = async () =>{
          const {data} = await Axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_API_KEY}`);


          setDetail(data.message.body.track); //set the value of detail 
      }
     
      useEffect(() =>{
          fetchData();
          fetchTheAPI();
      },[]);
    return (
        <Container >
            {lyrics === undefined || detail === undefined || Object.keys(lyrics).length === 0 || Object.keys(lyrics).length === 0 ?
              <NotFound/>
              :
              <React.Fragment >
             <Link to="/"><Button color="danger" style={{margin: "1rem 0rem 2rem 0rem",padding: "9px 38px"}}>back</Button></Link>
             <Card>
                 <CardHeader>
                     <h5 style={{textTransform: "capitalize"}}>{detail.track_name} by{' '}
                     <span className="text-secondary"> {detail.artist_name}</span>
                     </h5>
                 </CardHeader>
                 <CardBody>
             <h5 style={{padding: "2rem 3rem"}}>{lyrics.lyrics_body}</h5>
             </CardBody>
             </Card>
                 
                     <Card>
                         <CardBody>
                             <h5>Artist : {detail.artist_name}</h5>
                         </CardBody>
                     </Card>
                 
                     <Card>
                         <CardBody>
                             <h5>Album : {detail.album_name}</h5>
                         </CardBody>
                     </Card>
             </React.Fragment> 
            }
        </Container>
            
    )
}

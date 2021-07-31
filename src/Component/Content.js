import React from 'react'
import {Link} from "react-router-dom";
import {Col,Card,CardBody,CardText,Button} from "reactstrap";
import {BsPlayFill,BsChevronRight} from "react-icons/bs";
import {FaCompactDisc} from "react-icons/fa"

 const Content =({track}) =>{
    return (
        <Col md="6">
          <Card className="mb-4 shadow-sm" style={{borderRadius: "12px"}}>
            <CardBody>
                <h5 style={{textTransform: "uppercase"}}>{track.artist_name}</h5>
                <CardText>
                    <p><strong><BsPlayFill/> Track</strong>: {track.track_name}</p>
                    <p><strong><FaCompactDisc/> Album</strong>: {track.album_name}</p>
                    <Link to={`component/lyrics/${track.track_id}`}>
                     <Button color="dark" size="lg" className="text-center" style={{padding: "2% 36%"}}><BsChevronRight/>View Lyrics</Button>
                    </Link>
                </CardText>
            </CardBody>
          </Card>
        </Col>
    )
}

export default Content;
import React from 'react';
import {Container} from 'reactstrap';
import spinner from "./spinner.gif"


export default function NotFound() {
    
    return (
        <>
                    <Container className="text-center m-4">
                    <img src={spinner}
                     alt="Loading...."
                     style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
                      />
                     </Container>
        </>
    )
}

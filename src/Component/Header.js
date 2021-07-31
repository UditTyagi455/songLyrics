import React from 'react';
import {Navbar,NavbarText} from "reactstrap";
import Home from "./Home"
// import Search from './Search';

const Header = () =>{
    return(
        <React.Fragment>
             <Navbar color="dark" className="container-fluid" dark expand="md">
                 <NavbarText className="mx-auto text-uppercase font-weight-bold" style={{fontSize: "22px",color: "white"}}>Lyricfinder</NavbarText>
             </Navbar>
             {/* <Search/> */}
             <Home/>
            </React.Fragment>

    )
}
export default Header;
import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div> 
        <h4 className=''>Login with</h4>
       <Button className='mb-2' variant="outline-primary"> <FaGoogle className='m-2' />Login With Google</Button>
         <Button variant="outline-secondary"><FaGithub className='m-2'/>Login With Github</Button> 

         <div className='mt-4'> 
         <ListGroup>
         <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
         <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
         <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
          
       </ListGroup>
        </div>
        <QZone></QZone>
        <div>
        <img src={bg} alt="" />
        </div>
        </div>
    );
};

export default RightNav;
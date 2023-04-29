import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod praesentium sequi animi magnam temporibus quis ullam provident sunt mollitia corrupti, numquam aliquid, quaerat quo sint, accusantium hic voluptas omnis.</p>
         <p>Go Back To <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
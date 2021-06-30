import React from 'react';

import { Link } from 'react-router-dom';  
import {GiConfirmed} from 'react-icons/gi';

const SignedUp = () => {

    return(
        <div className='center flex flex-column'>
            <GiConfirmed className='green center f2'/>
            <p className='f4'>Successfully signed up. You can sign in now.</p>
            <Link
                className='ma2 f4 mb3 link no-underline text1 pointer dark-blue center'
                to='/'>
                Sign In
            </Link>

        </div>
        
    )
}

export default SignedUp;
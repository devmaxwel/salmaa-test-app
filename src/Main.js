import React, {useState} from 'react'
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import classes from './action.module.css';
function Main() {
    const [active, setActive] = useState('First');
    return (
        <div  className={classes.actions}>
            <button type='submit' onClick={() => setActive('First') }>First Content</button>
            <button type='submit' onClick={() => setActive('Second') }>Second Content</button>
            <button type='submit' onClick={() => setActive('Third') }>Third Cotent</button>


            {active === 'First' &&  <FirstContent />}

            {active === 'Second' && <SecondContent />}

            {active === 'Third' && <ThirdContent />}
        </div>
    );
}

export default Main;

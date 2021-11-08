import React from 'react';
import { useState } from 'react';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import classes from './action.module.css'

function MianRepeat() {
    const [current, setIsCurrent] = useState('First')

    function firstSetHandler(){
         if(current){
             setIsCurrent('First')
         }else{
             setIsCurrent(null)
         }
    }

    function secondSetHandler(){
        if(current){
            setIsCurrent('Second')
        }else{
            setIsCurrent(null)
        }
    }

    function thirdSetHandler(){
        if(current){
            setIsCurrent('Third')
        }else{
            setIsCurrent(null)
        }
    }


    
    return (
        <div className={classes.actions}>
            <button type='submit' onClick={firstSetHandler}>First</button>
            <button type='submit' onClick={secondSetHandler}>Second</button>
            <button type='submit' onClick={thirdSetHandler}>Third</button>

            {current === 'First' && <FirstContent />}
            {current === 'Second' && <SecondContent />}
            {current === 'Third' && <ThirdContent />}
        </div>
    )
}

export default MianRepeat;

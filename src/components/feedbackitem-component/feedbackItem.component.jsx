import React from 'react';

const FeedbackItem = ({item}) => {
    


const handleClick = ()=>{
    
}
    return (
        <div className='card'>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text} </div>
            <button onClick={handleClick} > click </button>

            
        </div>
    );
}

export default FeedbackItem;

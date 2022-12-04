import React from 'react';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../../context/Feedbackcontext';

const RatingSelect = ({select}) => {

    const [selected, setSelected] = useState(10);

    const {feedbackEdit} = useContext(FeedbackContext);

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
    }

    useEffect(()=>{
      setSelected(feedbackEdit.item.rating)
    },[feedbackEdit])

    useEffect( ()=>{

        select(selected)

    },[selected,select] )

    return (
        <ul className='rating'>
            {Array.from({ length: 10 }, (_, i) => (
                <li key={`rating-${i + 1}`}>
                    <input
                        type='radio'
                        id={`num${i + 1}`}
                        name='rating'
                        value={i + 1}
                        onChange={handleChange}
                        checked={selected === i + 1}
                    />
                    <label htmlFor={`num${i + 1}`}>{i + 1}</label>
                </li>
            ))}
        </ul>
    );
}

export default RatingSelect;

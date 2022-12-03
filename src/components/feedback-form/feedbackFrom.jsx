import React from 'react';
import { useState,useEffect } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect from '../rating-select/RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../../context/Feedbackcontext';

const FeedbackFrom = () => {

    const [text,setText] = useState('');
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [message,setMesaage] = useState('');
    const [rating,setRating]= useState(10);

    const {addFeedback,feedbackEdit} = useContext(FeedbackContext)
    
    const handleChange =  (e)=>{
        setText(e.target.value)
    }


    useEffect(()=>{

        if(feedbackEdit){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
           
        }

       },[feedbackEdit])

    useEffect( ()=>{

        console.log(text)

        if(!text){
            setBtnDisabled(true);
            setMesaage(null);
           
        }else if( text !== '' && text.trim().length <= 10 ){
            setBtnDisabled(true);
            setMesaage("text must be at least 10 caracters")
        }else{
            setMesaage(null);
            setBtnDisabled(false);
        }


       },[text] )
   
 


 const handleSubmit = (e) =>{

    e.preventDefault();

    const feedbackToAdd = {
        text:text,
        rating:rating
    }

    addFeedback(feedbackToAdd);

    setText("");

 }

  
    return (
        <div>

            <Card>

            <form onSubmit={handleSubmit} >

                 <h2>How would you rate your service with us?</h2>
                 <RatingSelect select={ (rating) => setRating(rating) }/>
                    <div className="input-group">
                    <input type="text" onChange={handleChange} placeholder='Write a review' value={text}/>
                    <Button type="submit" version="primary" isDisabled={btnDisabled}> Send </Button>
                 </div>

                 {message && <div className='message'> {message} </div>}

            </form>
            

            </Card>

            
        </div>
    );
}

export default FeedbackFrom;

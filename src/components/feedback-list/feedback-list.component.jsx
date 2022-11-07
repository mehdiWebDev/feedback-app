import React from 'react';
import FeedbackItem from '../feedbackitem-component/feedbackItem.component';

const FeedbackList = ({ feedback }) => {
    console.log(feedback)

    if (!feedback) {
        return <p> No Feedback yet </p>
    }
    return (
        <div className='feedback-list'>

            {feedback.map((item) => {
                return (<FeedbackItem key={item.id} item={item} />)

            })}

        </div>
    );
}

export default FeedbackList;

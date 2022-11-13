import React from 'react';
import FeedbackItem from '../feedbackitem-component/feedbackItem.component';
import { motion, AnimatePresence } from 'framer-motion'

const FeedbackList = ({ feedback, handleDelete }) => {
    console.log(feedback)

    if (!feedback) {
        return <p> No Feedback yet </p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => {
                    return (
                    <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  >
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div> 
                    )

                })}
            </AnimatePresence>

        </div>
    );
}

export default FeedbackList;

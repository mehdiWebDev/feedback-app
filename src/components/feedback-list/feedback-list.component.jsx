import React from 'react';
import FeedbackItem from '../feedbackitem-component/feedbackItem.component';
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react';
import FeedbackContext from '../../context/Feedbackcontext';
import Spinner from '../shared/spinner';

const FeedbackList = () => {
    
    const {feedback,isLoading} = useContext(FeedbackContext)

    if (!feedback && !isLoading) {
        return <Spinner />
    }


    return isLoading ?( <Spinner/>) : (        <div className='feedback-list'>
    <AnimatePresence>
        {feedback.map((item) => {
            return (
            <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  >
                <FeedbackItem key={item.id} item={item} />
            </motion.div> 
            )

        })}
    </AnimatePresence>

</div> )
    

}

export default FeedbackList;

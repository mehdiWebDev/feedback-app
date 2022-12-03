import { createContext,useState } from "react";
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext();


export const FeedbackProvider = ({children})=> {
    const [feedback,setFeedback]= useState([
        {   id:1,
            text:"This text is from context",
            rating:10
        
        }
        ])


        const [feedbackEdit,setFeedbackEdit] = useState({
            item:{},
            edit:false
        })

        const editFeedback = (item)=>{
            setFeedbackEdit({
                item,
                edit:true
            })
        }

        const deleteFeedback = (id) => {
            setFeedback(currentFeedbackData => {
              return currentFeedbackData.filter((feedback) => feedback.id !== id)
            })
          }

          const addFeedback = (newFeedback) => {
            newFeedback.id = uuidv4();
            console.log(feedback)
            setFeedback([newFeedback, ...feedback])
          }

       
    return <FeedbackContext.Provider value={{
        feedback:feedback,
        deleteFeedback:deleteFeedback,
        addFeedback:addFeedback,
        editFeedback:editFeedback,
        feedbackEdit:feedbackEdit
        
        }} >
            {children}
          </FeedbackContext.Provider>
}

export default FeedbackContext
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


        //update feedback item

        const updateFeedback = (id,updItem) =>{
                setFeedback(feedback.map((item)=>{
                    return  item.id === id ? {...item,...updItem} : item  
                }))
        }


        const [feedbackEdit,setFeedbackEdit] = useState({
            item:{},
            edit:false
        })

        //edit feedback
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
            setFeedback([newFeedback, ...feedback])
          }

       
    return <FeedbackContext.Provider value={{
        feedback:feedback,
        feedbackEdit:feedbackEdit,
        deleteFeedback:deleteFeedback,
        addFeedback:addFeedback,
        editFeedback:editFeedback,
        updateFeedback:updateFeedback
        
        
        }} >
            {children}
          </FeedbackContext.Provider>
}

export default FeedbackContext
import { createContext,useState,useEffect } from "react";


const FeedbackContext = createContext();


export const FeedbackProvider = ({children})=> {

    const [isLoading,setIsLoading] = useState(true);
    const [feedback,setFeedback]= useState([])


    useEffect(() => {
     fetchFeedback()
    },[])

    //fetch feedback
    const fetchFeedback = async () =>{
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    //update feedback item

    const updateFeedback = async (id,updItem) =>{

        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(updItem)
        })

        const data = await response.json()
            setFeedback(feedback.map((item)=>{
                return  item.id === id ? {...item,...data} : item  
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

        //delet feedback
        const deleteFeedback = async (id) => {

            if(window.confirm('are you sure you want to delet ?')){

            await fetch(`/feedback/${id}`,{method:"DELETE"})

                setFeedback(currentFeedbackData => {
                    return currentFeedbackData.filter((feedback) => feedback.id !== id)
                  })

            }

       
          }
          // add feedback
          const addFeedback = async (newFeedback) => {
            const response = await fetch('/feedback', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(newFeedback)
            })

            const data = await response.json()

           
            setFeedback([data, ...feedback])
          }

       
    return <FeedbackContext.Provider value={{
        feedback:feedback,
        feedbackEdit:feedbackEdit,
        isLoading:isLoading,
        deleteFeedback:deleteFeedback,
        addFeedback:addFeedback,
        editFeedback:editFeedback,
        updateFeedback:updateFeedback,
        
        
        
        }} >
            {children}
          </FeedbackContext.Provider>
}

export default FeedbackContext
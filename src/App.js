import React from "react";
import Header from "./components/header-component/header.component";
import FeedbackList from "./components/feedback-list/feedback-list.component";
import FeedbackData from "./components/data/FeedbackData";
import { useState } from "react";

function App() {

  const [feedback,setFeedback] = useState(FeedbackData) 

  return (
    <>
      <Header/>
      <div className="container">
      <FeedbackList feedback={feedback} />
      
      </div>



    </>

  );
}

export default App;

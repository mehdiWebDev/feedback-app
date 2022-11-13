import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"
import React from "react";
import Header from "./components/header-component/header.component";
import FeedbackList from "./components/feedback-list/feedback-list.component";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackStats from "./components/feedback-stats/feedbackStats";
import FeedbackFrom from "./components/feedback-form/feedbackFrom";
import AboutPage from "./route/AboutPage";
import { useState } from "react";
import AboutIconLink from "./components/About-icon-link";

function App() {
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

  const [feedback, setFeedback] = useState(FeedbackData)

  return (

    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackFrom addFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>

  )
}

export default App;

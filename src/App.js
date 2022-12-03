import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/header-component/header.component";
import FeedbackList from "./components/feedback-list/feedback-list.component";
import FeedbackStats from "./components/feedback-stats/feedbackStats";
import FeedbackFrom from "./components/feedback-form/feedbackFrom";
import AboutPage from "./route/AboutPage";
import AboutIconLink from "./components/About-icon-link";
import { FeedbackProvider } from "./context/Feedbackcontext";

function App() {


  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackFrom/>
                <FeedbackStats/>
                <FeedbackList/>
              </>
            }
          ></Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>

  )
}

export default App;

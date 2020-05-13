import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom";
import Header from "./component/header/header.component";
import SideNavBar from "./component/sidebar/sidebar.component";
import LiveJob from "./component/live-job/live-job.component";
import RejectedJob from "./component/rejected-job/rejected-job.component";
import AcceptedJob from "./component/accepted-job/accepted-job.component";
import RightSideBar from "./component/right-sidebar/right-sidebar.component";
import Candidate from "./component/candidate/candidate.component";

function App({ fetchLiveJobStart }) {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col-md-2">
          <SideNavBar />
        </div>

        <Switch>
          <Route exact path="/" component={LiveJob} />
          <Route exact path="/acceptedjob" component={AcceptedJob} />
          <Route exact path="/rejectedjob" component={RejectedJob} />
          <Route exact path="/candidate" component={Candidate} />
        </Switch>

        <div className="col-md-1">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default App;

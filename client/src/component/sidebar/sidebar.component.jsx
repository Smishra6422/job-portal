import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./sidebar.style.scss";

const SideNavBar = () => {
  return (
    <Router>
      <div className="sidenavbar">
        <div className="sidenavbar-container">
          <h6>Navigation</h6>
          <ul className="sidenavbar-items">
            <li className="sidenavbar-item">
              <a href="/">
                <i class="fa fa-tachometer"></i>
                Dashboard
              </a>
            </li>
            <li className="sidenavbar-item">
              <a href="/candidate">
                <i class="fa fa-user"></i>Candidates
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="sidenavbar-container">
          <h6>Jobs</h6>
          <ul className="sidenavbar-items">
            <li className="sidenavbar-item">
              <a href="/">
                <i class="fa fa-briefcase"></i>Live Jobs
              </a>
            </li>
            <li className="sidenavbar-item">
              <a href="/acceptedjob">
                <i class="fa fa-briefcase"></i>Accepted Jobs
              </a>
            </li>
            <li className="sidenavbar-item">
              <a href="/rejectedjob">
                <i class="fa fa-briefcase"></i>Rejected Jobs
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="sidenavbar-container">
          <h6>Support</h6>
          <ul className="sidenavbar-items">
            <li className="sidenavbar-item">
              <a href="/">
                <i class="fa fa-question-circle"></i>Help Desk
              </a>
            </li>
            <li className="sidenavbar-item">
              <a href="/">
                <i class="fa fa-play"></i>Tutorial
              </a>
            </li>
            <li className="sidenavbar-item">
              <a href="/">
                <i class="fa fa-comment"></i>Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
};

export default SideNavBar;

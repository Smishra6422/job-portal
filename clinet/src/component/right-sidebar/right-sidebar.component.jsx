import React from "react";

import "./right-sidebar.style.scss";

const RightSideBar = () => {
  return (
    <div className="right-sidebar-container">
      <ul>
        <li className="right-sidebar-item">
          <i class="fa fa-search"></i>
        </li>
        <li className="right-sidebar-item">
          <i class="fa fa-filter"></i>
        </li>
        <li className="right-sidebar-item">
          <i class="fa fa-sort"></i>
        </li>
      </ul>
    </div>
  );
};

export default RightSideBar;

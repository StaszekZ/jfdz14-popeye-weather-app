import React from "react";
import "../CSSForComponents/Dashboard.css";
// import { NameOfApp } from "./NameOfApp";

import { AppHeader } from "./AppHeader";
import { InvitationMessage } from "./InvitationMessage";
import { ChartOne } from "./ChartOne";
import { ChartTwo } from "./ChartTwo";
import { AppContent } from "./AppContent";
import {
  HomeOutlined,
  LocationOnOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
  StarBorderOutlined,
} from "@material-ui/icons";

export const Dashboard = () => {
  return (
    <>
      <AppContent>
        <InvitationMessage
          message={
            <>
              <div className="dashboardInvitation">
                Dear Katarzyna,
                <br />
                in our application you can:
              </div>
            </>
          }
        />

        <div className="listElement">
          <HomeOutlined />
          <span className="dashboardMessage">Home Page</span>
        </div>
        <div className="listElement">
          <LocationOnOutlined />
          <span className="dashboardMessage">
            Information about weather in your current location
          </span>
        </div>
        <div className="listElement">
          <SearchOutlined />
          <span className="dashboardMessage">
            Search for different locations and review weather
          </span>
        </div>
        <div className="listElement">
          <StarBorderOutlined />
          <span className="dashboardMessage">
            Review your favorites locations
          </span>
        </div>
        <div className="listElement">
          <NotificationsActiveOutlined />
          <span className="dashboardMessage">Set notifications</span>
        </div>
      </AppContent>

      <div className="chartsBackground">
        <ChartOne />
        <ChartTwo />
      </div>
    </>
  );
};

// export default Dashboard;
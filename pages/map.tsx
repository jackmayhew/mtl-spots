import React, { useState } from "react";
import Map from "../components/Maps/Map";

function map() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="outer__inner">
      <div className="section main main_tasks">
        <div className="main__center center">
          <div className="main__preview">
            <Map />
          </div>
          <div className="panel panel_tasks">
            <div className="panel__background"></div>
            <div className="panel__nav map__nav">
              <a
                className={
                  activeTab === "All" ? "panel__link active" : "panel__link"
                }
                onClick={() => setActiveTab("All")}
              >
                All
              </a>
              <a
                className={
                  activeTab === "Stairs" ? "panel__link active" : "panel__link"
                }
                onClick={() => setActiveTab("Stairs")}
              >
                Stairs
              </a>
              <a
                className={
                  activeTab === "Rails" ? "panel__link active" : "panel__link"
                }
                onClick={() => setActiveTab("Rails")}
              >
                Rails
              </a>
              <a
                className={
                  activeTab === "Ledges" ? "panel__link active" : "panel__link"
                }
                onClick={() => setActiveTab("Ledges")}
              >
                Ledges
              </a>
              <a
                className={
                  activeTab === "Gaps" ? "panel__link active" : "panel__link"
                }
                onClick={() => setActiveTab("Gaps")}
              >
                Gaps
              </a>
              <a
                className={
                  activeTab === "Other" ? "panel__link active" : "panel__link"
                }
                onClick={() => setActiveTab("Other")}
              >
                Other
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default map;

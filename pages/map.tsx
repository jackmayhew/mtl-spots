import React, { useState } from "react";
import Map from "../components/Maps/Map";
import { server } from "../utils/domain";
import useMediaQuery from "../utils/width";
import { useRouter } from "next/router";

function map({ initialSpots }) {
  const [activeTab, setActiveTab] = useState("");

  let filteredSpots = initialSpots.filter((spot) =>
    spot.category.includes(activeTab)
  );

  const isBreakpoint = useMediaQuery(768);

  const router = useRouter();
  let openSpot = router.query.spot;

  const closeModal = (e) => {
    // close modals
    let allMarkers = document.getElementsByClassName("map__modal");
    for (let i = 0; i < allMarkers.length; i++) {
      allMarkers[i].classList.remove("modal__show");
    }
    // remove query so modal doesnt reopen
    router.query.spot = "";
    // set active tab
    e.target.textContent === "All"
      ? setActiveTab("")
      : setActiveTab(e.target.textContent);
  };

  return (
    <div className="outer__inner">
      <div className="section main main_tasks">
        <div className="main__center center">
          <div className="main__preview">
            <Map
              initialSpots={filteredSpots}
              isBreakpoint={isBreakpoint}
              openSpot={openSpot}
            />
          </div>
          <div className="panel panel_tasks">
            <div className="panel__background"></div>
            <div className="panel__nav map__nav">
              <a
                className={
                  activeTab === "" ? "panel__link active" : "panel__link"
                }
                onClick={closeModal}
              >
                All
              </a>
              <a
                className={
                  activeTab === "Stairs" ? "panel__link active" : "panel__link"
                }
                onClick={closeModal}
              >
                Stairs
              </a>
              <a
                className={
                  activeTab === "Rails" ? "panel__link active" : "panel__link"
                }
                onClick={closeModal}
              >
                Rails
              </a>
              <a
                className={
                  activeTab === "Ledges" ? "panel__link active" : "panel__link"
                }
                onClick={closeModal}
              >
                Ledges
              </a>
              <a
                className={
                  activeTab === "Gaps" ? "panel__link active" : "panel__link"
                }
                onClick={closeModal}
              >
                Gaps
              </a>
              <a
                className={
                  activeTab === "Other"
                    ? "panel__link panel__hide active"
                    : "panel__link panel__hide"
                }
                onClick={closeModal}
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

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/spots/map`);

  const data = await res.json();

  return {
    props: {
      initialSpots: data.data,
    },
  };
}

export default map;

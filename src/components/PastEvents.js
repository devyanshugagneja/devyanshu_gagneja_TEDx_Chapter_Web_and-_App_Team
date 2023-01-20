import React from "react";

export default function PastEvents() {
  const background = {
    backgroundImage: "url('paintedx.42242a20.png')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const pastEventsText = {
    width: "100%",
    marginBottom: "4rem",
    textAlign: "left",
    //fontSize: "calc((clamp(300px, 80vw, 600px) / 1080) * 160)",
    fontWeight: "700",
  };
  const pastEvents = {
    width: "80vw",
    padding: "5% 0px",
  };
  return (
    <div className="container" style={background}>
      <div className="pastEvents" style={pastEvents}>
        <div className="pastEventsText my-5" style={pastEventsText}>
          <h1>
            <b> Past Events </b>
          </h1>{" "}
        </div>
        <div className="row">
        <div className="card col-sm-4 card" style={{ width: "18rem" }}>
          <img
            src="poster-square-2021.7bd155bc.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">2021 Events</h5>

            <a
              href="https://tedxiitpatna.com/pastevents/2021"
              className="btn btn-primary"
            >
              Learn more
            </a>
          </div>
        </div>
       
          <div className="card col-sm-4 card" style={{ width: "18rem" }}>
            <img src="poster-square-2019.ebefe211.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">2020 Event</h5>
              <a href="https://tedxiitpatna.com/pastevents/2019" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
          <div className="card col-sm-4 card" style={{ width: "18rem" }}>
            <img src="poster-square-2016.6f82bc90.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">2019 Events</h5>
              
              <a href="https://tedxiitpatna.com/pastevents/2016" className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

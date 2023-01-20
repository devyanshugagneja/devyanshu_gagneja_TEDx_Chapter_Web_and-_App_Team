import React from "react";
export default function Home() {
  const SpeakerFormButtonStyle = {
    display: "inline-block",
    position: "relative",
    margin: "3rem 2rem",
    padding: "1rem 2rem",
    color: "red",
    fontWeight: "500",
    textAlign: "center",
    border: "1px solid red",
    transition: "color .2s",
    borderRadius: "100px",
    overflow: "hidden",
  };
  const ButtonStyle = {
    float: "right",
    maxWidth: "50%",
    textAlign: "right",
    margin: "1rem 0",
    color: "red",
    fontSize: "calc((clamp(500px, 36vw, 580px)/1080)*35)l",
    fontWeight: "500",
    textDecoration: "underline",
  };
  const myStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "80%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "calc((clamp(200px, 30vw, 300px)/1080)*80)",
    lineHeight: "calc((clamp(200px, 30vw, 300px)/1080)*200)",
    fontWeight: "700",
    letterSpacing: "calc((clamp(200px, 30vw, 300px)/1080)*100)",
  };
  const imageStyle = {
    width: "552px",
    hieght: "991px",
  };
  return (
    <div className="container">
      <section className="theme infaff web" style={imageStyle}>
        <img src="infinity-logo.0b7b0934.png" alt="" className="bg" />
        <span className="title" style={myStyle}>
          Infinite Affinities
        </span>
      </section>
      <br />
      <br />
      <div className="d-flex align-items-center">
        <div className="flex-grow-1 ms-3">
          <h1>Togetherness.</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id
            autem quae, corporis assumenda natus delectus quos debitis quisquam
            modi expedita quibusdam molestiae officiis nesciunt odit animi
            labore et sit omnis perspiciatis ipsa! Quidem atque delectus non
            tenetur reprehenderit blanditiis enim, necessitatibus labore cum.
            Consequatur natus voluptate perspiciatis veniam tempore. Nobis
            molestiae ex nulla optio. Aliquam, ullam? Consequatur laborum at
            mollitia ab repudiandae, reiciendis cumque dicta voluptatum
            assumenda quos provident possimus excepturi ducimus unde eos animi
            officia sed sit quibusdam facilis corporis voluptates repellat!
            Laboriosam ullam porro saepe voluptas nisi commodi voluptates sint
            sit eligendi deserunt! Harum veniam animi qui!
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src="hands-red-string.7448c5ab.png" alt="" />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="flex-shrink-0">
          <img src="question_mark.e5bff376.png" alt="" />
        </div>
        <div className="flex-grow-1 ms-3">
          <h1>What is TEDx?</h1>
          <p>
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxIITPatna, where x = independently organized TED event. At
            our TEDxIITPatna event, TED Talks video and live speakers will
            combine to spark deep discussion and connection in a small group.
            The TED Conference provides general guidance for the TEDx program,
            but individual TEDx events, including ours, are self-organized.
          </p>
          <a
            href="https://www.ted.com/about/programs-initiatives/tedx-program"
            target="_blank"
            class="link"
            rel="noopener noreferrer"
            style={ButtonStyle}
          >
            More about TEDx Program &#10146;
          </a>
        </div>
      </div>
      <br />
      <br />

      <div className="d-flex align-items-center">
        <div className="flex-grow-1 ms-3">
          <h1>TEDxVITbhopal</h1>
          <p>
            {" "}
            Since 2016 TEDxIITPatna has strived to establish momentous and
            unforgettable events with discussions that have a long-term impact.
            With a footfall of 1500+ participants in our past events, we have
            continued to promote creativity and spark conversations even amid a
            global pandemic. As we reach a semblance of normalcy, this year, we
            present our fourth edition - "Infinite Affinities." We celebrate
            symbiosis and the independent yet collaborative spirit that allows
            us to reach new heights. Featuring diverse speakers from various
            walks of life, we hope to provide an enlightening experience to our
            community.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src="cross_stroke.4a2c56b5.png" alt="" />
        </div>
      </div>
      <br />
      <br />
      <div className="text-center">
        <h2>Interested in becoming a speaker?</h2>
        <a
          href="https://forms.gle/jhDwBQmSFid4jjPZ6"
          target="_blank" rel="noreferrer" 
          style={SpeakerFormButtonStyle}
        >
          Speaker Applications →
        </a>
      </div>
    </div>
  );
}

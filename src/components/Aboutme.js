import "./Aboutme.css";

function Aboutme() {
  return (
    <div className="Aboutme">
      <h2 className="about-me__title text-center" id="about">
        About Me
      </h2>
      <div className="container mt-5">
        <section className="about-me">
          <div className="about-me__body">
            <div className="about-me__img shadow">
              <div className="hat"></div>
              <div className="toyhead">
                <div className="eyes eye-left"></div>
                <div className="eyes eye-right"></div>
                <div className="mouth"></div>
              </div>
              <div className="toybody">
                <div className="buttons button1"></div>
                <div className="buttons button2"></div>
                <div className="buttons button3"></div>
              </div>
            </div>
            <div className="about-titles">
              <h2 className="about__title">
                <strong>Who I am</strong>
              </h2>
              <h3 className="about__subtitle">
                Computer's Science Engineer, GITAM university
              </h3>
            </div>
            <p className="details">
              I am a graduate just having basic knowledge in front-end and
              python languages required for industry, I developed few personal
              projects so that I can keep up my practice, I like to be
              associated with an organization that helps me grow personally &
              professionally
            </p>
          </div>
          <div className="knowledge">
            <h4>Things in Which i have grip on :</h4>
            <div className="languages">
              <img
                src="https://raw.githubusercontent.com/ChittojiMuraliSreeKrishna/images/main/images/icons/html.png?token=AO3RFNBHUFV5LR4CNCCDFMTAOEW3E"
                className="icons"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/ChittojiMuraliSreeKrishna/images/main/images/icons/css.png?token=AO3RFNFJHTPZ6PG2F3HRMMTAOEW42"
                className="icons"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/ChittojiMuraliSreeKrishna/images/main/images/icons/javascript.png?token=AO3RFNCD325UI2ZE3EHHTJTAOEW6C"
                className="icons"
                alt=""
              />
              <img
                src="https://raw.githubusercontent.com/ChittojiMuraliSreeKrishna/images/main/images/icons/python.png?token=AO3RFNAFIPK5YSBD2JADOKDAOEW7W"
                className="icons"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Aboutme;

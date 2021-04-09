import './Aboutme.css';

function Aboutme() {
  return (
    <div className="Aboutme">
      <h2  className="about-me__title text-center" id="about">About Me</h2>
      <div className="container mt-5">
	<section className="about-me">
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
        <h2 className="about__title">
        <strong>Who I am</strong></h2>
        <h3 className="about__subtitle">
          Computer's Science Engineer, GITAM university
        </h3>
        <div className="about-me__body">
          <p>
            I am a graduate just having basic knowledge in front-end and python
            languages required for industry, I developed few personal projects
            so that I can keep up my practice, I like to be associated with an organization
            that helps me grow personally & professionally</p>
        </div>
        <div className="knowledge">
        <h4>Things in Which i have grip on :</h4>
        <div className="languages">
            <img src="./images/icons/html.png" className="icons" alt="" />
            <img src="./images/icons/css.png" className="icons" alt="" />
            <img src="./images/icons/javascript.png" className="icons" alt="" />
            <img src="./images/icons/python.png" className="icons" alt="" />
        </div>
      </div>
      </section>
    </div>
    </div>
  );
}

export default Aboutme;

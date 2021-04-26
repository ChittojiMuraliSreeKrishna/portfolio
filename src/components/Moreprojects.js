import "./Moreprojects.css";

function Moreprojects() {
  return (
    <div className="Moreprojects">
      <h2 className="moreProj-title container" id="moreProj">
        MoreProjects
      </h2>
      <div className="view container">
        <p className="view-text"></p>
      </div>
      <p className="moreProj-text container">
        Few more projects & trying out few youtube challenges
      </p>
      <div className="moreProj container">
        <div className="moreProj-head">
          <div className="head-circle"></div>
          <div className="head-circle"></div>
          <div className="head-circle"></div>
          <div className="head-circle"></div>
        </div>
        <div className="moreProj-body">
          <a
            href="https://github.com/ChittojiMuraliSreeKrishna/PythonCodes"
            className="moreProj-card"
          >
            <p>Python-Codes</p>
          </a>
          <a
            href="https://github.com/ChittojiMuraliSreeKrishna/TkinterPython"
            className="moreProj-card"
          >
            <p>Tkinter-Challenge</p>
          </a>
          <a
            href="https://github.com/ChittojiMuraliSreeKrishna/10FrontEndChallenge"
            className="moreProj-card"
          >
            <p>Frontend-Challenge</p>
          </a>
          <a
            href="https://github.com/ChittojiMuraliSreeKrishna/VanillaJS"
            className="moreProj-card"
          >
            <p>Vanilla-Javascript</p>
          </a>
          <a
            href="https://github.com/ChittojiMuraliSreeKrishna/HtmlCss"
            className="moreProj-card"
          >
            <p>HtmlCss/Basic</p>
          </a>
          <a
            href="https://github.com/ChittojiMuraliSreeKrishna/Simple_Assistant.git"
            className="moreProj-card"
          >
            <p>Simple-Assistant</p>
          </a>
        </div>
      </div>
      <div className="contact container">
        <h2 className="contact__title">Contact me</h2>
        <div className="contact__body">
          <div className="coffecup">
            <div className="coffecap"></div>
            <div className="coffe">
              <div className="coffelogo"></div>
            </div>
          </div>
          <div className="contact__details">
            <p className="phoneno">
              <i className="fas fa-phone"></i> +91 9972577728
            </p>
            <p className="email">
              <i className="fas fa-at"></i> cmkrishna97@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moreprojects;

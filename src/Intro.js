import './Intro.css';

function Intro() {
  return (
    <div className="Intro container" id="home">
      <div className="intro__image">
		<img src="./images/mine.jpg" alt="" className="intro__img" />
		</div>
		<div className=".intro__text">
		<h1 className="intro__title">Hi I'm <strong>Murali Sree Krishna
			C</strong></h1>
		<h2 className="intro__subtitle">Graduate-2020</h2>
		</div>
    </div>
  );
}

export default Intro;

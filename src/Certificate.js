import './Certificate.css';

function Certificate() {
  return (
    <div className="Certificate container">
      <h2 className="certificate-title" id="certificates">Certificates</h2>
      <div className="certificates">
          <a className="certificate-items" href="#certificates"><img className="certificate-img" src="./images/certificates/work1.png" alt="" /></a>
          <a className="certificate-items" href="#certificates"><img className="certificate-img" src="./images/certificates/work2.png" alt="" /></a>
          <a className="certificate-items" href="#certificates"><img className="certificate-img" src="./images/certificates/work3.png" alt="" /></a>
          <a className="certificate-items" href="#certificates"><img className="certificate-img" src="./images/certificates/work4.png" alt="" /></a>
      </div>
    </div>
  );
}

export default Certificate;

import './Personal.css';

function Personal() {
  return (
    <div className="Personal">
      <h2 className="projects__title text-center" id="personal">Personal Projects</h2>
      <div className="projects container">
            <div className="card">
                <div className="card-header">
                <h3>Social Media PHP</h3>
                </div>
                <div className="card-body">
                <img src="./images/personal/ps6.png" className="card-img-bottom" alt="" />
                <div className="content">
                    <h5 className="title">#PHP</h5>
                    <h5 className="title">#HTML</h5>
                    <h5 className="title">#CSS</h5>
                    <h5 className="title">#JavaScript</h5>
                </div>
                </div>
                <div className="card-footer">
                    <a href="https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/Socialmedia" className="codebtn">CODE</a>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <h3>Todo List PHP</h3>
                </div>
                <div className="card-body">
                <img className="card-img-bottom" src="./images/personal/ps7.png" alt="" />
                <div className="content">
                    <h5 className="title">#PHP</h5>
                    <h5 className="title">#HTML</h5>
                    <h5 className="title">#CSS</h5>
                    <h5 className="title">#Javascript</h5>
                </div>
                </div>
                <div className="card-footer">
                    <a href="https://github.com/ChittojiMuraliSreeKrishna/Php/tree/main/TodoList" className="codebtn">CODE</a>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <h3>FaceRecog Opencv2</h3>
                </div>
                <div className="card-body">
                <img className="card-img-bottom" src="./images/personal/ps3.jpg" alt="" />
                <div className="content">
                    <h5 className="title">#Python</h5>
                    <h5 className="title">#CV2</h5>
                    <h5 className="title">#Numpy</h5>
                    <h5 className="title">#Pickle</h5>
                </div>
                </div>
                <div className="card-footer">
                   <a href="https://github.com/ChittojiMuraliSreeKrishna/Python_codes/tree/master/Opencv" className="codebtn">CODE</a> 
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <h3>Ecommerce Site Django</h3>
                </div>
                <div className="card-body">
                <img className="card-img-bottom" src="./images/personal/ps2.png" alt="" />
                <div className="content">
                    <h5 className="title">#Python</h5>
                    <h5 className="title">#Django</h5>
                    <h5 className="title">#HTML</h5>
                    <h5 className="title">#CSS</h5>
                    <h5 className="title">#JavaScript</h5>
                </div>
                </div>
                <div className="card-footer">
                    <a href="https://github.com/ChittojiMuraliSreeKrishna/Django_Ecommerce" className="codebtn">CODE</a>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <h3>Todolist Vanilla-js</h3>
                </div>
                <div className="card-body">
                <img className="card-img-bottom" src="./images/personal/ps5.png" alt="" />
                <div className="content">
                    <h5 className="title">#HTML</h5>
                    <h5 className="title">#CSS</h5>
                    <h5 className="title">#JavaScript</h5>
                </div>
                </div>
                <div className="card-footer">
                    <a className="codebtn" href="https://github.com/ChittojiMuraliSreeKrishna/TodoList">CODE</a>
                    <a className="pagebtn" href="https://chittojimuralisreekrishna.github.io/TodoList/">PAGE</a>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                <h3>Arch Linux Installation</h3>
                </div>
                <div className="card-body">
                <img className="card-img-bottom" src="./images/personal/ps1.png" alt="" />
                <div className="content">
                    <h5 className="title">#HTML</h5>
                    <h5 className="title">#CSS</h5>
                    <h5 className="title">#JavaScript</h5>  
                </div>
                </div>
                <div className="card-footer">
                    <a className="codebtn" href="https://github.com/ChittojiMuraliSreeKrishna/Arch-Linux-Installation">CODE</a>
                    <a className="pagebtn" href="https://chittojimuralisreekrishna.github.io/Arch-Linux-Installation/">PAGE</a>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Personal;

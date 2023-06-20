import './App.css';
function App() {
  return (
      <body>
        <header>
          <h1><span>L</span>ina</h1>
          <nav>
            <a href='#'>HOME</a>
            <a href='#'>SKILLS</a>
            <a href='#'>WORKS</a>
            <a href='#'>CONTACT</a>
          </nav>
      </header>
      <hr></hr>
      <main>
        <h1>Hello, My name is BELGHERBI Lina</h1>
        <p>I'm a computer science student,I have a medium in web , mobile and desktop </p> 
        <button className='button-1'>Download CV</button>
        <div className='skills'>
          <h2>Skills</h2>
          <h3>Front-End</h3>
          <p>HTML , CSS , JS , RectJS ,Flutter.</p>
          <h3>Back-End</h3>
          <p>Nodejs , ExpresJs.</p>
          <h3>Languages</h3>
          <p>C,C++,C#,Javascript.</p>
        </div>
        <div className='works'>
          <h2>Works</h2>
          <a href='https://github.com/belgherbi-lina'>My github projects</a> 
        </div>
        <div className='contact'>
          <h2>Connect with me </h2>
          <input placeholder="Email"></input>
          <input placeholder="Message"></input>
          <button className='button-2'>Stay Connected</button>
        </div>
      </main>
    </body>
  );
}

export default App;

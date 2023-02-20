import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";
import { send } from 'emailjs-com';
import { useState } from "react";

const Home = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_yj90yyg',
      'template_4h4a9wq',
      toSend,
      'pQP7D27kh00UhVM_o'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div id="home-page">
        <div id='home-details'>
          <h3>Hi, I'm Brandon.</h3>
          <h2>Full Stack Developer.</h2>
          <p>Proven leader with 10+ years SaaS experience.</p>
          <a href="/#about-page">Learn More</a>
        </div>
        <img width="40%" src="/headshot.png" alt="" />
      </div>
      <div id="right-section-divider"></div>
      {/* About Me */}
      <div id='about-page'>
        <div id='badges-container'>
          {/* <div id='stack-one'> */}
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="html" />
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="css3" />
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react" />
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
            <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="netlify" />
            <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="vscode" />
          {/* </div> */}
          {/* <div id="stack-two"> */}
            <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" alt="sequelize" />
            <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="git" />
            <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="github" />
            <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="express" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres" />
          {/* </div> */}
        </div>
        <div id='about-me'>
          <h1>I build useful technology.</h1>
          <p>People-Focused Leader who has successfully built fast paced tech startups. Currently pivoting to a web development career track because I'm at a point in my life where I'm able pursue my passions and designing and creating technology has always been a dream job.</p>
          <h3>Based out of Denver, Colorado</h3>
          <h4>Interested in working together? <a href="/contact">Let's talk.</a></h4>

          <div id='about-me-links'>
            <h2>
              <a href="https://www.linkedin.com/in/peoplefocusedleader/">
                LinkedIn
              </a>
            </h2>
            <h2>
              <a href="https://github.com/ClarkDoom">
                Github
              </a>
            </h2>
          </div>

        </div>
      </div>
      <div id="right-section-divider"></div>
      {/* Projects */}
      {/* have smaller icons for technology used on each projcect */}
      <div id="combo-contact-project">
        <div id='contact-page'>
          <h1>Let's Connect</h1>
          <div id='contact-form'>
            <form onSubmit={onSubmit}>
              <label htmlFor="from-name">Your Name: </label>
              <input
                type='text'
                name='from_name'
                placeholder='Your Name'
                value={toSend.from_name}
                onChange={handleChange}
              />
              <label htmlFor="reply_to">Your Email: </label>
              <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <label htmlFor="message">Message: </label>
              <textarea
                name="message" cols="30" rows="10"
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
              ></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div id='project-page'>
          <h1>Projects</h1>
          <ProjectList
            projects={projects}
          />
        </div>

      </div>
    </>
  );
}

export default Home;
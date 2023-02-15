import { projects } from "../data/projects";
import ProjectList from "../components/ProjectList";



const Home = () => {
  return ( 
    <>
      <div id="home-page">
        <div id='home-details'>
          <h3>Hi, I'm Brandon.</h3>
          <h2>Full Stack Developer.</h2>
          <p>Proven leader with 10+ years SaaS experience.</p>
          <a href="/about">Learn More</a>
        </div>
        <img width="40%"src="/headshot.png" alt="" />
      </div>
      <div id="right-section-divider"></div>
      {/* About Me */}
        <div id='about-page'>
          <div id='about-me'>
            <h1>I build useful technology.</h1>
            <p>People-Focused Leader who has successfully built fast paced tech startups. Currently pivoting to a web development career track because I'm at a point in my life where I'm able pursue my passions and designing and creating technology has always been a dream job.</p>
            <h3>Based out of Denver, Colorado</h3>
            <h4>Interesting in working together? <a href="/contact">Let's talk.</a></h4>
          </div>
        </div>
        <div id="right-section-divider"></div>
      {/* Projects */}
      <div id='project-page'>
        <ProjectList 
          projects={projects}
        />
      </div>
      {/* Contact Me */}
      <div id="right-section-divider"></div>
      <div id='contact-page'>
        <h1>Let's Connect</h1> 
        <h2>Email me at branhickman@gmail.com</h2>
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
    </>
  );
}

export default Home;
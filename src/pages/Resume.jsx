const Resume = () => {
  return ( 
    <div id='resume-page'>
      <h1>Resume</h1>
      {/* upload to public folder */}
      {/* <img src="https://binaries.templates.cdn.office.net/support/templates/en-gb/lt02919188_quantized.png" alt="" /> */}

      <iframe src="/resume.pdf" frameborder="50" width='900' height='1200'></iframe>
    </div>
  );
}

export default Resume;
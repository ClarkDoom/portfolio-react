import { send } from 'emailjs-com';
import { useState } from "react";

const Contact = () => {
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
        setToSend({
          from_name: '',
          message: '',
          reply_to: '',
        })
        alert('Email sent successfully!')
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Error - email not sent.')
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id='contact-page'>
      <h1>Let's Connect</h1>
      <div id='contact-form'>
        <form onSubmit={onSubmit}>
          <label htmlFor="from-name">Name </label>
          <input
            type='text'
            name='from_name'
            placeholder='Your Name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <label htmlFor="reply_to">Email </label>
          <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <label htmlFor="message">Message </label>
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
  );
}

export default Contact;
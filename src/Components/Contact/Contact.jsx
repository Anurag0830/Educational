import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locationicon from '../../assets/location-icon.png'
import whitearrow from '../../assets/whitearrow.png'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2d8dc67a-f1da-4958-8362-f037454ea7a9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send us a message<img src={msgicon} alt=""/></h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. 
        Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
  
        </p>
        <ul>
            <li><img src={mailicon} alt=""/>Contact@GreatStack.dev</li>
            <li><img src={phoneicon} alt=""/>+1 123-456-7890</li>
            <li><img src={locationicon} alt=""/>77 Massachusetts Ave, Cambridge<br/>MA 02139, United States</li>
        </ul>
            </div>
            <div className="contact-col">
              <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name ='name' placeholder='Enter Your Name' required/>
                <label> Phone Number</label>
                <input type = "tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Message Here</label>
                <textarea name='message' rows="6"placeholder='Enter Your Message' required></textarea>
                <button type="submit" className='btn dark-btn'>Submit Now<img src={whitearrow}alt=""/></button>
              </form>
              <span>{result}</span>
        </div>
      
    </div>
  )
}





export default Contact

import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
        <h3>Send us a message<img src={msgicon} alt=""/></h3>
        <p>
        Feel free to reach out through contact form or find our contact information below. 
        Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
  
        </p>
        <ul>
            <li>Contact@GreatStack.dev</li>
            <li>+1 123-456-7890</li>
            <li>77 Massachusetts Ave, Cambridge<br>MA 02139, United States</br></li>
        </ul>
            </div>
            <div className="contact-col">
              <form>
                <label>Your Name</label>
                <input type="text" name ='name' placeholder='Enter Your Name' required/>
                <label> Phone Number</label>
                <input type = "tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write Your Message Here</label>
                <textarea name='message' rows="6"placeholder='Enter Your Message' required></textarea>
                <button type="submit" classname='btn dark-btn'>Submit Now</button>
              </form>
        </div>
      
    </div>
  )
}





export default Contact

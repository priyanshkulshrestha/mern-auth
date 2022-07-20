import React from 'react';
import img1 from '../resourse/img1.png'
import add from '../resourse/add.png'
import mail from '../resourse/mail.png'

const Contact = () => {
    return (
       <>
      <div className='contact_info'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1 d-flex flex-wrap justify-content-center'>
                    {/* phonenumber */}
                        <div className='contact_info_item'>
                            <img src={img1} alt='phone'/>
                            <div className="info">
                                <div className="text">PHONE</div>
                                <div className="details">+91-9876543210</div>
                            </div>
                        </div>
                            {/* email */}
                        <div className='contact_info_item'>
                            <img src={mail} alt='email'/>
                            <div className="info">
                                <div className="text">EMAIL</div>
                                <div className="details">priyanshk13@gmail.com</div>
                            </div>
                        </div>
                                {/* address */}
                        <div className='contact_info_item'>
                            <img src={add} alt='add'/>
                            <div className="info">
                                <div className="text">ADDRESS</div>
                                <div className="details">IPEC Ghaziabad,
                                201010 uttarpradesh</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      {/* contackform */}


      <div className='center2'>
            <div className='container_fluidnew'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <div className="formcontainer py-5"  >
                            <h1>Get In Touch</h1>
                            <form id='contact_form'>
                                <div className="formname d-flex justify-content-between align-items-between">
                                    <input type="text" id='contact_form_name' className='contact_form_name input_field' placeholder='Your name' required="true"/>
                                    <input type="email" id='contact_form_email' className='contact_form_email input_field' placeholder='Your email' required="true"/>
                                    <input type="number" id='contact_form_phone' className='contact_form_phone input_field' placeholder='Your phone' required="true"/>
                                </div>
                                <div className="contact_f_text mt-3">
                                    <textarea className="text_field" placeholder="Message"></textarea>
                                </div>

                                <div className="button">
                                    <button type='submit' className='button btn btn-primary  m-3'>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

export default Contact;

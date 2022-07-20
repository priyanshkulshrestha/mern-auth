import React from 'react';
import priyansh from '../resourse/priyansh.jpg'

const About = () => {
    return (
       <>
            <div className="Signup empform">
                <form method=''>
                    <div className="row">
                        <div className='col-md-4'>
                        <img src={priyansh} alt="me" className='img-thumbnail'/>
                        </div>
                        <div className='col-md-6'>
                        <div className='phead'>
                            <h5>Priyansh</h5>
                            <h6>Web developer</h6>
                            <p className='profile-r mt-3 mb-5'>
                                RANKING : <span> 9/10 </span> 
                            </p>


                            <ul className="nav nav-tabs" role="tablists">
                                <li className="nav-item"><a className="nav-link active" id='home-tab' data-toggle="tab" href="#home" role="tab">About</a></li>
                                <li className="nav-item"><a className="nav-link" id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a></li>
                               
                                
                            </ul>
                        </div>
                        </div>

                        <div className='col-md-2'>
                            <input type="submit" className='profile-butn btn btn-primary' name='btnaddmore' value="edit profile" />
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-work'>
                                <p>WORK LINK</p>
                                <a href="https://www.instagram.com/priyansh_kulshrestha">Instagram</a><br/>
                                <a href="https://github.com/github.com">Github</a>


                            </div>
                        </div>
                    </div>
                </form>
            </div>
       </>
    );
}

export default About;

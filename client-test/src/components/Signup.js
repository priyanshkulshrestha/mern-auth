import React, {useState} from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import ilust from '../resourse/sign-up.png'

 const Signup = () => {
    let Navigate= useNavigate();
    const [user,setUser] = useState({
        name: "", email:"", phone:"", work:"", password:"",cPassword:""
    });

    let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password,cPassword} = user;

        const res = await fetch("/register",{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                name, email, phone, work, password, cPassword
            })
        });

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            window.alert("Registration Successfull");
            console.log("Registration Successfull");

            Navigate("/signin");
        }
    }

    return (
        <>
        <div className='center'>
            <section className='Signup'>
                <div className="leftsignup">
                <h3>SIGNUP</h3>
                <form method='POST'>
                    <div className='group'>
                    <label htmlFor='name'>
                    <i className="zmdi zmdi-account"></i>
                    </label>
                    <input type="text" name='name' id='name' autoComplete='off'
                    value={user.name}
                    onChange={handleInputs}
                     placeholder='Your Name'/>
                    </div>

                    <div className='group'>
                    <label htmlFor='email'>
                    <i className="zmdi zmdi-email"></i>
                    </label>
                    <input type="email" name='email' id='email' autoComplete='off'
                    value={user.email}
                    onChange={handleInputs}
                     placeholder='Your Email'/>
                    </div>

                    <div className='group'>
                    <label htmlFor='phone'>
                    <i className="zmdi zmdi-phone-in-talk"></i>
                    </label>
                    <input type="number" name='phone' id='phone' autoComplete='off'
                    value={user.phone}
                    onChange={handleInputs}
                     placeholder='Your Phone Number'/>
                    </div>

                    <div className='group'>
                    <label htmlFor='profession'>
                    <i className="zmdi zmdi-play-circle-outline"></i>
                    </label>
                    <input type="text" name='work' id='work' autoComplete='off'
                    value={user.work}
                    onChange={handleInputs}
                     placeholder='Profession'/>
                    </div>

                    <div className='group'>
                    <label htmlFor='password'>
                    <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input type="password" name='password' id='password' autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}
                     placeholder='Password'/>
                    </div>

                    <div className='group'>
                    <label htmlFor='cpassword'>
                    <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input type="password" name='cPassword' id='cPassword' autoComplete='off'
                    value={user.cPassword}
                    onChange={handleInputs}
                     placeholder='Confirm Password'/>
                    </div>

                    <div>
                    <input type="submit" name="signup" id='signup' className="btn btn-primary" value="Register" onClick={PostData}/>
                    </div>
                </form>
                </div>
                <div className="rightsignup">
                    <img src={ilust} alt="signup"/>
                    <Link className="nav-link" to="/signin">I am already registerd</Link>
                </div>
            </section>
        </div>
        </>
    );
}

export default Signup;

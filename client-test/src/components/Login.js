import React, {useState} from 'react';
// import ilustl from '../resourse/login.png'
import ilustl from '../resourse/sign-up.png'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser =async (e) => {
        e.preventDefault();
        const res = await fetch('/signin', {
            method:"POST",
            headers:{
            "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = res.json();

        if(res.status === 400 || !data){
            window.alert('Invlid Credential');
        } else {
            window.alert('Login Successfully');
            Navigate('/')
        }
    }
    return (
       <> 
       <div className='center'>
       <section className='Signup in'>
           
           <div className="rightsignup">
               <img src={ilustl} alt="signup"/>
               <Link className="nav-link" to="/signup">Create an account</Link>
           </div>

           <div className="leftsignup">
           <h3>LOGIN</h3>
           <form method='POST'>
                <div className='group'>
               <label htmlFor='email'>
               <i className="zmdi zmdi-email"></i>
               </label>
               <input type="email" name='email' id='email' autoComplete='off' 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder='Your Email'/>
               </div>

               <div className='group'>
               <label htmlFor='password'>
               <i className="zmdi zmdi-lock"></i>
               </label>
               <input type="password" name='password' id='password' autoComplete='off' 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder='Password'/>
               </div>

               <div>
               <input type="submit" name="signin" id='signin' className="btn btn-primary" value="Signin"
                onClick={loginUser}
               />
               </div>
           </form>
           </div>
       </section>
       </div>
       </>
    );
}

export default Login;

import { useContext } from 'react';
import { Context } from '../context/userContext/context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RiUserFill, RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './LoginForm.css';


const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().required('Password is required'),
});


const LoginForm = () => {

const {dispatch} = useContext(Context);

const navigate = useNavigate();

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });



  const onSubmit = (data) => {
    console.log(data); 
    axios.post("http://localhost:3000/auth/login", {
      username: data.username,
      email: data.email,
      password: data.password
    })
    .then(({data}) => {
      if (data.token) {
        dispatch({type: "LOGIN_SUCCESS", payload:data})
        navigate('/rate-movie')
      }
    })
    .catch ((error) => {
      alert(error.response.data.error);
    });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <RiUserFill />
          <input type="text" {...register('username')} placeholder="Username" />
          {errors.username && <p className="error-message">{errors.username.message}</p>}
        </div>
        <div className="form-field">
          <RiMailFill />
          <input type="text" {...register('email')} placeholder="Email" />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
        <div className="form-field">
          <RiLockPasswordFill />
          <input type="password" {...register('password')} placeholder="Password" />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="redirect-message">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginForm;

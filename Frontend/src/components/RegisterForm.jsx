import './RegisterForm.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RiUserFill, RiMailFill, RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const RegisterForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    moviePreference: Yup.string().required('Movie Preference is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data); 
    axios.post("http://localhost:3000/auth/register", data)
    .then((response) => {
      response.data.message && toast.success(response.data.message)
      console.log(response)
    })
    .catch ((error) => {
      toast.error(error.response.data.error);
    })
  };

  return (<>
    <div className="register-form">
      <h2>Register</h2>
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
        <div className="form-field">
          <RiLockPasswordFill />
          <input type="password" {...register('confirmPassword')} placeholder="Confirm Password" />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="moviePreference">Movie Preference:</label>
          <select {...register('moviePreference')} id="moviePreference">
            <option value="">Select</option>
            <option value="action">Action</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
          </select>
          {errors.moviePreference && (
            <p className="error-message">{errors.moviePreference.message}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      <p className="redirect-message">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    <ToastContainer />
    </>
  );
};

export default RegisterForm;

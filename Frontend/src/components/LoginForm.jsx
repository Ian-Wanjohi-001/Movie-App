import './LoginForm.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RiUserFill, RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data); // You can handle the login logic here
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

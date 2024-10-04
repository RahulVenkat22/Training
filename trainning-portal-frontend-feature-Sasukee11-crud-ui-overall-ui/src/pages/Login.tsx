import React, { useState } from 'react';
import Button from '../components/Button';
import {User} from '../types/User';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, password } = formData;    
    
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }

    setFormData({
      username: '',
      password: '',
    });
    setError('');
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFormData({
      username: '',
      password: '',
    });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}          
        />
      </div>
      {error && <p className="error">{error}</p>}
      <div className='button-group'>
        <Button label="Login" type="submit"/>
        <Button label="Reset" type="button" onClick={handleReset}/>
      </div>
    </form>
  );
};

export default LoginForm;
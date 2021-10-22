import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserName } from '../../actions/userNameAction';

import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const [password, setPassword] = useState('');

  const handleChangeName = ({ target }) => {
    dispatch(setUserName(target.value));
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };

  return (
    <div className='login'>
      <h1 className='login__title'>Вход</h1>
      <input
        className='login__input'
        type='text'
        placeholder='Логин'
        onChange={handleChangeName}
      />
      <input
        className='login__input'
        type='password'
        placeholder='Пароль'
        onChange={handleChangePassword}
        value={password}
      />
      {
        (userName === 'developer21' && password === '123456')
          ? <button className='login__button'><Link to='/profile' className='link'>войти</Link></button>
          : <button disabled className='login__button'>войти</button>
      }
    </div>
  );
};

export default Home;

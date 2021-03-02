import React, {useContext} from 'react';
import axios from 'axios';
import ButtonStyled from './buttonStyled';
import UserFilterButton from './userFilterButton';
import {UserContext} from './../config/userContext';

const Toolbar = () => {
  const user = useContext(UserContext);

  const getUsers = async () => {
    const apiURL = `https://jsonplaceholder.typicode.com/users`;
    user.setLoading(true);
    try {
      const response = await axios.get(apiURL, {
        mode:"cors",
        headers:{
          "Content-Type":"application/x-www-form-urlencoded"
        }
      });
      const allUsers = response.data
      user.setLoading(false)
      user.setUsers(allUsers)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <ButtonStyled onClick={getUsers}>Load Users</ButtonStyled>
      <UserFilterButton />
    </React.Fragment>
  )
};

export default Toolbar;
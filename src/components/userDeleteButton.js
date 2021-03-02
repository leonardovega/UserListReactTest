import React, {useContext} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {UserContext} from './../config/userContext';
import {ButtonStyled} from './index';
import {StyleSheet} from 'aphrodite';

const UserDeleteButton = ({userId}) => {
  const {users, setUsers} = useContext(UserContext);
  
  const handleRemove = (e) => {
    const apiURL = `https://jsonplaceholder.typicode.com/users/${userId}`;

    axios
      .delete(apiURL, { headers: {"Access-Control-Allow-Origin": "*"}})
      .then(res => {
        setUsers(users.filter(m => m.id !== userId));
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <ButtonStyled classes={styles.delButton} onClick={handleRemove}>Delete User</ButtonStyled>
  )
}

const styles = StyleSheet.create({
  delButton: {
    backgroundColor: 'red',
    color: 'white',
    marginTop: 20,
  }
});

UserDeleteButton.propTypes = {
  userId: PropTypes.number.isRequired,
}

export default UserDeleteButton;
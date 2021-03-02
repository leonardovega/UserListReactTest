import React, {useContext} from 'react';
import {UserContext} from './../config/userContext';
import {ButtonStyled} from 'components';
import {compare_name} from './../utils/helpers';

const UserFilterButton = () => {
  const {users, setUsers} = useContext(UserContext);
  
  const handleFilter = (e) => {
    setUsers(users.sort(compare_name))
  }

  return (
    <ButtonStyled onClick={handleFilter}>Filter by name</ButtonStyled>
  )
}

export default UserFilterButton;
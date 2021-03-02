import React, {useContext} from 'react';
import { useParams } from 'react-router';
import {UserCard} from 'components';
import {UserContext} from 'config/userContext';

const UserPage = () => {
  let { id } = useParams();
  const {users} = useContext(UserContext)
  const user = users.filter((user) => user.id == id)
  return (
    <React.Fragment>
      <UserCard user={user[0]}/>
    </React.Fragment>
  )
}

export default UserPage;
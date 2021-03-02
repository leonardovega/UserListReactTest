import React from 'react';
import PropTypes from 'prop-types'
import {UserDeleteButton} from 'components';
import { css, StyleSheet } from 'aphrodite';
import {Link, useLocation} from "react-router-dom";

const UserCard = ({user}) => {
  const {email, name, phone, username, website} = user;
  let { pathname } = useLocation();
  const isHome = pathname == "/" ? true : false
  
  return (
    <div key={user.id} className={css(styles.card)}>
      <ul className={css(styles.noListStyles)}>
        <li>{name}</li>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{username}</li>
        <li><a href={`http://${website}`}>{website}</a></li>
      </ul>
      
      {isHome && <React.Fragment>
        <UserDeleteButton userId={user.id} />
        <Link to={`/users/${user.id}`}>See full card</Link>
      </React.Fragment>}
      
    </div>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    border: '1px solid black',
    margin: 10,
    padding: 20,
  },
  noListStyles: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  }
});

UserCard.propTypes = {
  user: PropTypes.object,
}

export default UserCard;
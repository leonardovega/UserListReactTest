import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import {UserCard} from './index';
import {UserConsumer} from './../config/userContext';

const List = () => {
  return (
    <div>
      <UserConsumer>
        {({users}) => {
          if (!users || users.length === 0) return <p>No users, sorry</p>;
          return (
            <React.Fragment>
              <div className={css(styles.wrapper)}>
                {users.map((user) => {
                  
                  return (
                    <UserCard key={user.id} user={user} />
                  );
                })}
              </div>
            </React.Fragment>
          )
        }}
      </UserConsumer>
    </div>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
  }
});

export default List;
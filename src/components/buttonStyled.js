import React from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';

const ButtonStyled = (props) => {
  const {children, onClick} = props;
  return (
    <button className={css(styles.button, styles.hovers, props.classes)} onClick={onClick}>{children}</button>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    border: 'none',
    borderRadius: 10,
    fontWeight: 'bold',
    marginRight: 5,
    padding: '10px 20px',
    cursor: 'pointer',
  },
  hovers: {
    ':focus': {
      textDecoration: 'underline',
    },
    ':hover': {
      textDecoration: 'underline',
    }
  }
});

ButtonStyled.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object,
}

export default ButtonStyled;
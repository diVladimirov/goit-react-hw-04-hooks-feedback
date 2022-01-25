import React from 'react';
import { Message } from './Notifications.styled';
import PropTypes from 'prop-types';

const Notifications = ({ message }) => <Message>{message}</Message>;

export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

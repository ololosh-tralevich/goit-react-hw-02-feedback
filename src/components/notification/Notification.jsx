import PropTypes from 'prop-types';

const Notification = ({ message, totalRating }) => {
  if (totalRating) {
    return <></>;
  }
  return <h2>{message}</h2>;
};

export default Notification;

Notification.defaultProps = {
  message: PropTypes.string.isRequired,
  totalRating: PropTypes.number.isRequired,
};

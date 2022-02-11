const Notification = ({ message, totalRating }) => {
  if (totalRating) {
    return <></>;
  }
  return <h2>{message}</h2>;
};

export default Notification;

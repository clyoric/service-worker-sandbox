export const PushNotificationButton = () => {

  const showNotification = () => {
    console.log('show notification');
  }

  return (
    <button onClick={showNotification}>
      SHOW NOTIFICATION
    </button>
  );
};
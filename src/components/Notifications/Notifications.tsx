import { NotificationsList } from './components/NotificationsList';
import { notificationData } from './data';

function Notifications() {
  return (
    <div>
      <h4>Notifications</h4>
      <NotificationsList data={notificationData} />
    </div>
  );
}

export { Notifications };

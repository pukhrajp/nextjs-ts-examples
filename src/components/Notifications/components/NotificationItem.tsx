import { NotificationType, Notifyable } from '../types';


function NotificationItem({ item ,data}: {item:Notifyable,data:NotificationType}) {
  return (
    <div
      style={{
        margin: '24px',
        padding: '15px',
        backgroundColor: '#333',
        color: '#fff',
      }}
    >
      {item.notification(data)}
    </div>
  );
}

export { NotificationItem };

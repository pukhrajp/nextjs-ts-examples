import { Notifyable } from '../types';

interface NotificationItemProps {
  item: Notifyable;
}

function NotificationItem({ item }: NotificationItemProps) {
  return (
    <div
      style={{
        margin: '24px',
        padding: '15px',
        backgroundColor: '#333',
        color: '#fff',
      }}
    >
      {item.notification()}
    </div>
  );
}

export { NotificationItem };

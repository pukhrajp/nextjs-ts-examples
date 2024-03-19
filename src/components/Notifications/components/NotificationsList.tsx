import {
  Implements,
  Notifyable,
  PhotosUploadNotificationType,
  ProjectInviteNotificationType,
  SharedPostNotificationType,
} from '../types';
import { NotificationItem } from './NotificationItem';
import { PhotosUploadNotification } from './PhotosUploadNotification';
import { ProjectInviteNotification } from './ProjectInviteNotification';
import { SharedPostNotification } from './SharedPostNotification';

interface NotificationsListProps {
  data: (
    | PhotosUploadNotificationType
    | SharedPostNotificationType
    | ProjectInviteNotificationType
  )[];
}

const NotificationGenerators: { [key: string]: Implements<Notifyable> } = {
  PROJECT_INVITE: ProjectInviteNotification,
  PHOTOS_UPLOAD: PhotosUploadNotification,
  SHARED_POST: SharedPostNotification,
};

function NotificationsList({ data }: NotificationsListProps) {
  return (
    <div>
      {data.map((item, index) => {
        let notification = new NotificationGenerators[item.type](item);
        return <NotificationItem key={index} item={notification} />;
      })}
    </div>
  );
}

export { NotificationsList };

import { NotificationType } from '../types';
import { NotificationItem } from './NotificationItem';
import { PhotosUploadClass } from './PhotosUploadNotification/PhotosUploadClass';
import { ProjectInviteClass } from './ProjectInviteNotification/ProjectInviteClass';
import { SharedPostClass } from './SharedPostNotification/SharedPostClass';

const NotificationGenerators: any = {
  PROJECT_INVITE: ProjectInviteClass,
  PHOTOS_UPLOAD: PhotosUploadClass,
  SHARED_POST: SharedPostClass,
};

interface NotificationsListProps {
  data: NotificationType[];
}

function NotificationsList({ data }: NotificationsListProps) {
  return (
    <div>
      {data.map((item) => {
        let notification = new NotificationGenerators[item.type](item);
        return <NotificationItem key={item.id} item={notification} />;
      })}
    </div>
  );
}

export { NotificationsList };

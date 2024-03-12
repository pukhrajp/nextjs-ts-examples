import { NotificationCollectionType } from '../types';
import { NotificationItem } from './NotificationItem';
import { PhotosUploadClass } from './PhotosUploadNotification/PhotosUploadClass';
import { ProjectInviteClass } from './ProjectInviteNotification/ProjectInviteClass';
import { SharedPostClass } from './SharedPostNotification/SharedPostClass';

interface NotificationsListProps {
  data: NotificationCollectionType;
}

const NotificationGenerators = {
  PROJECT_INVITE: ProjectInviteClass,
  PHOTOS_UPLOAD: PhotosUploadClass,
  SHARED_POST: SharedPostClass,
};

function NotificationsList({ data }: NotificationsListProps) {
  return (
    <div>
      {data.map((item) => {
        let notification;
        if (item.type === 'PHOTOS_UPLOAD')
          notification = new PhotosUploadClass(item);
        else if (item.type === 'PROJECT_INVITE')
          notification = new ProjectInviteClass(item);
        else notification = new SharedPostClass(item);

        return <NotificationItem key={item.id} item={notification} />;
      })}
    </div>
  );
}

export { NotificationsList };

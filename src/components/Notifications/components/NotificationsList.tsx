
import {   NotificationCollectionType, Notifyable, PhotosUploadNotificationType, ProjectInviteNotificationType, SharedPostNotificationType } from '../types';


interface NotificationsListProps {
  data: NotificationCollectionType;
}



const NotificationGenerators:{[key:string]:Notifyable}= {
  PROJECT_INVITE:new ProjectInviteClass(),
  PHOTOS_UPLOAD: new PhotosUploadClass(),
  SHARED_POST: new SharedPostClass(),
};

interface NotificationsListProps {
  data: NotificationType[];
}

function NotificationsList({ data }: NotificationsListProps) {

  return (
    <div>
      {data.map((item,index) => {
        let notification = NotificationGenerators[item.type];
        return <NotificationItem data={item} key={index} item={notification} />
      })}
    </div>
  );
}

export { NotificationsList };

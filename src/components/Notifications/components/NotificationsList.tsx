import {   NotificationCollectionType, Notifyable, PhotosUploadNotificationType, ProjectInviteNotificationType, SharedPostNotificationType } from '../types';
import { NotificationItem } from './NotificationItem';
import { PhotosUploadClass } from './PhotosUploadNotification/PhotosUploadClass';
import { ProjectInviteClass } from './ProjectInviteNotification/ProjectInviteClass';
import { SharedPostClass } from './SharedPostNotification/SharedPostClass';

interface NotificationsListProps {
  data: NotificationCollectionType;
}



const NotificationGenerators:{[key:string]:Notifyable}= {
  PROJECT_INVITE:new ProjectInviteClass(),
  PHOTOS_UPLOAD: new PhotosUploadClass(),
  SHARED_POST: new SharedPostClass(),
};

function NotificationsList({ data }: NotificationsListProps) {

  return (
    <div>
      {data.map((item,index) => {
        // let notification;
        // if (item.type === 'PHOTOS_UPLOAD')
        //   notification = new PhotosUploadClass(item);
        // else if (item.type === 'PROJECT_INVITE')
        //   notification = new lProjectInviteClass(item);
        // else notification = new SharedPostClass(item);
        
      
        let notification = NotificationGenerators[item.type];
        return <NotificationItem data={item} key={index} item={notification} />
      })}
    </div>
  );
}

export { NotificationsList };

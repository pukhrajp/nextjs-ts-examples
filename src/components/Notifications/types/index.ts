import React from 'react';
export interface User {
  id: number;
  name: string;
  profile_pic: string;
};
export interface SharedPostNotificationType {
  id: number;
  user: User;
  type: 'SHARED_POST';
  timeRange: string;
  createdAt: string;
  metaData: {
    post: { title: string };
    likes: number;
    shares: number;
  };
}

export interface ProjectInviteNotificationType {
  id: number;
  user: User;
  type: 'PROJECT_INVITE';
  timeRange: string;
  createdAt: string;
  metaData: {
    project: { id: number; name: string };
  };
}

export interface Photo {
  id: number;
  photo_url: string;
  caption: string;
}

export interface PhotosUploadNotificationType {
  id: number;
  user: User
  type: 'PHOTOS_UPLOAD';
  timeRange: string;
  createdAt: string;
  metaData: { count: number; group: string; photos: Photo[] };
}

export type NotificationType =
  | SharedPostNotificationType
  | PhotosUploadNotificationType
  | ProjectInviteNotificationType;

export interface Notifyable {
  notification(data:NotificationType): React.ReactNode;
}
export type NotificationCollectionType = Array<NotificationType>;

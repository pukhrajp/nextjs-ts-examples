import Image from 'next/image';
import React from 'react';
import { Notifyable, PhotosUploadNotificationType } from '../../types';

export class PhotosUploadClass implements Notifyable{
  constructor() {}

  notification(data: PhotosUploadNotificationType): React.ReactNode {
    const { metaData } = data;
    return (
      <div>
        <div>
          {data.user.name} has uploaded {metaData.count} photos in the
          group {metaData.group}
        </div>
        <ul style={{ display: 'inline' }}>
          {metaData.photos.map((photo) => (
            <li key={photo.id} style={{ display: 'inline' }}>
              <Image
                src={`${photo.photo_url}`}
                alt={photo.caption}
                width={48}
                height={48}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

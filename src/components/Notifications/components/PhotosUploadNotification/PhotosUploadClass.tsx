import Image from 'next/image';
import React from 'react';
import { Notifyable, PhotosUploadNotificationType } from '../../types';

export class PhotosUploadClass implements Notifyable {
  constructor(public data: PhotosUploadNotificationType) {}

  notification(): React.ReactNode {
    const { metaData } = this.data;
    return (
      <div>
        <div>
          {this.data.user.name} has uploaded {metaData.count} photos in the
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

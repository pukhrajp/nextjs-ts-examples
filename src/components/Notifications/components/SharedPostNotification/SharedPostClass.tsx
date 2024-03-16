import React from 'react';
import { Notifyable, SharedPostNotificationType } from '../../types';

export class SharedPostClass implements Notifyable {
  constructor() {}

  notification(data: SharedPostNotificationType): React.ReactNode {
    const { metaData } = data;
    return (
      <div>
        {data.user.name} shared a post {metaData.post.title}
      </div>
    );
  }
}

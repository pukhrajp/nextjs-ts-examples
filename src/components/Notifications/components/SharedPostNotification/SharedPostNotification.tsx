import React from 'react';
import { Notifyable, SharedPostNotificationType } from '../../types';

export class SharedPostNotification implements Notifyable {
  constructor(public data: SharedPostNotificationType) {}

  notification(): React.ReactNode {
    const { metaData } = this.data;
    return (
      <div>
        {this.data.user.name} shared a post {metaData.post.title}
      </div>
    );
  }
}

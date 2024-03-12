import React from 'react';
import { Notifyable, ProjectInviteNotificationType } from '../../types';

export class ProjectInviteClass implements Notifyable {
  constructor(public data: ProjectInviteNotificationType) {}

  notification(): React.ReactNode {
    const { metaData } = this.data;
    return (
      <div>
        {this.data.user.name} has invited you to the project{' '}
        {metaData.project.name}
      </div>
    );
  }
}

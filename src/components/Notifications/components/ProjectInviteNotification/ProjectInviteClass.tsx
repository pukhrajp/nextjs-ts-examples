import React from 'react';
import { Notifyable, ProjectInviteNotificationType } from '../../types';

export class ProjectInviteClass implements Notifyable {
  constructor( ) {}

  notification(data: ProjectInviteNotificationType): React.ReactNode {
    const { metaData } =data;
    return (
      <div>
        {data.user.name} has invited you to the project{' '}
        {metaData.project.name}
      </div>
    );
  }
}

import {
  ASSET_AVATARS,
  ASSET_IMAGES,
} from '@/utilities/constants/pathVariables';
import { NotificationCollectionType } from '../types';

export const notificationData: NotificationCollectionType = [
  {
    id: 1,
    user: {
      id: 100,
      name: 'Robin Smith',
      profile_pic: `${ASSET_AVATARS}/avatar4.jpg`,
    },
    type: 'PROJECT_INVITE',
    metaData: {
      project: { id: 12, name: 'Mouldify' },
    },

    timeRange: '10:30 am - 22.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 2,
    user: {
      id: 101,
      name: 'Stella Johnson',
      profile_pic: `${ASSET_AVATARS}/avatar5.jpg`,
    },
    type: 'PHOTOS_UPLOAD',
    metaData: {
      group: 'Art Lovers',
      count: 6,
      photos: [
        {
          id: 1,
          photo_url: `${ASSET_IMAGES}/products/speaker.jpeg`,
          caption: 'Beauty with Beast',
        },
        {
          id: 2,
          photo_url: `${ASSET_IMAGES}/products/laptop.jpeg`,
          caption: 'Nature Love',
        },
        {
          id: 3,
          photo_url: `${ASSET_IMAGES}/products/trimmer.jpg`,
          caption: 'Forest',
        },
        {
          id: 4,
          photo_url: `${ASSET_IMAGES}/products/laptop.jpeg`,
          caption: 'Nature at its best',
        },
        {
          id: 5,
          photo_url: `${ASSET_IMAGES}/products/trimmer.jpg`,
          caption: 'Sea House',
        },
        {
          id: 6,
          photo_url: `${ASSET_IMAGES}/products/speaker.jpeg`,
          caption: 'Minimal',
        },
      ],
    },

    timeRange: '09:30 am - 22.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 3,
    user: {
      id: 102,
      name: 'John Doe',
      profile_pic: `${ASSET_AVATARS}/avatar6.jpg`,
    },
    type: 'SHARED_POST',
    metaData: {
      post: { title: 'This is Beginning' },
      likes: 5677,
      shares: 345,
    },

    timeRange: '06:30 am - 22.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 4,
    user: {
      id: 105,
      name: 'North Taylor',
      profile_pic: `${ASSET_AVATARS}/avatar8.jpg`,
    },
    type: 'PROJECT_INVITE',
    metaData: {
      project: { id: 13, name: 'Jumbo' },
    },
    timeRange: '03:30 am - 22.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 5,
    user: {
      id: 756,
      name: 'Peter Broad',
      profile_pic: `${ASSET_AVATARS}/avatar4.jpg`,
    },
    type: 'PHOTOS_UPLOAD',
    metaData: {
      count: 8,
      group: 'Javascript Experts',
      photos: [
        {
          id: 1,
          photo_url: `${ASSET_IMAGES}/products/speaker.jpeg`,
          caption: 'Beauty with Beast',
        },
        {
          id: 2,
          photo_url: `${ASSET_IMAGES}/products/laptop.jpeg`,
          caption: 'Nature Love',
        },
        {
          id: 3,
          photo_url: `${ASSET_IMAGES}/products/trimmer.jpg`,
          caption: 'Forest',
        },
        {
          id: 4,
          photo_url: `${ASSET_IMAGES}/products/laptop.jpeg`,
          caption: 'Nature at its best',
        },
        {
          id: 5,
          photo_url: `${ASSET_IMAGES}/products/trimmer.jpg`,
          caption: 'Sea House',
        },
        {
          id: 6,
          photo_url: `${ASSET_IMAGES}/products/speaker.jpeg`,
          caption: 'Minimal',
        },
        {
          id: 7,
          photo_url: `${ASSET_IMAGES}/products/trimmer.jpg`,
          caption: 'Beauty with Beast',
        },
        {
          id: 8,
          photo_url: `${ASSET_IMAGES}/products/laptop.jpeg`,
          caption: 'Nature Love',
        },
      ],
    },
    timeRange: '12:30 am - 22.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 6,
    user: {
      id: 455,
      name: 'Rose Taylor',
      profile_pic: `${ASSET_AVATARS}/avatar7.jpg`,
    },
    type: 'SHARED_POST',
    metaData: {
      post: { title: 'Introduction to Javascript' },
      likes: 768,
      shares: 567,
    },
    timeRange: '11:30 pm - 21.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 7,
    user: {
      id: 676,
      name: 'Williams Blake',
      profile_pic: `${ASSET_AVATARS}/avatar10.jpg`,
    },
    type: 'PROJECT_INVITE',
    metaData: {
      project: { id: 16, name: 'Wieldy' },
    },
    timeRange: '10:30 pm - 21.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 8,
    user: {
      id: 906,
      name: 'Steve Law',
      profile_pic: `${ASSET_AVATARS}/avatar5.jpg`,
    },
    type: 'PHOTOS_UPLOAD',
    metaData: {
      count: 3,
      group: 'React Lovers',
      photos: [
        {
          id: 1,
          photo_url: `${ASSET_IMAGES}/products/speaker.jpeg`,
          caption: 'Beauty with Beast',
        },
        {
          id: 2,
          photo_url: `${ASSET_IMAGES}/products/laptop.jpeg`,
          caption: 'Nature Love',
        },
        {
          id: 3,
          photo_url: `${ASSET_IMAGES}/products/trimmer.jpg`,
          caption: 'Forest',
        },
      ],
    },
    timeRange: '09:30 pm - 21.07.20',
    createdAt: '09/12/2023',
  },
  {
    id: 9,
    user: {
      id: 678,
      name: 'Brett Heavy',
      profile_pic: `${ASSET_AVATARS}/avatar7.jpg`,
    },
    type: 'SHARED_POST',
    metaData: {
      post: { title: 'A road to good development' },
      likes: 76656,
      shares: 4566,
    },
    timeRange: '05:30 pm - 21.07.20',
    createdAt: '09/12/2023',
  },
];

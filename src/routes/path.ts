export const PATH = {
  ROOT: '/',

  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
  },

  USER: '/:userId',

  WORK: '/:userId/:title',
  _WORK: {
    EDIT: 'edit',
    SETTING: 'setting',
  },

  SETTINGS: '/settings',
  _SETTINGS: {
    PROFILE: '',
    NOTIFICATION: 'notification',
    PASSWORD: 'password',
    ACCOUNT: 'account',
  },
};

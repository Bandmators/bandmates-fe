export const PATH = {
  ROOT: '/',

  AUTH: {
    SIGNIN: '/auth/signin',
    SIGNUP: '/auth/signup',
  },

  USER: '/:userId',

  WORK: '/:userId/:title',
  _WORK: {
    OVERVIEW: '',
    EDIT: 'edit',
    HISTORY: 'history',
    SETTING: 'setting',
    _SETTING: {
      GENERAL: '',
      COLLABORATORS: 'collaborators',
    },
  },

  SETTINGS: '/settings',
  _SETTINGS: {
    PROFILE: '',
    NOTIFICATION: 'notification',
    PASSWORD: 'password',
    ACCOUNT: 'account',
  },
};

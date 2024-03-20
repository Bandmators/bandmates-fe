export const VALIDATION = {
  EMAIL: {
    REQUIRED: {
      value: true,
      message: 'Email is required.',
    },
    PATTERN: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Invalid email address.',
    },
  },
  PASSWORD: {
    REQUIRED: {
      value: true,
      message: 'Email is required.',
    },
    MIN_LENGTH: {
      value: 9,
      message: `Must be at least 9 characters.`,
    },
    MAX_LENGTH: {
      value: 20,
      message: `Must be less than 20 characters.`,
    },
  },
  NICKNAME: {
    REQUIRED: {
      value: true,
      message: 'Password is required.',
    },
    MIN_LENGTH: {
      value: 4,
      message: `Must be at least 4 characters.`,
    },
    MAX_LENGTH: {
      value: 20,
      message: `Must be less than 20 characters.`,
    },
  },
};

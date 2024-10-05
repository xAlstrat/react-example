module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
    ],
    plugins: ['react', 'react-hooks'],
    rules: {
      'react/prop-types': 'off', // Disable prop-types checking
    }
};
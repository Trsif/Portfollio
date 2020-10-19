<<<<<<< HEAD
=======
const { renameSync } = require('fs');
>>>>>>> ec69f354ad0f31dc8137fae84c0e1dd9b5d2f874
const percyHealthCheck = require('@percy/cypress/task');

module.exports = (on, config) => {
  on('task', percyHealthCheck);
<<<<<<< HEAD
=======

  on('after:screenshot', ({ path }) => {
    renameSync(path, path.replace(/ \(\d*\)/i, ''));
  });

>>>>>>> ec69f354ad0f31dc8137fae84c0e1dd9b5d2f874
  return config;
};

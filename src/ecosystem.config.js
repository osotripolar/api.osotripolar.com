module.exports = {
  apps: [{
    name: 'api.osotripolar.com',
    script: 'app.js',
    watch: '.',
    node_args: '--env-file=.env'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
module.exports = ({ env }) => ({
  url: env('DEPLOYMENT_URL'),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
 _
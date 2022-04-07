module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c0f9c31fd49203ff846ab00488f5c64'),
  },
});

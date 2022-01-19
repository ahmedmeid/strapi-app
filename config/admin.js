module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '397ad7766c67261a18e69564a17dadc2'),
  },
});

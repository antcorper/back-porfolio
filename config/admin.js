module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '738ab92446454795aa2097249535b4c8'),
  },
});

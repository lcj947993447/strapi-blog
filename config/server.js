module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8086),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '6bded1d8ba7c8d1801b3506fd3373158'),
    },
  },
});

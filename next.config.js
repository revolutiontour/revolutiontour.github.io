// module.exports = {
//     reactStrictMode: true,
//     // tourify:'http://localhost:3000/api'
// }

// production
// /* 
module.exports = {
    // reactStrictMode: true,
    // tourify:'http://localhost:3000/api',
    // assetPrefix:'/admin',
    
    swcMinify: false,
  trailingSlash: true,
  basePath: '/api/admin',
  async rewrites() {
    return [
      {
        source: '/dashboard/jadwal/:post(\\d{1,})/',
        destination: '/dashboard/jadwal/detail/index.html?id=:post', // Matched parameters can be used in the destination
      },
      {
        source: '/dashboard/objek-wisata/:post(\\d{1,})/',
        destination: '/dashboard/objek-wisata/detail/index.html?id=:post', // Matched parameters can be used in the destination
      },
    ]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/admin/:path*', // Matched parameters can be used in the destination
  //     },
  //   ]
  // },
}
// */

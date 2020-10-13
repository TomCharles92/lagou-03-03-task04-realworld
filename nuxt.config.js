module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      // 清空路由
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              name: 'login',
              path: '/login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              name: 'register',
              path: '/register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              name: 'profile',
              path: '/profile/:username',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              name: 'settings',
              path: '/settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              name: 'editor',
              path: '/editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              name: 'article',
              path: '/article/:slug',
              component: resolve(__dirname, 'pages/article/')
            },
          ]
        }
      ])
    }
  }
}
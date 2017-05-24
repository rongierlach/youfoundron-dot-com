const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('home', '/', 'index')
routes.add('work', '/work')
routes.add('blog', '/blog')
routes.add('post', '/blog/:slug', 'post')
routes.add('contact', '/contact')

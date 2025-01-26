import express from 'express'
import homeController from './controllers/home-controller.js'
import aboutController from './controllers/about-controller.js';
const routes = express.Router()

routes.route("/")
    .get(homeController)

routes.route("/about")
    .get(aboutController)

export default routes

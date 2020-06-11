import express from 'express';
import knex from './database/connection';
import PointsController from './controllers/PointsControllers'
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router();
const pointscontroller = new PointsController();
const itenscontroller = new ItemsController();
const itenscontroller = new ItemsController();


routes.get('/items', itenscontroller.index);
routes.post('/points', pointscontroller.create);
routes.get('/points', pointscontroller.index);
routes.get('/points/:id', pointscontroller.show);

export default routes;
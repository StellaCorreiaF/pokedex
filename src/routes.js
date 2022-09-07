import Router from "express";
import multer from "multer";

import multerConfig from "./config/multer";

import legendaryValidator from "./middlewares/LegendaryValidator";

import CreateLegendaryController from "./app/controllers/Legendary/CreateLegendaryController";
import DeleteLegendaryController from "./app/controllers/Legendary/DeleteLegendaryController";
import ListLegendaryController from "./app/controllers/Legendary/ListLegendaryController";
import UpdateLegendaryController from "./app/controllers/Legendary/UpdateLegendaryController";

import CreateTrainerController from "./app/controllers/Trainer/CreateTrainerController";
import ListAllTrainersController from "./app/controllers/Trainer/ListAllTrainersController";
import UpdateTrainerController from "./app/controllers/Trainer/UpdateTrainerController";


import SessionController from "./app/controllers/Auth/SessionController";
import UpdateFileController from "./app/controllers/UploadFileController";

const uploadFile = multer({ storage: multerConfig });

const routes = new Router();

const createLegendaryController = new CreateLegendaryController();
const listLegendaryController = new ListLegendaryController();
const updateLegendaryController = new UpdateLegendaryController();
const deleteLegendaryController = new DeleteLegendaryController();

// routes.get("/legendaries", listLegendaryController.index);
routes.get("/legendaries", (req, res) =>
  listLegendaryController.show(req, res)
);
routes.post("/legendaries", legendaryValidator, (req, res) =>
  createLegendaryController.create(req, res)
);
routes.put("/legendaries/:id", (req, res) =>
  updateLegendaryController.update(req, res)
);
routes.delete("/legendaries/:id", (req, res) =>
  deleteLegendaryController.delete(req, res)
);

const listAllTrainersController = new ListAllTrainersController();
const createTrainerController = new CreateTrainerController();
const updateTrainerController = new UpdateTrainerController();

routes.get("/trainers", (req, res) =>
  listAllTrainersController.listAll(req, res)
);
routes.post("/trainers", (req, res) =>
  createTrainerController.create(req, res)
);
routes.put("/trainers/:id", (req, res) =>
  updateTrainerController.update(req, res)
);

routes.post("/uploads", uploadFile.single("file"), (req, res) =>
  UpdateFileController.storeFile(req, res)
);

routes.post("/session", (req, res) => SessionController.create(req, res));

export default routes;
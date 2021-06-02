import express from "express";

import { getPhotos, createPhoto } from "../controllers/photos.js";

const router = express.Router();

router.get("/", getPhotos);
router.post("/", createPhoto);

export default router;

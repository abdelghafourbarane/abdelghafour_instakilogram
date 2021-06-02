import Photo from "../models/Photo.js";

export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPhoto = async (req, res) => {
  const photo = req.body;
  const newPhoto = new Photo(photo);
  try {
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

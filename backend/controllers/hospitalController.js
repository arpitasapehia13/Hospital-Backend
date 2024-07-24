const Hospital = require('../models/Hospital');

// Create a new hospital
const createHospital = async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    const savedHospital = await hospital.save();
    res.status(201).json(savedHospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get hospitals by city
const getHospitalsByCity = async (req, res) => {
  try {
    const { city } = req.query;
    const hospitals = await Hospital.find({ city });
    res.status(200).json(hospitals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a hospital
const deleteHospital = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedHospital = await Hospital.findByIdAndDelete(id);
    if (!deletedHospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.status(200).json({ message: 'Hospital deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a hospital
const updateHospital = async (req, res) => {
  try {
    const { id } = req.query;
    const updatedHospital = await Hospital.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedHospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.status(200).json(updatedHospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add hospital details
const addHospitalDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const updateFields = {};
    if (req.body.name) updateFields.name = req.body.name;
    if (req.body.city) updateFields.city = req.body.city;
    if (req.body.image) updateFields.image = req.body.image;
    if (req.body.speciality) updateFields.speciality = req.body.speciality;
    if (req.body.rating) updateFields.rating = req.body.rating;

    const updatedHospital = await Hospital.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true }
    );
    if (!updatedHospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.status(200).json(updatedHospital);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createHospital,
  getHospitalsByCity,
  deleteHospital,
  updateHospital,
  addHospitalDetails,
};

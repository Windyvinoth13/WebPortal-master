const jobTypeCategory = require("../models/jobTypeCategory");

// Fetch all jobTypes.
const fetch_jobTypes = async (req, res) => {
  try {
    const jobTypes = await jobTypeCategory.find();
    res.status(200).json(jobTypes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// create and save new job type
const post_jobType = async (req, res) => {
  const newType = new jobTypeCategory({
    jobType: req.body.jobType,
    category: req.body.category,
  });

  //save new job type in the database and error handling
  try {
    await newType.save();
    res.status(201).json(newType);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Fetch jobType by id
const fetch_jobType = async (req, res) => {
  const { id } = req.params;

  try {
    const requiredJobType = await jobTypeCategory.findById(id);
    res.status(200).json(requiredJobType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete By ID
const delete_jobType = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedJobType = await jobTypeCategory.deleteOne({ _id: id });
    res.status(200).json(deletedJobType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  post_jobType,
  fetch_jobType,
  fetch_jobTypes,
  delete_jobType,
};

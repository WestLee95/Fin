const Application = require('../models/Application');

exports.apply = async (req, res) => {
  const { gender, age, disability, specialConditions, reason, hostel } = req.body;
  try {
    const applicationExists = await Application.findOne({ studentId: req.user._id });
    if (applicationExists) return res.status(400).json({ message: 'Application already submitted' });

    const application = new Application({
      studentId: req.user._id,
      gender,
      age,
      disability,
      specialConditions,
      reason,
      hostel,
    });
    await application.save();

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getApplication = async (req, res) => {
  try {
    const application = await Application.findOne({ studentId: req.user._id });
    if (!application) return res.status(404).json({ message: 'Application not found' });

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.reviewApplication = async (req, res) => {
  const { applicationId, status } = req.body;
  try {
    const application = await Application.findById(applicationId);
    if (!application) return res.status(404).json({ message: 'Application not found' });

    application.status = status;
    await application.save();

    res.status(200).json({ message: 'Application reviewed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.allocateRoom = async (req, res) => {
  const { applicationId, room } = req.body;
  try {
    const application = await Application.findById(applicationId);
    if (!application) return res.status(404).json({ message: 'Application not found' });

    application.room = room;
    await application.save();

    res.status(200).json({ message: 'Room allocated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

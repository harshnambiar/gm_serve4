const Task = require('../models/task.model');

exports.setTask = async (req, res) => {
  try {
    const { data } = req.body;
    const description = data.description;
    const goodPoints = data.goodPoints;
    console.log(description);
    console.log(goodPoints);
    if (!description || !goodPoints) {
      throw 'All details are required';
    }
    const task = new Task(data);

    await task.save();

    return res.json({ message: 'Task created' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.find({ taskID: req.task._id });
    return res.json({ tasks: tasks });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { data, taskID } = req.body;
    if (!taskID) {
      throw 'taskID is required';
    }
    await Task.updateOne(
      { _id: taskID },
      {
        $set: data,
      }
    );
    return res.json({ message: 'Task updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { taskID } = req.body;
    if (!taskID) {
      throw 'taskID is required';
    }
    await Task.deleteOne({ _id: taskID });
    return res.json({ message: 'Task deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
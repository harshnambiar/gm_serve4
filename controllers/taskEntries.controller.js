const TaskEntries = require('../models/taskEntries.model');

exports.setTaskEntry = async (req, res) => {
  try {
    const { data } = req.body;
    const walletId = data.walletId;
    const taskID = data.taskID;
    const status = data.status;
    
    if (!walletId || !taskID || !status) {
      throw 'All details are required';
    }
    const taskEntry = new TaskEntries(data);

    await taskEntry.save();

    return res.json({ message: 'Task Entry created' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getTaskEntry = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    if (!data) {
      
      try {
        const taskEntries = await TaskEntries.find({ });
        return res.json({ taskEntries: taskEntries });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else if (!data.walletId){
      
      try {
        const taskEntries = await TaskEntries.find({ taskID: data.taskID });
        console.log(res);
        return res.json({ taskEntries: taskEntries });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else if (!data.taskID){
      
      try {
        const taskEntries = await TaskEntries.find({ walletId: data.walletId });
        console.log(res);
        return res.json({ taskEntries: taskEntries });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
  
  
  }catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.updateTaskEntry = async (req, res) => {
  try {
    const { data, taskID } = req.body;
    if (!taskID) {
      throw 'taskID is required';
    }
    await TaskEntries.updateOne(
      { _id: taskID },
      {
        $set: data,
      }
    );
    return res.json({ message: 'Task Entry updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.deleteTaskEntry = async (req, res) => {
  try {
    const { taskID } = req.body;
    if (!taskID) {
      throw 'taskID is required';
    }
    await Task.deleteOne({ _id: taskID });
    return res.json({ message: 'Task Entry deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
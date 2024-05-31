const List = require('../models/list.model');

exports.setList = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      throw 'data is required';
    }
    const list = new List(data);

    await list.save();

    return res.json({ message: 'list created' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getList = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    if (!data) {
      
      try {
        const lists = await List.find({ });
        return res.json({ lists: lists });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else if (!data.eventID){
      console.log("haan na");
      try {
        const lists = await List.find({ projectCode: data.projectCode });
        return res.json({ lists: lists });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else if (!data.projectCode){
      console.log("haan na");
      try {
        const lists = await List.find({ eventID: data.eventID });
        return res.json({ lists: lists });
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

exports.updateList = async (req, res) => {
  try {
    const { data, listID } = req.body;
    if (!listID) {
      throw 'listID is required';
    }
    await List.updateOne(
      { _id: listID },
      {
        $set: data,
      }
    );
    return res.json({ message: 'list updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.deleteList = async (req, res) => {
  try {
    const { listID } = req.body;
    if (!listID) {
      throw 'listID is required';
    }
    await List.deleteOne({ _id: listID });
    return res.json({ message: 'list deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
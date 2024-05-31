const Broadcast = require('../models/broadcast.model');

exports.setBroadcast = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      throw 'data is required';
    }
    
    const broadcast = new Broadcast(data);

    await broadcast.save();

    return res.json({ message: 'new broadcast created' });
    
    
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getBroadcast = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    
      
    try {
    const broadcasts = await Broadcast.find({ projectCode: data.projectCode });
    return res.json({ broadcasts: broadcasts });
    } catch (err) {
    console.log(err);
    return res.status(400).json({
        errors: err,
    });
    }
    
    
  
  
  }catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};


exports.updateBroadcast = async (req, res) => {
  try {
    const { data, walletId } = req.body;
    if (!walletId) {
      throw 'wallet ID is required';
    }
    await Broadcast.updateOne(
      { _id: walletId },
      {
        $set: data,
      }
    );
    return res.json({ message: 'broadcast updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.deleteBroadcast = async (req, res) => {
  try {
    const { walletId } = req.body;
    if (!walletId) {
      throw 'wallet ID is required';
    }
    await Broadcast.deleteOne({ _id: walletId });
    return res.json({ message: 'broadcast deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
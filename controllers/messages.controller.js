const Message = require('../models/messages.model');

exports.setMessage = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      throw 'data is required';
    }
    
    console.log("hksj");
    const message = new Message(data);

    await message.save();

    return res.json({ message: 'message created' });
    
    
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getMessage = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    if (!data) {
      
      try {
        const messages = await Entry.find({ });
        return res.json({ messages: messages });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else {
      console.log("haan bhai haan");
      try {
        const messages = await Message.find({ user: data.user });
        return res.json({ messages: messages });
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


exports.updateMessage = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.walletId || !data.eventID) {
      throw 'wallet ID and event ID are required';
    }
    await Message.updateOne(
      { _id: walletId },
      {
        $set: data,
      }
    );
    return res.json({ message: 'message updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.user || !data.timestamp) {
      throw 'wallet ID and timestamp are required';
    }
    await Entry.deleteOne({ _id: walletId });
    return res.json({ message: 'message deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
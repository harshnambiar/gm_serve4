const Amail = require('../models/amail.model');

exports.setAmail = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      throw 'data is required';
    }
    
    const amail = new Amail(data);

    await amail.save();

    return res.json({ message: 'new mail sent' });
    
    
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getAmailSent = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    if (!data.from) {
      throw 'data is required';
    }
      
    try {
    const amails = await Amail.find({ from: data.from });
    return res.json({ amails: amails });
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


exports.getAmailReceived = async (req, res) => {
    try {
      console.log(req.body);
      const { data } = req.body;
      if (!data.to) {
      throw 'data is required';
        }
        
      try {
      const amails = await Amail.find({ to: data.to });
      return res.json({ amails: amails });
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


exports.updateAmailTrash = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.mailId) {
      throw 'mail ID is required';
    }
    if (typeof data.isTrash != "boolean") {
      throw 'isTrash is a mandatory field';
    }
    await Amail.updateOne(
       { mailId: data.mailId },
      {
        $set: {
          "isTrash": data.isTrash,
        }
      }
    );
    return res.json({ message: 'amail marked/unmarked as trash' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};


exports.updateAmailRead = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.mailId) {
      throw 'mail ID is required';
    }
    if (typeof data.isRead != "boolean") {
      throw 'isRead is a mandatory field';
    }
    await Amail.updateOne(
       { mailId: data.mailId },
      {
        $set: {
          "isRead": data.isRead,
        }
      }
    );
    return res.json({ message: 'amail marked/unmarked as read' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};


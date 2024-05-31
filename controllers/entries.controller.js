const Entry = require('../models/entries.model');

exports.setEntry = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      throw 'data is required';
    }
    const oldEntry = await Entry.findOne({walletId: data.walletId, eventID: data.eventID});
    if (oldEntry) {
      var c = 0;
      console.log(c);
      return res.json({ message: 'You have already entered' });
    }
    else {
      console.log("hksj");
      const entry = new Entry(data);

      await entry.save();

      return res.json({ message: 'entry created' });
    }
    
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getEntry = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    if (!data) {
      
      try {
        const entries = await Entry.find({ });
        return res.json({ entries: entries });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else if (!data.walletId){
      
      try {
        const entries = await Entry.find({ eventID: data.eventID });
        console.log(res);
        return res.json({ entries: entries });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else if (!data.eventID){
      
      try {
        const entries = await Entry.find({ walletId: data.walletId });
        console.log(res);
        return res.json({ entries: entries });
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


exports.updateEntry = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.walletId || !data.eventID || !data.status) {
      throw 'wallet ID and event ID are required';
    }
    const newStat = data.status; 
    await Entry.updateOne(
      { walletId: data.walletId, eventID: data.eventID },
      {
        $set: {
          "result": newStat
        }
      }
    );
    return res.json({ message: 'entry updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.updateEntries = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.walletIds || !data.eventID || !data.status) {
      throw 'wallet IDs and event ID are required';
    }
    const newStat = data.status; 
    await Entry.updateMany(
      { eventID: data.eventID, walletId: {$in: data.walletIds}},
      {
        $set: {
          "result": newStat
        }
      }
    );
    return res.json({ message: 'entries updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.walletId || !data.eventID) {
      throw 'wallet ID and event ID are required';
    }
    await Entry.deleteOne({ _id: walletId });
    return res.json({ message: 'entry deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
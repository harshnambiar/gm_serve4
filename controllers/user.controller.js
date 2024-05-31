const User = require('../models/user.model');

exports.setUser = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      throw 'data is required';
    }
    const oldUser = await User.findOne({walletId: data.walletId});
    if (oldUser) {
      var c = 0;
      console.log(c);
      return res.json({ message: 'logging in old user' });
    }
    else {
      console.log("konnichiwaxxx");
      const user = new User(data);

      await user.save();

      return res.json({ message: 'user created' });
    }
    
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    if (!data) {
      
      try {
        const users = await User.find({ });
        return res.json({ users: users });
      } catch (err) {
        console.log(err);
        return res.status(400).json({
          errors: err,
        });
      }
    }
    else {
      console.log("haan na");
      try {
        const users = await User.find({ walletId: data.walletId });
        return res.json({ users: users });
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


exports.updateUser = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.walletId) {
      throw 'wallet ID is required';
    }
    if (!data.eventsEntered){
      console.log("sbfdjkf");
      await User.updateOne(
        { walletId: data.walletId },
        {
          $set: {
            "points": "15",
            
          }
        }
      );
      return res.json({ message: 'user updated' });
    }
    else if (!data.eventsWon) {
      const ev = (parseInt(data.eventsEntered) + 1).toString();
      console.log(ev);
      await User.updateOne(
        { walletId: data.walletId },
        {
          $set: {
            "eventsEntered": ev,
            
          }
        }
      );
      return res.json({ message: 'user updated' });
    }
    else  {
      console.log("jndfjf");
      await User.updateOne(
        { walletId: data.walletId },
        {
          $set: {
            "eventsEntered": (parseInt(data.eventsEntered) + 1).toString(),
            "eventsWon": (parseInt(data.eventsWon) + 1).toString(),
            
          }
        }
      );
      return res.json({ message: 'user updated' });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }

};

exports.deleteUser = async (req, res) => {
  try {
    const { walletId } = req.body;
    if (!walletId) {
      throw 'wallet ID is required';
    }
    await User.deleteOne({ _id: walletId });
    return res.json({ message: 'user deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
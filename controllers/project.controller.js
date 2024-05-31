const Project = require('../models/project.model');

exports.setProject = async (req, res) => {
  try {
    const { data } = req.body;
    const owner1 = data.owner1;
    const projectName = data.projectName;
    const projectCode = data.projectCode;
    
    if (!owner1 || !projectName || !projectCode) {
      throw 'All details are required';
    }
    const project = new Project(data);

    await project.save();

    return res.json({ message: 'Project created' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};



exports.getProject = async (req, res) => {
  try {
    console.log(req.body);
    const { data } = req.body;
    if (!data) {
      
      try {
        const projects = await Project.find({ });
        return res.json({ projects: projects });
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
        const projects = await Project.find({ projectCode : data.projectCode });
        return res.json({ projects: projects });
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




exports.updateProject = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data.projectCode) {
      throw 'project code is required';
    }
    await Project.updateOne(
      { projectCode: data.projectCode },
      {
        $set: {
          "discovery": data.discovery,
        }
      }
    );
    return res.json({ message: 'Project updated' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const { taskID } = req.body;
    if (!taskID) {
      throw 'taskID is required';
    }
    await Project.deleteOne({ _id: taskID });
    return res.json({ message: 'Project deleted' });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      errors: err,
    });
  }
};
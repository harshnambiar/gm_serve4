// Project: Owner1(Mandatory) Owner2 Owner3 Admin1 Admin2 ProjectName(Primary) ProjectCode(mandatory) Email Twitter Discord Website Discovery Password PPic CPic AssociatedCanister

const mongoose = require('mongoose');
// user schema
const ProjectSchema = new mongoose.Schema(
  {
    owner1: {
      type: String,
      trim: true,
      required: true,
      
    },
    owner2: {
      type: String,
      trim: true,
      required: false,
      
    },
    owner3: {
      type: String,
      trim: true,
      required: false,
      
    },
    admin1: {
      type: String,
      trim: true,
      required: false,
      
    },
    admin2: {
      type: String,
      trim: true,
      required: false,
      
    },
    projectName: {
      type: String,
      required: true,
      unique: true,
    },
    projectCode: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: false,
      unique: false,
      lowercase: true,
    },
    twitter: String,
    discord: String,
    discovery: String,
    website: String,
    password: String,
    pPic: String,
    cPic: String,
    free: String,
    associatedCanister: String,
  },
  {
    timestamps: true,
  }
);

// virtual

// methods

module.exports = mongoose.model('Project', ProjectSchema);

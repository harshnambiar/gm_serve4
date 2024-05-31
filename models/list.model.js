// Lists: ProjectName(mandatory) StartTime(mandatory) EndTime(mandatory) MintDate(mandatory) Size(mandatory) MinParticipants(mandatory) WinnerCount(mandatory) MintPrice EventId(Primary) EventType(mandatory) PrizeLink

const mongoose = require('mongoose');
// user schema
const ListSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    projectCode: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    mintDate: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    minParticipants: {
      type: String,
      required: true,
    },
    winnerCount: {
      type: String,
      required: true,
    },
    mintPrice: String,
    eventID: {
      type: String,
      required: true,
      unique: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    prizeLink: String,
  },
  {
    timestamps: true,
  }
);

// virtual

// methods

module.exports = mongoose.model('List', ListSchema);

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config({
  path: './config/config.env',
});

// Connect to DB
connectDB();

app.use(express.json());
app.use(cors());

// cors to allow to deal with frontend locally
if (process.env.NODE_ENV === 'development') {
  // morgan is used for logging
  app.use(morgan('dev'));
}

// Load Routes
//const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const taskRouter = require('./routes/task.route');
const listRouter = require('./routes/list.route');
const taskEntryRouter = require('./routes/taskEntries.route');
const projectRouter = require('./routes/project.route');
const broadcastRouter = require('./routes/broadcast.route');
const entriesRouter = require('./routes/entries.route');
const messageRouter = require('./routes/messages.route');
const amailRouter = require('./routes/amail.route');
const authenticasterRouter = require('./routes/authenticaster.route');
const authentixRouter = require('./routes/authentix.route');

// app.use('/api/', authRouter);
app.use('/api/', userRouter);
app.use('/api/', taskRouter);
app.use('/api/', listRouter);
app.use('/api/', taskEntryRouter);
app.use('/api/', projectRouter);
app.use('/api/', broadcastRouter);
app.use('/api/', entriesRouter);
app.use('/api/', messageRouter);
app.use('/api/', amailRouter);
app.use('/api/', authenticasterRouter);
app.use('/api/', authentixRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Page Not Found',
  });
});

const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));

// TODO

// 5.) Translate
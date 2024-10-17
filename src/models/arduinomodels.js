import mongoose from 'mongoose';

const arduinoSchema = new mongoose.Schema({
  ExperimentId: {
    type: Number,
    required: true,
  },
  ExperimentName: {
    type: String,
    trim: true,
    lowercase: true,  // Fixed typo
    required: true,
  },
  madeBy: {
    type: String,
    trim: true,
    lowercase: true,  // Fixed typo
    required: true,
  },
  madeByinfo: {
    type: String,
    trim: true,
    lowercase: true,  // Fixed typo
    required: true,
  },
  overview: {
    type: String,
    trim: true,
    required: true,
  },
  overviewinfo: {
    type: String,
    trim: true,
    required: true,
  },
  HC: {
    type: String,
    trim: true,
  },
  working: {
    type: String,
    trim: true,
  },
  pinDiagramInfo: {
    type: String,
    trim: true,
    required: true,
  },
  pinDiagramInfo2: {
    type: String,
    trim: true,
    required: true,
  },
  CircuitDiagramInfo: {
    type: String,
    trim: true,
    required: true,
  },
  code: {
    type: String,
    required: true,
    trim: true,
  },
  result: {
    type: String,
    trim: true,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  image3: {
    type: String,
    required: true,
  },
  image4: {
    type: String,
    required: true,
  },
  image5: {
    type: String,
  },
  image6: {
    type: String,
  },
});

export const Arduino = mongoose.models.Arduino || mongoose.model('Arduino', arduinoSchema);

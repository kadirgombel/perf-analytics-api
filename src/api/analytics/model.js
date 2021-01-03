const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analyticsSchema = new Schema(
  {
    FCPTime: {
      type: Number,
    },
    TTFBTime: {
      type: Number,
    },
    domLoadTime: {
      type: Number,
    },
    windowLoadTime: {
      type: Number,
    },
    resourceLoadTime: {
      type: Number,
    },
    createdAt: {
      type: Date,
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (obj, ret) => {
        delete ret._id;
      },
    },
  },
);

analyticsSchema.methods = {
  view(full) {
    const view = {
      // simple view
      FCPTime: this.FCPTime,
      TTFBTime: this.TTFBTime,
      domLoadTime: this.domLoadTime,
      windowLoadTime: this.windowLoadTime,
      resourceLoadTime: this.resourceLoadTime,
      createdAt: new Date(this.createdAt)
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
    };

    return full ? { ...view } : view;
  },
};

const model = mongoose.model('Analytics', analyticsSchema);

module.exports = model;

const Analytics = require('./model');

exports.saveAnalytics = ({ body }, res) => {
  try {
    Analytics.create(body);
    return res.json({});
  } catch (error) {
    return res.status(500).send();
  }
};

exports.getAnalytics = async ({ query }, res) => {
  try {
    let { from, to } = query;
    let condition;
    const thirtyMinutes = 1000 * 60 * 30;
    from = from ? Number(from) : Date.now() - thirtyMinutes;
    to = to ? new Number(to) : undefined;
    if (from && to) {
      condition = {
        createdAt: {
          $gte: new Date(from),
          $lte: new Date(to),
        },
      };
    } else {
      condition = {
        createdAt: {
          $gte: new Date(from),
        },
      };
    }

    const results = await Analytics.find(condition);
    return res.json(results.map((result) => result.view()));
  } catch (error) {
    return res.status(500).json(error);
  }
};

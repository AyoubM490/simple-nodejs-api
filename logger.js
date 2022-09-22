const logger = (req, res, next) => {
  const { method } = req;
  const { url } = req;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

module.exports = logger;

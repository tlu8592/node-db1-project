const Accounts = require('../accounts/accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const { name, budget } = req.body;
  const trimmedName = name.trim();
  if (!trimmedName || !budget) {
    res.status(400).json({
      message: "name and budget are required"
    });
  } else if (trimmedName.length < 3 || trimmedName.length > 100) {
    res.status(400).json({
      message: "name of account must be between 3 and 100"
    });
  } else if (isNaN(budget)) {
    res.status(400).json({
      message: "budget of account must be a number"
    });
  } else if (Math.sign(budget) === -1 || budget > 1000000) {
    res.status(400).json({
      message: "budget of account is too large or too small"
    })
  } else {
    next();
  }
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log('checkAccountPayloadMiddleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAccountNameUniqueMiddleware')

  next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAccountIdMiddleware')

  next()
}

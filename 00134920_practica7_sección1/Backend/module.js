const db = require('./data/connection');

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const query = (text, params) => db.query(text, params);

const sendSuccess = (res, data = null, status = 200) => res.status(status).json({ ok: true, data });
const sendError = (res, message = 'Server error', status = 500) => res.status(status).json({ ok: false, error: message });

const validateBody = (fields = [], body = {}) => {
  const missing = fields.filter((f) => !(f in body));
  return { valid: missing.length === 0, missing };
};

module.exports = {
  asyncHandler,
  query,
  sendSuccess,
  sendError,
  validateBody,
};
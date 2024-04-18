const { User } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getUsers() {
  return User.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getUser(id) {
  return User.findById(id);
}

/**
 * Create new user
 * @param {string} name - Name
 * @param {string} email - Email
 * @param {string} password - Hashed password
 * @returns {Promise}
 */
async function createUser(name, email, password) {
  return User.create({
    name,
    email,
    password,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} name - Name
 * @param {string} email - Email
 * @returns {Promise}
 */
async function updateUser(id, name, email) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        name,
        email,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

/**
 * Check email already exists
 * @param {string} email - Email
 * @returns {Promise}
 */
async function checkEmail(email) {
  const user = await User.findOne({ email });
  return user;
}

/**
 * Change Password
 * @param {string} id - User ID
 * @param {string} new_password - New Password
 * @returns {Promise}
 */
async function changePassword(id, new_password) {
  return User.updateOne(
    {
      _id: id,
    },
    {
      $set: { password: new_password },
    }
  );
}

/**
 * Check Password Strength
 * @param {string} password
 * @returns {boolean}
 */
function checkPasswordStrength(password) {
  // Buat regex untuk memeriksa kombinasi huruf besar, huruf kecil, simbol, dan angka
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  checkEmail,
  changePassword,
  checkPasswordStrength,
};

class Error {
  constructor(error) {
    this.error = error;
  }
}

const USER_EXISTS = new Error("User Exists");
const SPOT_EXISTS = new Error("Spot Existente");

module.exports = {
  Error,
  USER_EXISTS,
  SPOT_EXISTS,
};

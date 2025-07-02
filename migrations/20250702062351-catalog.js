// eslint-disable-next-line @typescript-eslint/no-require-imports
const catalogs = require("./catalogDatabase.json");

module.exports = {
  async up(db) {
    await db.collection("catalogs").insertMany(catalogs);
  },

  // async down(db) {},
};

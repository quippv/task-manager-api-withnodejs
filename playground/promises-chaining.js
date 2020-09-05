require("../src/db/mongoose");
const User = require("../src/models/user");

// 5f3fccc85f5cbb289ca74e21

// User.findByIdAndUpdate("5f3fccc85f5cbb289ca74e21", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5f3fccc85f5cbb289ca74e21", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

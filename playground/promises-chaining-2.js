require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5f3fbc6b271f0208e8ef721a")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((incomplete) => {
//     console.log(incomplete);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const incompleteCount = await Task.countDocuments({ completed: false });
  return incompleteCount;
};

deleteTaskAndCount("5f40131b56c4521eb843909e")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });

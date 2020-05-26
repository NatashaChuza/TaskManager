const express = require("express");
const router = express.Router();
const passport = require("passport");
const Task = require("../../models/Task");

//@route POST 'api/tasks/create'
//@desc lets a user create a task
//@access private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    //create new task
    const task = new Task({
      name: req.body.name,
      description: req.body.description,
      status: "to-do",
      owner: req.body.owner,
    });
    task
      .save()
      .then((task) => res.status(200).json(task))
      .catch((err) => console.log(err));
  }
);

//@route POST 'api/tasks/tasks'
//@desc lets a user retrieve all their tasks
//@access private
router.post(
  "/tasks",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const Tasks = [];
    await Task.find({})
      .then((tasks) => {

        tasks.map((task) => {
          if( task.owner === req.body.userId){
            Tasks.push(task)
          }
        });
        res.json(Tasks);
      })
      .catch((err) => console.log(err));
  }
);

//@route GET 'api/tasks/get/:id'
//@desc lets a user retrieve tasks
//@access private
router.get(
  "/get/:id",
  // passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    await Task.findById(req.params.id)
      .then((task) => {
        res.json(task);
      })
      .catch((err) => console.log(err));
  }
);


//@route PATCH 'api/tasks/update'
//@desc lets a user update tasks
//@access private
router.patch("/update", (req, res) => {
  let updatedTask = {
    name: req.body.name,
    description: req.body.description,
    status: req.body.status,
  };
  Task.findByIdAndUpdate(
    { _id: req.body.id },
    { name: req.body.name ,
      description: req.body.description
    },
  )
    .then((resp) => res.status(200).json(updatedTask))
    .catch((err) => console.log(err));
});

//@route DELETE 'api/tasks/delete/id'
//@desc lets a user delete tasks
//@access private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Task.findById(req.params.id).then((task) => {
      task.remove().then((resp) => res.json(resp));
    });
  }
);

//@route PATCH 'api/tasks/start/id'
//@desc lets a user change task status from to-do to in progress
//@access private
router.patch(
  "/start/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Task.findByIdAndUpdate({ _id: req.params.id }, { status: "in progress" })
      .then(() => res.status(200))
      .catch((err) => console.log(err));
  }
);

//@route PATCH 'api/tasks/complete/id'
//@desc lets a user change task status from in progress to done
//@access private
router.patch(
  "/complete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Task.findByIdAndUpdate({ _id: req.params.id }, { status: "done" })
      .then(() => res.status(200))
      .catch((err) => console.log(err));
  }
);

module.exports = router;

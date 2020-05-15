exports.seed = function (knex) {
  return knex("tasks")
    .truncate()
    .then(function () {
      return knex("tasks").insert([
        {
          task_description: "Plan",
          task_notes: "Plan on what you are going to build",
          task_completed: false,
          project_id: 1,
        },
        {
          task_description: "Files and Folders",
          task_notes: "Create well named files and folders",
          task_completed: false,
          project_id: 1,
        },
        {
          task_description: "Code",
          task_notes: "Code like there is no tomorrow",
          task_completed: false,
          project_id: 2,
        },
        {
          task_description: "Details",
          task_notes: "Pay extra attention to details",
          task_completed: false,
          project_id: 2,
        },
        {
          task_description: "Install Dependecy",
          task_notes: "Use all the dependencies that can help",
          task_completed: false,
          project_id: 3,
        },
        {
          task_description: "Test",
          task_notes: "Test your work",
          task_completed: false,
          project_id: 3,
        },
      ]);
    });
};

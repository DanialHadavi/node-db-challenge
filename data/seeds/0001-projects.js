exports.seed = function (knex) {
  return knex("projects")
    .truncate()
    .then(function () {
      return knex("projects").insert([
        {
          project_name: "Create tables for database",
          project_description: "Create custom table with the given information",
          project_completed: false,
        },
        {
          project_name: "Build router for endpoints",
          project_description:
            "create a router for endpoints with given information",
          project_completed: false,
        },
        {
          project_name: "build a router model",
          project_description:
            "creater a router model (helper) that will work with router",
          project_completed: false,
        },
      ]);
    });
};

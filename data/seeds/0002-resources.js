exports.seed = function (knex) {
  return knex("resources")
    .truncate()
    .then(function () {
      return knex("resources").insert([
        {
          resource_name: "My Laptop",
          resource_description: "required for writing codes",
        },
        {
          resource_name: "VSCode",
          resource_description: "my favorite IDE",
        },
        {
          resource_name: "NPM",
          resource_description: "dependecy installer",
        },
        {
          resource_name: "Knex",
          resource_description:
            "JavaScript query builder for relational databases",
        },
        {
          resource_name: "React",
          resource_description: "JavaScript Libary",
        },
      ]);
    });
};

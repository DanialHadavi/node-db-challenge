const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ error: "failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.getProjectsById(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ error: "failed to get project by that ID" });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;
  Projects.getResources(id)
    .then((resource) => {
      if (resource.length) {
        res.status(200).json(resource);
      } else {
        res.status(404).json({ message: "failed to get resources" });
      }
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ message: "Error" });
    });
});

router.get("/:id/tasks", (req, res) => {
  Projects.getTasks(req.params.id)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ errorMessage: "failed to get tasks" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.addProjects(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ message: "Must provide name" });
    });
});

router.post("/:id/resources", (req, res) => {
  const resourceData = req.body;
  Projects.addResources(resourceData)
    .then((resource) => {
      const index = { project_id: req.params.id, resource_id: resource.id };
      Projects.addResourceIndex(index)
        .then((resourceIndex) => {
          res.status(201).json(resourceIndex);
        })
        .catch((error) => {
          console.log("Error: ", error);
          res.status(404).json({ error: "Must provide name" });
        });
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ message: "Must provide name" });
    });
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const tasks = { ...req.body, project_id: id };
  Projects.addTasks(tasks)
    .then(() => {
      Projects.getTasks(id)
        .then((tasks) => {
          res.status(201).json(tasks);
        })
        .catch((error) => {
          console.log("Error: ", error);
          res.status(404).json({ errorMessage: "Must Provide description" });
        });
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.status(500).json({ errorMessage: "Must Provide description" });
    });
});

module.exports = router;

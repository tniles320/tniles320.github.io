// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

module.exports = function(app) {

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/skills", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/skills.html"));
  });

  app.get("/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
  });

  app.get("/projects/:project", (req, res) => {
    const project = req.params.project
    res.sendFile(path.join(__dirname, `../public/projects/${project}.html`));
  });

  app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

};

#!/usr/bin/env node

const showBanner = require("node-banner");
const importJsx = require("import-jsx");
const { render } = require("ink");
const React = require("react");
const meow = require("meow");

const ui = importJsx("./ui");

meow(`
	Usage
	  $abhishekgarg
`);

(async () => {
  await showBanner(
    "Abhishek Garg",
    "CS Undergrad and Software Developer, among many other things!",
    "cyan",
    "blue"
  );

  render(React.createElement(ui));
})();

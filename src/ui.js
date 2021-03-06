const React = require("react");
const { Box } = require("ink");
const SelectInput = require("ink-select-input").default;
const open = require("open");

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  } else if (item.action) {
    item.action();
  }
};

const createList = (items) => {
  return items.map((item) => {
    return { ...item, key: item.label || item.url };
  });
};

const listItems = createList([
  {
    label: "Website 🌎",
    url: "https://iamabhishekgarg.tech",
  },
  {
    label: "GitHub 🦄",
    url: "https://github.com/Abhishekgarg97",
  },
  {
    label: "Twitter 👀",
    url: "https://twitter.com/abhigarg1997",
  },
  {
    label: "Linkedin 💼",
    url: "https://www.linkedin.com/in/abhishek-garg1997/",
  },
  {
    label: "Contact ✉️",
    url: "mailto:abhishekgarg1218@gmail.com",
  },
  {
    label: "Support my open source work ❤️",
    url: "https://www.buymeacoffee.com/abhisheknaiidu",
  },
  {
    label: "---------",
  },
  {
    label: "Quit",
    action() {
      process.exit();
    },
  },
]);

const renderResume = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box marginBottom={1} />
        <SelectInput items={listItems} onSelect={handleSelect} />
      </Box>
    </>
  );
};

module.exports = renderResume;

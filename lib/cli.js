const inquirer = require("inquirer");
const fs = require("fs");

const isFileExists = (path) => (fs.existsSync(path) ? true : "File not exist");

module.exports = {
  useConfig() {
    return inquirer.prompt([
      {
        type: "password",
        name: "password",
        message: "Password",
        validate: (value) => (value !== "" ? true : ""),
      },
    ]);
  },
  useDefault() {
    return inquirer.prompt([
      {
        type: "password",
        name: "password",
        message: "Password",
        validate: (value) => (value !== "" ? true : ""),
      },
      {
        type: "input",
        name: "inputName",
        message: "Input file name",
        validate: isFileExists,
      },
      {
        type: "input",
        name: "outputName",
        message: "Output file name",
      },
      {
        type: "list",
        name: "encryptOrDecrypt",
        message: "Encrypt Or decrypt",
        choices: ["Encrypt", "Decrypt"],
      },
    ]);
  },
};
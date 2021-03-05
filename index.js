const { exec } = require("child_process");
const fs = require("fs");
const yaml = require("js-yaml");

// read dendron.yml to check for public vaults
const getPublicVaults = () => {
  let vaults = [];
  try {
    let fileContents = fs.readFileSync("dendron.yml", "utf8");
    let data = yaml.safeLoad(fileContents);
    // console.log(data.vaults);
    data.vaults.map((vault) => {
      vaults.push(vault.fsPath);
    });
    return vaults;
  } catch (e) {
    console.log(e);
  }
};

const getChangelog = () => {
  vaults = getPublicVaults();
  const changes = getChanges(vaults[0]);
};

// get files changed/added for a given vault
const getChanges = (vault) => {
  let filesChanged = [];
  let filesAdded = [];
  exec(`git status ${vault}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    // console.log(stdout);
    let results = stdout.split("\n");
    results.map((result) => {
      if (result.startsWith(" M")) {
        filesChanged.push(result.replace(` M ${vault}/`, ""));
      } else if (result.startsWith("??")) {
        filesAdded.push(result.replace(`?? ${vault}/`, ""));
      }
    });
    console.log({ filesChanged });
    console.log({ filesAdded });
  });
};

getChangelog();

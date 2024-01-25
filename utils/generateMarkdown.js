// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "[License](https://www.apache.org/licenses/LICENSE-2.0)";
    case "GNU":
      return "[License](https://www.gnu.org/licenses/gpl-3.0.en.html)";
    case "MIT":
      return "[License](https://opensource.org/license/mit/)";
    case "BSD":
      return "[License](https://opensource.org/license/bsd-3-clause/)";
    case "None":
      return "";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  return `# ${data.title}
  ${licenseBadge}


  ## Description 
  ${data.description}


  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage Info](#usage-info)
  * [License](#license)
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)


  ## Installation Instructions
  ${data.installation}


  ## Usage Info
  ${data.usage}


  ## License
  ${data.license} ${licenseLink}


  ## Contribution Guidelines
  ${data.contributions}


  ## Test Instructions
  ${data.testing}


  ## Questions
 [Email me](mailto:${data.email})

 [GitHub Projects](https://www.github.com/${data.username})
`;
}

module.exports = generateMarkdown;

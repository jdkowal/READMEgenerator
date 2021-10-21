// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return "";
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
if (license !== "None"){
  return `\n*[License](#${license})\n*`;
}
return "";
}
// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) { 
if (license !== "None"){
  return `## License
  This project is licensed under the ${license} license.`;
}
return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  -[Instillation](#Installation)
  -[Usage](#Usage)
  -[License](#License)
  -[Badges](#badges)
  -[Feature](#Features)
  -[Contributions](#Contributions)
  -[Tests](#Tests)


  ## Installation
  Install dependencies use ${data.npm}
  
  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Features
  ${data.usage}
  
  ## Contributions
  gitHub user Name: ${data.username}
  email: ${data.email}
  ${data.contributions}

  ## Tests
  For testing use ${data.test}
`;
}
module.exports = generateMarkdown;
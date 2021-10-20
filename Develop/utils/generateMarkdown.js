// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Installation
  Install dependencies use ${data.npm}
  
  ## License
  ${data.licence}

  ## Badges
  
  ## Features
  ${data.needToKnow}
  
  ## How to Contribute
  gitHub user Name: ${data.username}
  email: ${data.email}
  ${data.contributions}

  ## Tests
  For testing use ${data.test}
`;
}

module.exports = generateMarkdown;

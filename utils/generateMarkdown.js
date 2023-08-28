// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``;} 
    else {return `![github-license](https://img.shields.io/badge/License-${license}-blue.svg)`;}
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ``;} 
    else {return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``;} 
    else {return `## License
  This project falls under the ${renderLicenseLink(license)} license`;}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  [${answers.github}](https://github.com/${answers.github})

  ${answers.email}

  ${renderLicenseSection(answers.license)}
`;
}

module.exports = generateMarkdown;

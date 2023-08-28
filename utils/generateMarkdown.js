// A badge is created for the user's selected license.
// If there is no license, an empty string is returned.
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``;} 
    else {return `![github-license](https://img.shields.io/badge/License-${license}-blue.svg)`;}
  
}

// A URL is created for the user's selected license.
// If there is no license, an empty string is returned.
function renderLicenseLink(license) {
  if (license === 'None') {
    return ``;} 
    else {return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;}
}

// A license section for the README file is created.
// If there is no license, an empty string is returned.
function renderLicenseSection(license) {
  if (license === 'None') {
    return ``;} 
    else {return `## License
  This project falls under the ${renderLicenseLink(license)} license.`;}
}

// MARKDOWN TEMPLATE
// The template accepts the questionnaire's 'answers' object as input
// and returns a string of markdown text formatted as a README file.
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

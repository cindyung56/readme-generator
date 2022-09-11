// function to render license badge if license is passed
function renderLicenseBadge(license) {
  if (license !== '' || license !== undefined || license !== null){
    return `https://img.shields.io/static/v1?label=License&message=${license}&color=blue`;
  } else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type
// https://choosealicense.com/appendix/
function renderLicenseLink(license) {
  if (license !== '' || license !== undefined || license !== null){
    return ``;
  } else{
    return '';
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '' || license !== undefined || license !== null){
  return `
This project is covered under the ${license}.
For more information, please check [this link](${renderLicenseLink(license)}).
`    
  } else{
    return '';
  }

}


// function to create README content based on data
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

![License](${renderLicenseBadge(data.projectLicense)})

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

${data.projectDescription}

## Installation

${data.projectInstallation}

## Usage

${data.projectUsage}

## License

${renderLicenseSection(data.projectLicense)}

## Contributing

${data.projectContribution}

## Tests

${data.projectTesting}

## Questions

Access my GitHub profile at [https://github.com/${data.gitUsername}](https://github.com/${data.gitUsername}) for other projects.

If you have additional questions or comments, please feel free to contact me at [${data.userEmail}](${data.userEmail}).

`
}

// export generateMarkdown to use in other JavaScript files
module.exports = generateMarkdown;

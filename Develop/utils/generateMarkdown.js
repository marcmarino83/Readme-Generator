
function renderLicenseBadge(license) {
  const badges = {
    'IBM': 'https://img.shields.io/badge/License-IPL_1.0-blue.svg',
    'Eclipse': 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Modzila': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    'ISC': 'https://img.shields.io/badge/License-ISC-lightblue.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'BSD 3-Clause License': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
  };

  return badges[license] || '';
;}

function renderLicenseLink(license) {
  const licenseLink = {
    'IBM': 'https://opensource.org/licenses/IPL-1.0',
    'Eclipse': 'https://opensource.org/licenses/EPL-1.0',
    'MIT': 'https://opensource.org/licenses/MIT',
    'Modzila': 'https://opensource.org/licenses/MPL-2.0',
    'ISC': 'https://opensource.org/licenses/ISC',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost Software License 1.0': 'https://opensource.org/licenses/BSD-3-Clause'
  };

  return badges[license] || '';
};

function renderLicenseSection(data) {
  const markdown = generateMarkdown(data);
  console.log(markdown)
};

function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const licenseLink = renderLicenseLink(data.license)

  return `# ${data.generateMarkdown}`;
};

module.exports = generateMarkdown;



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// TODO: Create a function to generate markdown for README


//ibm https://img.shields.io/badge/License-IPL_1.0-blue.svg)]
//eclipse https://img.shields.io/badge/License-EPL_1.0-red.svg)
// MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//Modzila [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
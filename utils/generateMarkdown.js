


// Holds the license badge & url strings
// and information section markdown string
const selectedLicense = {
  badge: '',
  url: '',
  badgeMarkdown: '',
  licenseMarkdown: '',
}


////////////////////////////////////////
// FUNCTION loadSelectedLicense (license)
// accepts a license name and stores the 
// badge url and license website in 
// the selectedLicense object
/////////////////////////////////////////

const loadSelectedLicense = (choice) => {
  switch (choice) {
    case 'None':
      selectedLicense.badge = '';
      selectedLicense.url = '';
      break;
    case 'Apache 2.0':
      selectedLicense.badge = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      selectedLicense.url =
        `https://opensource.org/licenses/Apache-2.0`;
      break;
    case 'GNU GPL v2':
      selectedLicense.badge = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
      selectedLicense.url =
        `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
      break;
    case 'GNU GPL v3':
      selectedLicense.badge = `![License: GPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
      selectedLicense.url =
        `https://www.gnu.org/licenses/gpl-3.0`;
      break;
    case 'MIT':
      selectedLicense.badge =
        `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      selectedLicense.url =
        `https://opensource.org/licenses/MIT`;
      break;
    case 'Mozilla 2.0':
      selectedLicense.badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
      selectedLicense.url =
        `https://opensource.org/licenses/MPL-2.0`;
      break;
  }
  // clear markdown fields. They are assigned in
  // generateLicenseMarkdown 
  selectedLicense.badgeMarkdown = '';
  selectedLicense.licenseMarkdown = '';
}

/////////////////////////////////////////
// FUNCTION generateLicenseMarkdown (license)
// must be called -after- loadSelectedLicense
// assigns license header markdown and
// information markdown strings to the
// selectedLicense object
/////////////////////////////////////////

const generateLicenseMarkdown = (license) => {
  if ((!license) || (license == 'None')) {
    selectedLicense.badgeMarkdown = '';
    selectedLicense.licenseMarkdown = '';
  } else{
    selectedLicense.badgeMarkdown = 
    `[${selectedLicense.badge}](${selectedLicense.url})`;
    selectedLicense.licenseMarkdown =
    `## License
  This software is distrubted without warranty under the ${license} license agreement. To view terms and conditions, visit the [${license} License website](${selectedLicense.url}).
      `;
  }
}

////////////////////////////////////////
// FUNCTION generateMarkdown (data)
// Builds the README markdown using the 
// answer data object
////////////////////////////////////////
const generateMarkdown = (data) => {
  console.log('loading....')
  loadSelectedLicense(data.license);
  console.log('marking....')
  generateLicenseMarkdown(data.license);
  return `
  ${selectedLicense.badgeMarkdown}
  # ${data.title} 
  ## Description  
  ${data.description}
  ## Installation Instructions  
  ${data.install}
  ## Usage  
  ${data.usage}
  ## Contributors  
  ${data.contributors}
  ## Test Cases  
  ${data.tests}
  ${selectedLicense.licenseMarkdown}





`;
}

module.exports = generateMarkdown;

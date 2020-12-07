// function to generate markdown for README
function generateMarkdown(data) {

    let licenseBadge = '';
    let licenseLink = '';

    // Switch statement to handel the choice of licenses
    switch (data.license) {
        case "MIT":
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            licenseLink = '[MIT](https://choosealicense.com/licenses/mit/#)';
            break;
        case "APACHE-2.0":
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            licenseLink = '[APACHE-2.0](https://choosealicense.com/licenses/apache-2.0/)';
            break;
        case "GNU General Public License-3.0":
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            licenseLink = '[GNU General Public License-3.0](https://choosealicense.com/licenses/gpl-3.0/)';
            break;
        case "BSD-3-Clause":
            licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            licenseLink = '[BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
            break;
        case "Unlicense":
            licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
            licenseLink = '[Unlicense](http://unlicense.org/)';
            break;
        default:
            licenseBadge = '';
            licenseLink = '';
    }

    return `# ${data.title}
    ${licenseBadge}
    ***
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contributing](#Contributing)
    * [Test](#Test)
    * [Questions](#Questions)
    * [License](#License)
    ## Description  
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage 
    ${data.usage}
    ## Contributing
    ${data.contributing}
    ## Test
    ${data.test}
    `

}

module.exports = generateMarkdown;
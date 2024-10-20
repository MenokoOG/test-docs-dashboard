// src/utils/template.js
export const generateMarkdownContent = ({
  title,
  description,
  installation,
  usage,
  license,
}) => `
# ${title}

## Description
${description}

## Installation
\`\`\`bash
${installation}
\`\`\`

## Usage
\`\`\`javascript
${usage}
\`\`\`

## License
${license}
`;

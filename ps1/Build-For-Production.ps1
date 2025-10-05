npm run build:css && npm run build

New-Item -ItemType Directory -Path docs/api -Force
Copy-Item api/config.js docs/api/config.js
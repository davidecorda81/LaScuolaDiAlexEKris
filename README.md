# LaScuolaDiAlexEKriss Project

## Setup instructions

### Needed applications

- Download and Install VSCode
- Download and Install NodeJS
- Download and Install .Net 9 SDK and Runtime
- Download and Install Git

### VS Code Setup

- Install C# Dev Kid extension
- Install markdownlint extension
- Install Angular Language service extension
- Install ESLint extension

Install angular cli

- npm install -g @angular/cli

Setup proxy for npm and git (only with post PC)

- npm config set proxy <http://localhost:3128>
- npm config set https-proxy <http://localhost:3128>
- git config --global http.proxy <http://localhost:3128>
- git config --global https.proxy <http://localhost:3128>

Generate client to consume api

npx nswag openapi2tsclient /input:<http://localhost:5115/openapi/v1.json> /output:src/app/api-client.ts /TypeScriptVersion:5.7 /InjectionTokenType:InjectionToken /RxJsVersion:7.8 /template:Angular

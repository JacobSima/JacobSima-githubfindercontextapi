# GITHUB USER Finder Version 1.0.0

## This Application uses React Hook and The Context API


The Project is deploy to netlify with the below link:

https://githubfindercontextapi12345.netlify.com/


Deploy App With Netlify

## Netlify Deployment Steps Without Github repo

### Set up your process.env.REACT_APP_nameofvariable for development and process.env.nameofvariable for production

###  Install netlify cli
#### `npm i -g netlify-cli`

###  On your App root create a file netlify.toml
#### `[build]`
#### `   publish="build"`
##### publish="build" is the build folder to deploy after running npm run build


###  netlify init
#### `create without gitrepo set to yes`

###  set site name
#### `githubfindercontextapi12345`
#### ` select team`

#### ` Site not deploy yet but Initialized`
###  Add Global variables on netlify
#### ` deploy: deploy setting, environment, environment variables `

###  build React App
#### `npm run build`

###  Deploy Site
#### `netlify deploy --prod`



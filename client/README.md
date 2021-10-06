# Build Week Project squad Elly

This project is the front-end part of the AND Health project build by Squad Elly during their Bootcamp

### Check it out at: http://andhealth.s3-website.eu-central-1.amazonaws.com/

## Structure of the project

This is simple React App where **src** directory contains all the source code with following structure:

1. **index.js** + **App.js** - the root of the project, App.js contains routing logic 
2. **pages** - folder with pages components, which are rendered within the Routes of **App.js** file
3. **componentns** - folder with (mostly reusable) components to render in the pages files
4. **styles** - folder with (reusabele) styled components + globalStyles + respond (media-queries helper function)
5. **img** - folder to store images

### Pages

1. Landing Page
2. Instructions Page - how to use application
3. Support Page - contact data to Health Champion
4. Survey Page - the actual survey to measure employee mental health
5. Healthy Hacks - the tips & tricks of how to stay healthy (posture, diet, exercises, mindfullness)
6. Emergency Page - contact data to well knwon specialists in Amsterdam region
 

## How to start contributing (create a pull request)

Please follow this tutorial for details:

https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github


## How to run on local machine

### you need nodejs (npm) installed on your local machine, for more info go to: https://nodejs.org/en/download/

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to run in the docker container locally

**You need Docker installed on local machine**

**Mac OS** more info: https://docs.docker.com/desktop/mac/install/

If you try the option 1 for running container you must have also docker hub account

**Sign in to Docker Hub account here: https://hub.docker.com/signup**

### Development

#### Option 1: From docker hub (you must have docker account - read above)
docker pull noirfatale/andhealth:dev

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true noirfatale/andhealth:dev

#### Option 2: build localy

docker build -t andhealth:dev .

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true andhealth:dev

### Production

#### Option 1: From docker hub (you must have docker account - read above)
docker pull noirfatale/andhealth:prod

docker run -it --rm -p 1337:80 noirfatale/andhealth:prod

#### Option 2: build localy

docker build -f Dockerfile.prod -t andhealth:prod .

docker run -it --rm -p 1337:80 andhealth:prod
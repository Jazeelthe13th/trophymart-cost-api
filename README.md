# trophymart-cost-api

MVP API for calculating cost of trophy based on size, shape and material used.

## Requirements:
- npm 6.4.1
- node 8.12.0
- express 4.17.1

## Directory Structure:
- app.js : Starting point of application
- routes : Folder containing different routes for application. This app contains one route called '/calculate', which further has 3 subroutes '/cylindrical', '/cuboidal' and '/conical'
- models : Folder containing different classes. This app contains One parent Trophy and 3 children, CylindricalTrophy, CuboidalTrophy and ConicalTrophy
- config : Folder containing different configuration files. Since database was not be used, material and coating cost is maintained here.

## Usage Instructions:
- Clone repo onto local machine
- Run 'npm install' to setup dependencies
- Run 'npm start' to start the server 


## API Endpoints:
- '/calculate/cylindrical/' takes a post request with the following JSON:
{
    "material" : "steel",
    "coating" : "gold",
    "dimensions" : {
        "radius" : 4.2,
        "height" : 5.1
    }
}
- '/calculate/cuboidal/' takes a post request with the following JSON:
{
    "material" : "steel",
    "coating" : "gold",
    "dimensions" : {
        "length" : 4.2,
        "breadth" : 3.7,
        "height" : 5.1
    }
}
-  '/calculate/conical/' takes a post request with the following JSON:
{
    "material" : "steel",
    "coating" : "gold",
    "dimensions" : {
        "radius" : 4.2,
        "height" : 5.1
    }
}

## Plan for Scalability:
At the beginning of development, I've structured the code such that adding a new functionality or updating the current functionality should be easy.

- Adding new Trophies:
  - To add new trophies you need to create a new subroute in routes/calculate.js and add a new class in models/trophy.js  
- Adding new Materials:
  - The materials are maintained in config/materialConfig.js
- Adding new Coating:
  - The coatings are maintained in config/coatingConfig.js
- Adding new functionality:
  - To add a new functionality you need to create a new route in routes/ and corresponding classes in models/ and add the routes to app.js
  
## Cloud Deployment
Although for a single API deploying the application on Kubernetes may seem overkill, In the long run, with the addition of new services, this cloud-neutral platform is reliable for deploying scalable applications.

Services/Tools Required:
- Docker : Build the image
- Image Repository : ECR/ACR/DockerHub etc. to store docker images in cloud
- Kubernetes Cluster : 2 Node Cluster(Best Practice) with the role to spawn a Network Loadbalancer on any of the cloud providers. e.g: EKS, AKS or GKE.

Scripts Required:
- Dockerfile : Building the image
- Kubernetes Deployment yaml : Describe deployment and pods
- Kubernetes Service yaml : Describe Service for the deployment mentioned above
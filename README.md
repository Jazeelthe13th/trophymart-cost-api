# trophymart-cost-api

MVP API for calculating cost of trophy based on size shape and material used.

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
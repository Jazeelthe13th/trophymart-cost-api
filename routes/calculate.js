import express from 'express';
import {CylindricalTrophy} from '../models/trophy';
import {CuboidalTrophy} from '../models/trophy';
import {ConicalTrophy} from '../models/trophy';
import materialCost from '../config/materialConfig';
import coatingCost from '../config/coatingConfig';

// Initializing Router for the app
const router = express.Router();

// Subroute for Cylindrical Trophies
router.post('/cylindrical', (req, res) => {
    try{
        // Reading parameters from POST body
        let material = req.body.material;
        let coating = req.body.coating;
        let radius = req.body.dimensions.radius;
        let height = req.body.dimensions.height;

        // Check if all required parameters are present
        if(material == null || coating == null || radius == null || height == null){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Required parameters missing'
            });
        
        }

        // Validate parameters
        if(!(material.toLowerCase() in materialCost) || !(coating.toLowerCase() in coatingCost)){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Invalid Material or Coating'
            });
        }
        if(isNaN(radius) || isNaN(height)){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Invalid Dimensions'
            });
        }
        
        // If data recieved is valid, create trophy class and return cost
        let myCylindricalTrophy = new CylindricalTrophy(material, coating, radius, height);
        let cost =  myCylindricalTrophy.getCost();
        return res.status(200).json({
            'cost' : Math.round(cost)
        });

    }catch( err ){
        return res.status(500).json({
            'error' : err
        });
    }
});

// Subroute for Cuboidal Trophies
router.post('/cuboidal', (req, res) => {
    try{
        // Reading parameters from POST body
        let material = req.body.material;
        let coating = req.body.coating;
        let length = req.body.dimensions.length;
        let breadth = req.body.dimensions.breadth;
        let height = req.body.dimensions.height;

        // Check if all required parameters are present
        if(material == null || coating == null || length == null || breadth == null 
            || height == null){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Required parameters missing'
            });
        
        }

        // Validate parameters
        if(!(material.toLowerCase() in materialCost) || !(coating.toLowerCase() in coatingCost)){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Invalid Material or Coating'
            });
        }
        if(isNaN(length) || isNaN(breadth) || isNaN(height)){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Invalid Dimensions'
            });
        }
        
        // If data recieved is valid, create trophy class and return cost
        let myCuboidalTrophy = new CuboidalTrophy(material, coating, length, breadth, height);
        let cost =  myCuboidalTrophy.getCost();
        return res.status(200).json({
            'cost' : cost
        });

    }catch( err ){
        return res.status(500).json({
            'error' : err
        });
    }
});

// Subroute for Conical Trophies
router.post('/conical', (req, res) => {
    try{
        // Reading parameters from POST body
        let material = req.body.material;
        let coating = req.body.coating;
        let radius = req.body.dimensions.radius;
        let height = req.body.dimensions.height;

        // Check if all required parameters are present
        if(material == null || coating == null || radius == null || height == null){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Required parameters missing'
            });
        
        }

        // Validate parameters
        if(!(material.toLowerCase() in materialCost) || !(coating.toLowerCase() in coatingCost)){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Invalid Material or Coating'
            });
        }
        if(isNaN(radius) || isNaN(height)){
            return res.status(400).json({
                'error' : 'Bad Request',
                'description' : 'Invalid Dimensions'
            });
        }
        
        // If data recieved is valid, create trophy class and return cost
        let myConicalTrophy = new ConicalTrophy(material, coating, radius, height);
        let cost =  myConicalTrophy.getCost();
        return res.status(200).json({
            'cost' : Math.round(cost)
        });
    }catch( err ){
        return res.status(500).json({
            'error' : err
        });
    }
});


export default router;
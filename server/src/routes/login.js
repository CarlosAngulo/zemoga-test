const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SEED = require('../config/config').SEED;

const app = express();
const User = require('../models/user');

app.post('/', (req, res) => {

    const body = req.body;
    
    User.findOne({ email: body.email }, (err, userDB) => {
        if(err) {
            
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
            return res.status(500).json({
                success: false,
                message: 'Error searching the user',
                errors: err
            });
        }

        if ( !userDB || !bcrypt.compareSync( body.password, userDB.password) ) {        
            
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
            return res.status(400).json({
                success: false,
                message: 'User or password not valid'
            });
        }

        // create a token
        userDB.password = ':)';
        const token = jwt.sign({ user: userDB }, SEED, {expiresIn: 1800})

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        return res.status(200).json({
            ok: true,
            user: userDB,
            token,
            id: userDB._id
        });

    })

});

module.exports = app;
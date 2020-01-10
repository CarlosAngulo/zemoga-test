const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = {

    index: async (req, res, next) => {
        User.find({}, 'name email')
        .exec(
            (err, usersDB) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error while searching the user',
                        errors: err
                    });
                }
        
                res.status(200).json({
                    success: true,
                    users: usersDB
                })
            }
        )
    },

    signIn: (req, res) => {
    
        const body = req.body;
    
        const user = new User({
            name: body.name,
            email: body.email,
            password: bcrypt.hashSync(body.password, 10) 
        });
    
        user.save( (err, savedUser) => {
            
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Error while creating the user',
                    errors: err
                })
            }
            
            res.status(201).json({
                ok: true,
                user: savedUser.email,
                userToken: req.user
            })
    
        })
    }

};

const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../middleWare")


// Update : for making any changes
router.put("/:id" , verify , async(req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        if(req.body.password ) {
            req.body.password = CryptoJS.AES.encrypt(
                JSON.stringify(req.body.password),
                process.env.SECRET_KEY
              ).toString(); 
        }

        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id , {
                $set: req.body,
            },
            {new: true}
            );
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err) ;
        }
    }
    else{
        res.status(403).json("You can only update your account!")
    }
})


// DELETE
router.delete("/:id" , verify , async(req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try{
            await User.findByIdAndUpdate(req.params.id);
            res.status(200).json("User has been deleted...")
        } catch (err) {
            res.status(500).json(err) ;
        }
    } else{
        res.status(403).json("You can delete only your account!")
    }
})

// Get a user
router.get("/find/:id" , async(req,res) => {
        try{
            const user = await User.findById(req.params.id) ;
            const { password , ...info } = user.__doc;
            res.status(200).json(info) ; 
        } catch (err) {
            res.status(500).json(err) ;
        }
});


// GET ALL
router.delete("/:id" , verify , async(req,res) => {
    if(req.user.id === req.params.id || req.user.isAdmin) {
        try{
            await User.findByIdAndUpdate(req.params.id);
            res.status(200).json("User has been deleted...")
        } catch (err) {
            res.status(500).json(err) ;
        }
    } else{
        res.status(403).json("You can delete only your account!")
    }
})


// GET ALL
module.exports = router ;
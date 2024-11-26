const authorizeRoles = (...allowedRoles) => {
    return (req,res,next) =>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message: "Acess Denied"});
        }
        next();//for forwarding our request

    };
};

module.exports = authorizeRoles;
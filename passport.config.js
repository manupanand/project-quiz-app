const LocalStrategy =require('passport-local').Strategy
//bcrypt


function initialize(passport){
        const authenticateUser=(email,password,done)=>{
            const user=getuserByEmail(email)
            if(user==null){
                return done(null,false,{message:'No user with that email'})
            }
            try{
                //bcrypt authenticated
                //if returned {
                //await  bcrypt.compare,(password,user.password)
                //return done(null,user)
                //}
                //else{
                //return done(null,false,{message:'Password incorrect'})
                //}
            }catch(error){
                return done(error)

            }
        }

    passport.use(new LocalStrategy({usernameField:'email'}),authenticateUser)
    passport.serializeUser((user,done)=>{})
    passport.deserializeUser((id,done)=>{})



}
module.exports=initialize
const passport = require('passport')
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')

const secret = 'thisismysecret'
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

const connexion = require("../BD/connexionBD");
const {utilisateursUrl} = require("../BD/connexionBD");

async function createUtilisateur(infoUtilisateur) {
    if (infoUtilisateur.login === null || infoUtilisateur.mdp === null) {
        return {code: "401", message: 'Login / password not provided.'}
    }
    const user = await readUtilisateur(infoUtilisateur.login)
    if (user === null) {
        return await connexion.saveObject(infoUtilisateur, utilisateursUrl)
    } else {
        return {code: "401", message: 'Login already taken.'}
    }
}

async function readUtilisateur(login) {
    let userTab = await connexion.getUtilisateur(login)
    if(userTab.length === 1) {
        return userTab[0]
    } else {
        return null
    }
}

passport.use(
    new JwtStrategy(jwtOptions, async function(payload, next) {
        const user = await readUtilisateur(payload.login)
        if (user) {
            next(null, user)
        } else {
            next(null, false)
        }
    })
)

async function connectUtilisateur(login, mdp) {
    if (!login || !mdp) {
        return {code: "401", message: 'Login or password was not provided.'}
    }

    const user = await readUtilisateur(login)

    if (!user || user.mdp !== mdp) {
        return {code: "401", message: 'Login / password do not match.'}
    }

    const userJwt = jwt.sign({ login: user.login }, secret)
    return { token: userJwt }
}

async function extractLoginFromToken(token){
    let decodedToken = await jwt.verify(token, secret)
    return decodedToken.login
}


module.exports = {
    saveUtilisateur: createUtilisateur,
    passport: passport,
    connexionUtilisateur: connectUtilisateur,
    extractLoginFromToken,
}
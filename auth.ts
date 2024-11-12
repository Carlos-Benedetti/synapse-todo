const jwt = require('jsonwebtoken');

const SECRET_KEY = 'palavra_super_secreta';
const validade = '1h'

export interface Cretential {
    id:number;
    username: string;
}

export function createToken(cretential: Cretential): string {
    const token = jwt.sign(cretential, SECRET_KEY, { expiresIn: '1h' });
    return token
}

export function authenticateToken(req, res, next) {
    const headerAuth = req.headers['authorization'];
    const token = headerAuth && headerAuth.split(' ')[1];  // Bearer <token>

    if (token == null) return res.sendStatus(401);  // token não esta presente

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);  // token não é valido

        req.user = user;
        next();
    });
}
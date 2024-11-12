export function blockerMiddle(req, res, next) {
    const userAgent = req.get('User-Agent') || '';
    if (userAgent.includes('Chrome')) {
        console.log("A solicitação é de um navegador Chrome");
        next()
    } else {
        console.log("A solicitação não é de um navegador Chrome");
        res.sendStatus(400)
    }
}
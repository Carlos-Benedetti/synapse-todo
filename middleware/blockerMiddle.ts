export function blockerMiddle(pergunta, resposta, proximo) {
    const userAgent = pergunta.get('User-Agent') || '';
    if (userAgent.includes('Chrome')) {
        console.log("A solicitação é de um navegador Chrome");
        proximo()
    } else {
        console.log("A solicitação não é de um navegador Chrome");
        resposta.sendStatus(400)
    }
}
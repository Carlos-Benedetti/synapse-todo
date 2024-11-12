# Aula de Autenticação

## Definiçoes:

- sessão
- token: é a nossa chave, só que assinada no digital, ou melhor encriptada 
- JSON web token: colocamos dentro da chave(token) 
## Token na lingua do P
 
palavra secreta: "carlos"

```javascript
    emcripiteEmP("carlos") // pcpaprplpops [token criado]
```
a API devolve a chave para o usuario

quando o usuario quiser se identificar para a API, basta passar o **token** pcpaprplpops

```javascript
    desEmcripiteEmP("pcpaprplpops") // carlos [usuario validado, você é o carlos]
```




## Intalando dependencias 
jsonwebtoken: Uma biblioteca para assinar, verificar e decodificar JWTs.
 ```bash
 npm install jsonwebtoken
 ```


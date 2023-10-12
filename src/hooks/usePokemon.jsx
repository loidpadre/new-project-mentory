async function fetchAPI(name) {
    try {
        const resposta = await fetch(API + name)
        const data = await resposta.json();
        setData(data)
    } catch (erro) {
        console.error("Erro ao consumir a API", erro)
    }
}
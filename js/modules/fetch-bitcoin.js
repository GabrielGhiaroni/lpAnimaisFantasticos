export default function initFetchBitcoin() {

    async function fetchBitcoin(url) {
        try {
            const responseFetch = await fetch(url);
            const responseJSON = await responseFetch.json();

            const btcPreco = document.querySelector('.btc-preco');
            btcPreco.innerText = (100 / responseJSON.BRL.last).toFixed(4);
        } catch (erro) {
            console.log(erro);
        };
    };

    fetchBitcoin('https://blockchain.info/ticker');
};
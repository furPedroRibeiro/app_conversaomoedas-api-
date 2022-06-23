// This is a JavaScript file
window.onload = ()=>{
    const convertOne = document.querySelector('#btn1');
    const convertTwo = document.querySelector('#btn2');
    const convertThree = document.querySelector('#btn3');


    convertOne.addEventListener('click', ()=>{
        const opcoes = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
        }
        fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, opcoes)
        .then(
            response => {response.json()
            .then(coin => {
                document.querySelector('#compra').textContent = coin.USDBRL.bid;
                document.querySelector('#venda').textContent = coin.USDBRL.ask;
                document.querySelector('#variacao').textContent = coin.USDBRL.varBid;
                document.querySelector('#max').textContent = coin.USDBRL.high;
                document.querySelector('#min').textContent = coin.USDBRL.low;
            })            
        })
    });
    convertTwo.addEventListener('click', ()=>{
        const opcoes = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
        }
        fetch(`https://economia.awesomeapi.com.br/json/last/EUR-BRL`, opcoes)
        .then(
            response => {response.json()
            .then(coin => {
                document.querySelector('#compra').textContent = coin.EURBRL.bid;
                document.querySelector('#venda').textContent = coin.EURBRL.ask;
                document.querySelector('#variacao').textContent = coin.EURBRL.varBid;
                document.querySelector('#max').textContent = coin.EURBRL.high;
                document.querySelector('#min').textContent = coin.EURBRL.low;
            })            
        })
    });
    convertThree.addEventListener('click', ()=>{
        const opcoes = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
        }
        fetch(`https://economia.awesomeapi.com.br/json/last/BTC-BRL`, opcoes)
        .then(
            response => {response.json()
            .then(coin => {
                document.querySelector('#compra').textContent = coin.BTCBRL.bid;
                document.querySelector('#venda').textContent = coin.BTCBRL.ask;
                document.querySelector('#variacao').textContent = coin.BTCBRL.varBid;
                document.querySelector('#max').textContent = coin.BTCBRL.high;
                document.querySelector('#min').textContent = coin.BTCBRL.low;
            })            
        })
    });
}
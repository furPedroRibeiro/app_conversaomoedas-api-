// This is a JavaScript file
window.onload = ()=>{
    const radioReal = document.querySelector('#real');
    const radioDolar = document.querySelector('#dolar');
    const radioEuro = document.querySelector('#euro');
    const cotX = document.querySelector('#cotX');

    //Quando selecionamos o radiobutton de real

        radioReal.addEventListener('click', ()=>{
        
        //Mudando o conteúdo dos botões

            document.querySelector('#btn1').textContent = 'COTAÇÃO USD-BRL';
            document.querySelector('#btn2').textContent = 'COTAÇÃO EUR-BRL';
            document.querySelector('#btn3').textContent = 'COTAÇÃO BTC-BRL';

            //Pegando os botões para o addEventListener
            
            const convertOne = document.querySelector('#btn1');
            const convertTwo = document.querySelector('#btn2');
            const convertThree = document.querySelector('#btn3');

            const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }

        //Para pegar a cotação de USD-BRL

        convertOne.addEventListener('click', ()=>{
            
            cotX.innerHTML = 'USD-BRL';

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

        //Para pegar a cotação de EUR-BRL

        convertTwo.addEventListener('click', ()=>{
            cotX.innerHTML = 'EUR-BRL';

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

        //Para pegar a cotação de BTC-BRL

        convertThree.addEventListener('click', ()=>{
            cotX.innerHTML = 'BTC-BRL';

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
    });
    //Quando selecionamos o radiobutton de dólar

        radioDolar.addEventListener('click', ()=>{
        
        //Mudando o conteúdo dos botões

            document.querySelector('#btn1').textContent = 'COTAÇÃO BRL-USD';
            document.querySelector('#btn2').textContent = 'COTAÇÃO EUR-USD';
            document.querySelector('#btn3').textContent = 'COTAÇÃO BTC-USD';

            //Pegando os botões para o addEventListener
            
            const convertOne = document.querySelector('#btn1');
            const convertTwo = document.querySelector('#btn2');
            const convertThree = document.querySelector('#btn3');

            const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }

        //Para pegar a cotação de BRL-USD

        convertOne.addEventListener('click', ()=>{
            cotX.innerHTML = 'BRL-USD';
            
            fetch(`https://economia.awesomeapi.com.br/json/last/BRL-USD`, opcoes)
            .then(
                response => {response.json()
                .then(coin => {
                    document.querySelector('#compra').textContent = coin.BRLUSD.bid;
                    document.querySelector('#venda').textContent = coin.BRLUSD.ask;
                    document.querySelector('#variacao').textContent = coin.BRLUSD.varBid;
                    document.querySelector('#max').textContent = coin.BRLUSD.high;
                    document.querySelector('#min').textContent = coin.BRLUSD.low;
                })  
                })          
        });

        //Para pegar a cotação de EUR-USD

        convertTwo.addEventListener('click', ()=>{
            cotX.innerHTML = 'EUR-USD';

            const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }
            fetch(`https://economia.awesomeapi.com.br/json/last/EUR-USD`, opcoes)
            .then(
                response => {response.json()
                .then(coin => {
                    document.querySelector('#compra').textContent = coin.EURUSD.bid;
                    document.querySelector('#venda').textContent = coin.EURUSD.ask;
                    document.querySelector('#variacao').textContent = coin.EURUSD.varBid;
                    document.querySelector('#max').textContent = coin.EURUSD.high;
                    document.querySelector('#min').textContent = coin.EURUSD.low;
                })            
            })
        });

        //Para pegar a cotação de BTC-USD

        convertThree.addEventListener('click', ()=>{
            cotX.innerHTML = 'BTC-USD';

            const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }
            fetch(`https://economia.awesomeapi.com.br/json/last/BTC-USD`, opcoes)
            .then(
                response => {response.json()
                .then(coin => {
                    document.querySelector('#compra').textContent = coin.BTCUSD.bid;
                    document.querySelector('#venda').textContent = coin.BTCUSD.ask;
                    document.querySelector('#variacao').textContent = coin.BTCUSD.varBid;
                    document.querySelector('#max').textContent = coin.BTCUSD.high;
                    document.querySelector('#min').textContent = coin.BTCUSD.low;
                })            
            })
        });
    });
    //Quando selecionamos o radiobutton de euro

        radioEuro.addEventListener('click', ()=>{
        
        //Mudando o conteúdo dos botões

            document.querySelector('#btn1').textContent = 'COTAÇÃO BRL-EUR';
            document.querySelector('#btn2').textContent = 'COTAÇÃO USD-EUR';
            document.querySelector('#btn3').textContent = 'COTAÇÃO BTC-EUR';

            //Pegando os botões para o addEventListener
            
            const convertOne = document.querySelector('#btn1');
            const convertTwo = document.querySelector('#btn2');
            const convertThree = document.querySelector('#btn3');

            const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }

        //Para pegar a cotação de BRL-EUR

        convertOne.addEventListener('click', ()=>{
            cotX.innerHTML = 'BRL-EUR';
            
            fetch(`https://economia.awesomeapi.com.br/json/last/BRL-EUR`, opcoes)
            .then(
                response => {response.json()
                .then(coin => {
                    document.querySelector('#compra').textContent = coin.BRLEUR.bid;
                    document.querySelector('#venda').textContent = coin.BRLEUR.ask;
                    document.querySelector('#variacao').textContent = coin.BRLEUR.varBid;
                    document.querySelector('#max').textContent = coin.BRLEUR.high;
                    document.querySelector('#min').textContent = coin.BRLEUR.low;
                })  
                })          
        });

        //Para pegar a cotação de USD-EUR

        convertTwo.addEventListener('click', ()=>{
            cotX.innerHTML = 'USD-EUR';

            const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }
            fetch(`https://economia.awesomeapi.com.br/json/last/USD-EUR`, opcoes)
            .then(
                response => {response.json()
                .then(coin => {
                    document.querySelector('#compra').textContent = coin.USDEUR.bid;
                    document.querySelector('#venda').textContent = coin.USDEUR.ask;
                    document.querySelector('#variacao').textContent = coin.USDEUR.varBid;
                    document.querySelector('#max').textContent = coin.USDEUR.high;
                    document.querySelector('#min').textContent = coin.USDEUR.low;
                })            
            })
        });

        //Para pegar a cotação de BTC-EUR

        convertThree.addEventListener('click', ()=>{
            cotX.innerHTML = 'BTC-EUR';

            const opcoes = {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'default'
            }
            fetch(`https://economia.awesomeapi.com.br/json/last/BTC-EUR`, opcoes)
            .then(
                response => {response.json()
                .then(coin => {
                    document.querySelector('#compra').textContent = coin.BTCEUR.bid;
                    document.querySelector('#venda').textContent = coin.BTCEUR.ask;
                    document.querySelector('#variacao').textContent = coin.BTCEUR.varBid;
                    document.querySelector('#max').textContent = coin.BTCEUR.high;
                    document.querySelector('#min').textContent = coin.BTCEUR.low;
                })            
            })
        });
    });
}
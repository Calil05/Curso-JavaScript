var itens = [];

document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProdutos = document.querySelector('input[name=nome_produto]');
    var valorProdutos = document.querySelector('input[name=valor_produto]');

    itens.push({
        nome: nomeProdutos.value,
        valor: valorProdutos.value
    });

    let lista = document.querySelector('.lista-produtos');
    let soma = 0;
    lista.innerHTML = "";

    itens.map(function(val){
        soma+=parseFloat(val.valor);
        lista.innerHTML+=`
         
        <div class="lista-Produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto">R$`+val.valor+`</h3>
        </div>

        `
    });     

    soma = soma.toFixed(2);
    valorProdutos.value = ""
    nomeProdutos.value = ""

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'Total: R$'+soma;

});

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    itens = [];

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$0,00";

    alert("Limpo!");

})
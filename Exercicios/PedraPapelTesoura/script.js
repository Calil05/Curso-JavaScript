var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria(){

    let vencedor = document.querySelector('.vencedor')

    if(playerOpt == "paper"){
        if(inimigoOpt == "paper"){
            //empate
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "rock"){
            //vitoria do jogador
            vencedor.innerHTML = "Vitoria do Jogador!";
        }else if(inimigoOpt == "scisor"){
            //vitoria do inimigo
            vencedor.innerHTML = "Vitoria do Inimigo!";
        }
    }

    if(playerOpt == "rock"){
        if(inimigoOpt == "rock"){
            //empate
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "scisor"){
            //vitoria do jogador
            vencedor.innerHTML = "Vitoria do Jogador!";
        }else if(inimigoOpt == "paper"){
            //vitoria do inimigo
            vencedor.innerHTML = "Vitoria do Inimigo!";
        }
    }

    if(playerOpt == "scisor"){
        if(inimigoOpt == "scisor"){
            //empate
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "paper"){
            //vitoria do jogador
            vencedor.innerHTML = "Vitoria do Jogador!";
        }else if(inimigoOpt == "rock"){
            //vitoria do inimigo
            vencedor.innerHTML = "Vitoria do Inimigo!";
        }
    }

}

function resetInimigos(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOptions.length; i++){
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigos();
    for(var i = 0; i < enemyOptions.length; i++){
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt'); 
        }
    }

    validarVitoria();

}

function resetOpacityPlayer(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}


for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        inimigoJogar();

        //alert(playerOpt);
    });
}
    function testes(){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const erro = false  ;

                if(erro){
                    reject("Erro! Cheque o Console");
                    console.log("Deu Erro");
                }else{
                    resolve("A Promisse foi resolvida com sucesso!");
                }

            },2000)    
        },);

            
    }

    testes().then(function(res){
        alert(res);
    }).catch(function(err){
        alert(err);
    })

    async function testes2(){
        await testes();
        alert("Olá");
    }

    testes2()
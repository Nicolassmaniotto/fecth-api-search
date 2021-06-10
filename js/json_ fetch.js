/*faz uma requisição fetch a um servidor 
por meio do protocolo http (GET)  */

// (url, id do item, funcao a ser chamada)
function json_fetch(url,pos,func) {
    // escreve carregando no item com o id pos
    // document.getElementById(pos).innerHTML = "Carregando" ;

    /*carrega a pagina chamada 
    e chama a funcao com os valores dos objetos retornados*/
    fetch(url)    
    .then((resp) => resp.json())
    .then(function(data) {
        //chamada de funcao(valor retornado,id do item a ser prenchido)
    func(data,pos);
    })

}
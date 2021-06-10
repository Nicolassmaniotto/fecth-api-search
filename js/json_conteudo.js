// // (url, id do item, funcao a ser chamada)
// function json_fetch_select(url,pos,func) {
//     /*carrega a pagina chamada 
//     e chama a funcao com os valores dos objetos retornados*/
//     fetch(url)    
//     .then((resp) => resp.json())
//     .then(function(data) {
//         //chamada de funcao(valor retornado,id do item a ser prenchido)
//     func(data,pos);
//     })

// }
// funcao de retorno do valor 
function json_conteudo_ul(data,pos){
    // apaga o elemento pos a cada requisição
    document.getElementById(pos).innerHTML = " " ;
    //percorre os itens 
    data.forEach(element => {
         //pega os dados e separa por objeto

        //atribue o valor do value a variavel
        let valor = element.value;
        //atribue o valor do option a variavel
        let option = element.option;
        //retorna os valores de construção dos items dos
        document.getElementById(pos).innerHTML += `<li > <a  href="#" onclick="input_v('${option}','input_value','${pos}')">${option}</a> </li>`;



    });
    

}
// funcao de retorno do valor 
function json_conteudo_select(data,pos){
    // apaga o elemento pos a cada requisição
    document.getElementById(pos).innerHTML = " " ;
    //percorre os itens 
    data.forEach(element => {
        //pega os dados e separa por objeto

        //atribue o valor do value a variavel
        let valor = element.value;
        //atribue o valor do option a variavel
        let option = element.option;
        //retorna os valores de construção dos items
        document.getElementById(pos).innerHTML += `<option value="${option}">${option}</option>`;



    });
    

}

// funcao de retorno do valor 
function json_conteudo_a(data,pos){
    // apaga o elemento pos a cada requisição
    document.getElementById(pos).innerHTML = " " ;
    //percorre os itens 
    data.forEach(element => {
        //pega os dados e separa por objeto

        //atribue o valor do value a variavel
        let valor = element.value;
        //atribue o valor do option a variavel
        let option = element.option;
        //retorna os valores de construção dos items
        document.getElementById(pos).innerHTML += `<a href="#" onclick="input_v('${option}','input_value3','${pos}')">${option}</a>`;
        
        //retorna os valores de construção dos items  nesse caso o value é o link a ser seguido
        // document.getElementById(pos).innerHTML += `<a href="${value}" >${option}</a>`;



    });
}

function json_conteudo_div_a(data,pos){
    // apaga o elemento pos a cada requisição
    document.getElementById(pos).innerHTML = " " ;
    data.forEach(element => {
        //pega os dados e separa por objeto

        //atribue o valor do value a variavel
        let valor = element.value;
        //atribue o valor do option a variavel
        let option = element.option;
    

    //como o href ! # o link vai ser seguido ao ser clickado
    let rerun =  `<div id='${pos}_${valor}'> <a href ="http://${valor}" > ${option}</a> </div>`

    document.getElementById(pos).innerHTML += rerun;

    });
}    


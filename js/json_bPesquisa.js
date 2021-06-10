function json_pesquisa(data,pos){
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
        document.getElementById(pos).innerHTML += `<a  href="#" onclick="input_v('${option}','pesquisa','${pos}')">${option}</a>`;



    });
    

}
function carrega_conteudo(url){
    document.getElementById("conteudo").innerHTML = "";
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            document.getElementById("conteudo").innerHTML = "Carregando" ;
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("conteudo").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    

}
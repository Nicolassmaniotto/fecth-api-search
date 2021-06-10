<?php



function retorno_json(){
    //pega o valor do campo value
    $value = $_GET['value'];
    if(!$value || $value ==''){
        $value = 'site';
    }

    //pesquisa db
    // aqui seria a requisição do db usando o valor do get
    /*include_once 'connect.php';
    $sql = "SELECT * FROM db_name WHERE data == $value and segunda_regra == 'segunda regra' ";
    $object = (object)[];
    if ($result = $mysqli->query($query)) {
        //separação de dados orienatada a objetos
        $i = 0;
        while ($obj = mysqli_fetch_object($result)) {
            //adicionar o valor do sql ao object
            $object[$i] = $obj;
            //
            $i++
        }
    mysqli->close();
    }

    //retorna id do elemento 0
    echo `$object[0]->id`;

    */


    //objeto a ser retornado
    // para explicação nao irei receber dados de nenhum db
    $object[] = (object)[];

    //para exemplo estou populando usando for

    for($i = 0;$i<10;$i++){
        $val = (object)[];
        $val->value = "$value$i.com";
        $val->option = "$value $i";

        $object[$i]= $val ;
    };
    
    $json_encode = json_encode($object);
    echo $json_encode;

};
//permite o recebimento de dados via lan por parte do cliente
header('Content-Type: application/json');
// header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Origin: true");
header('Access-Control-Allow-Credentials: true');
retorno_json();


?>
<?php

    ini_set("display_errors", 1);

    include "simpleLogic.php";

    //$resource = $_GET['resource']; // i.e. person
    $method = $_GET['method']; // i.e. read or write

    switch($method){
        case 'read':
            $persons = readPersons();
            echo json_encode($persons);
        case 'write':
            //
            break;
        default:
            
            break;
    }

    header("Content-Type: application/json");
    

?>
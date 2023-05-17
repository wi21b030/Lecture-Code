<?php
include("businesslogic/simpleLogic.php");
$param = "";
$method = "";
$requestType = $_SERVER["REQUEST_METHOD"];

switch ($requestType) {
    case 'GET':
        isset($_GET['method']) ? $method = $_GET['method'] : false;
        isset($_GET['param']) ? $param = $_GET['param'] : false;
        break;
    case 'POST':
        isset($_POST['method']) ? $method = $_POST['method'] : false;
        isset($_POST['param']) ? $param = $_POST['param'] : false;
        break;
    default:
        http_response_code(400);
        break;
}

$logic = new SimpleLogic();
$result = $logic->handleRequest($method, $param);
if ($result == null) {
    response($requestType, 400, null);
} else {
    response($requestType, 200, $result);
}

function response($request, $httpStatus, $data)
{
    header('Content-Type: application/json');
    if (in_array($request, array('GET', 'POST'))) {
        http_response_code($httpStatus);
        echo (json_encode($data));
    } else {
        http_response_code(405);
        echo ('Method not supported yet!');
    }
}

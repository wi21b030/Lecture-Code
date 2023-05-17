<?php
include("db/dataHandler.php");

class SimpleLogic
{
    private $dh;
    function __construct()
    {
        $this->dh = new DataHandler();
    }

    function handleRequest($method, $param)
    {
        switch ($method) {
            case "queryPersons":
                $res = $this->dh->queryPersons();
                break;
            case "queryPersonById":
                $res = $this->dh->queryPersonById($param);
                break;
            case "queryPersonByName":
                $res = $this->dh->queryPersonByName($param);
                break;
            case "getUniqueDepartments":
                $res = $this->dh->getUniqueDepartments();
                break;
            case "queryAllPersonsByDepartment":
                $res = $this->dh->queryAllPersonsByDepartment($param);
                break;
            case "setCookie":
                $res = $this->dh->setCookie($param);
                break;
            default:
                $res = null;
                break;
        }
        return $res;
    }
}

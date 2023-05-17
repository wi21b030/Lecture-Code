<?php
include("./models/person.php");
class DataHandler
{
    public function queryPersons()
    {
        $res =  $this->getDemoData();
        return $res;
    }

    public function queryPersonById($id)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->id == $id) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByName($name)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->lastname == $name) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function queryPersonByDepartment($department)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->department == $department) {
                array_push($result, $val);
            }
        }
        return $result;
    }

    public function getUniqueDepartments()
    {
        $result = array();

        foreach ($this->queryPersons() as $val) {
            $department = $val[0]->department;
            if (!in_array($department, $result)) {
                array_push($result, $department);
            }
        }
        return $result;
    }

    public function queryAllPersonsByDepartment($department)
    {
        $result = array();
        foreach ($this->queryPersons() as $val) {
            if ($val[0]->department == $department) {
                array_push($result, $val[0]);
            }
        }
        return $result;
    }

    public function setCookie($param)
    {
        $input = json_decode($param, true);
        if (!isset($_SESSION)) {
            session_start();
        }
        if (isset($_SESSION)) {
            $_SESSION[$input['key']] = $input['value'];
        }
        return $_SESSION;
    }

    private static function getDemoData()
    {
        $demodata = [
            [new Person(1, "Jane", "Doe", "jane.doe@fhtw.at", 1234567, "Central IT")],
            [new Person(2, "John", "Doe", "john.doe@fhtw.at", 34345654, "Help Desk")],
            [new Person(3, "baby", "Doe", "baby.doe@fhtw.at", 54545455, "Management")],
            [new Person(4, "Mike", "Smith", "mike.smith@fhtw.at", 343477778, "Faculty")],
        ];
        return $demodata;
    }
}

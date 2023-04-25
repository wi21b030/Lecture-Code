<?php 

    include "PersonModel.php";

    function readPersons(){
        // read all Persons
        $persons = [];
        $person1 = new PersonModel();
        $person1->firstname = 'Franz';
        $person1->lastname = 'Meyer';

        $person2 = new PersonModel();
        $person2->firstname = 'Huber';
        $person2->lastname = 'Keller';

        $person3 = new PersonModel();
        $person3->firstname = 'Dieser';
        $person3->lastname = 'Typ';

        $persons[] = $person1;
        $persons[] = $person2;
        $persons[] = $person3;

        return $persons;

    }

    function addPerson(){   
        // add a person
    }
?>
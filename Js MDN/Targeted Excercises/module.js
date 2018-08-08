function MyModule() {
    var prop1 = 'Property 1', prop2 = 'Property 2';

    function getProp1() {
        console.log(prop1);
    }

    function getProp2() {
        console.log(prop2);
    }

    return {
        getProp1: getProp1,
        getProp2: getProp2
    }
}

var moduleObj = MyModule();

moduleObj.getProp1();


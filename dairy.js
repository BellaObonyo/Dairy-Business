function productioPerDay(){
    var shedAcows= parseInt(document.getElementById('acows').value);
    var shedAmilk= parseInt(document.getElementById('amilk').value);
    var shedAmilk=( shedAcows*shedAmilk)

    var shedBcows= parseInt(document.getElementById('bcows').value);
    var shedBmilk= parseInt(document.getElementById('bmilk').value);
    var shedBmilk=( shedBcows*shedBmilk)

    var shedCcows= parseInt(document.getElementById('ccows').value);
    var shedCmilk= parseInt(document.getElementById('cmilk').value);
    var shedCmilk=( shedCcows*shedCmilk)
    
    var shedDcows= parseInt(document.getElementById('dcows').value);
    var shedDmilk= parseInt(document.getElementById('dmilk').value);
    var shedDmilk=( shedDcows*shedDmilk) 
    alert( "Your production in Shed A " + shedAmilk+" litres per day")
    alert( "Your production in Shed B " + shedBmilk+" litres per day")
    alert( "Your production in Shed C " + shedCmilk+" litres per day")
    alert( "Your production in Shed D " + shedDmilk+" litres per day")
    
}

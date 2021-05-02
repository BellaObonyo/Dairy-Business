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

    document.getElementById('shedA').innerHTML = "Your production in Shed A " + shedAmilk+" litres per day";
    document.getElementById('shedB').innerHTML = "Your production in Shed B " + shedAmilk+" litres per day";
    document.getElementById('shedC').innerHTML = "Your production in Shed C " + shedAmilk+" litres per day";
    document.getElementById('shedD').innerHTML = "Your production in Shed D " + shedAmilk+" litres per day";
  
    // alert( "Your production in Shed A " + shedAmilk+" litres per day")
    // alert( "Your production in Shed B " + shedBmilk+" litres per day")
    // alert( "Your production in Shed C " + shedCmilk+" litres per day")
    // alert( "Your production in Shed D " + shedDmilk+" litres per day")
    var totallittresperday= (shedAmilk + shedBmilk + shedCmilk + shedDmilk)
    console.log (totallittresperday)
      
    var months={
        "January" :31,
        "February" :29,
        "March" :31,
        "April" : 30,
        "May" : 30,
        "June" :31,
        "July" :31,
        "August" : 31,
        "september" :30,
        "November" :31,
        "December" :30,


    }
    sum = 0
    
    Object.entries(months).forEach(([key, value]) => {
        console.log('Your income for ' +key+ ' is ' + (value * totallittresperday * 45) + ' ksh');
        document.getElementById('monthlyincome').innerHTML += 'Your income for ' +key+ ' is ' + (value * totallittresperday * 45) + ' ksh';
        
        sum += (value * totallittresperday * 45)
        
    });

    console.log('Income for the year is ' + sum)
    
}

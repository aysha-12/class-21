function leapYear(year){

    if(year%400 ==0){
        console.log(year,"is not leap year")
    }
    else if((year%4 ===0)   && (year%100 !== 0)){
         console.log(year,"is leap year")
    }

}
leapYear(2004)

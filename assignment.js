function feetToMile(feet){
    if(feet<0){
        return ("Invalid input!!Feet have to be positive number.");
    }
    else{
        var miles=feet/5280;
        miles=miles.toFixed(10);
        return miles;
    }
}
var result=feetToMile(1237);
console.log(result);




function woodCalculator(chair,table,bed){
    if(chair<0 || table<0 || bed<0 || chair%1 !=0 || table%1 !=0 || bed%1 !=0){
        return("invalid input!!!");
    }
    else {
        return(1*chair+3*table+5*bed+" cubic feet");
    }

}
var totalWood=woodCalculator(10,10,10);
console.log(totalWood);




function brickCalculator(storeysNum){
    if(storeysNum<=0 || storeysNum%1 !=0){
        return("Invalid input!!!");
    }
    else if(storeysNum<=10){
        var totalBrick=15*storeysNum*1000;
        return totalBrick;
    }
    else if(storeysNum<=20){
        var totalBrick=((15*10)+(12*(storeysNum-10)))*1000;
        return totalBrick;

    }
    else if(storeysNum>20){
        var totalBrick=((15*10)+(12*10)+(10*(storeysNum-20)))*1000;
        return totalBrick;
    }
}
var brickNum=brickCalculator(100);
console.log(brickNum);




function tinyFriend(friends){  
     if(friends.length==0){       
        return("Please fill up the array."); 
    }
    else{
        var tinyName = friends[0];
        for( var i=1; i<friends.length; i++){
          
             if(friends[i].length<tinyName.length){
            
                 tinyName= friends[i];
             }
        }
        return tinyName;
    
    }
}
var friends = ['shohanur' , 'nobonee' ,'samina' , 'mim', 'ric','alal','arthy'];
var tiniest = tinyFriend(friends);
console.log(tiniest);









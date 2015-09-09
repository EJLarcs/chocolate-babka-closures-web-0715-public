function counterCreator(num){
  return function(){
    return num+=1;
  }
}

function countAnnouncer(good, place){
  return function(){
    return ("Now serving "+ good + " number " + place() + "!");
  }
}

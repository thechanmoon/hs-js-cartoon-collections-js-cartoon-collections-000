function dwarfRollCall(dwarves) {
  let i = 0;
  let retVal = ''; 
  for(i = 0; i < dwarves.length; i++)
  {
    retVal += `${i+1}. ${dwarves[i]} ` 
  }
  return retVal;
}

function summonCaptainPlanet(planeteerCalls){
  let i = 0;
  for(i = 0; i < planeteerCalls.length; i++)
  {
    planeteerCalls[i] = `${planeteerCalls[i].toUpperCase()}!` 
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  let i = 0;
  let retVal = false;
  for(i = 0; i < words.length; i++)
  {
    if(words[i].length > 4)
    {
      retVal = true;
      break;
    }
  }
  return retVal;
}

function findTheCheese (foods) {
  let i = 0;
  let retVal = 'no cheese!';
  for(i = 0; i < foods.length; i++)
  {
    // if(foods[i].includes("cheddar") || foods[i].includes("gouda") || foods[i].includes("camembert"))
    // {
    //   retVal = foods[i];
    //   break;
    // }
    
    if(foods[i]==="cheddar" || foods[i]==="gouda" || foods[i]==="camembert")
    {
      retVal = foods[i];
      break;
    }
  }
  return retVal;
}

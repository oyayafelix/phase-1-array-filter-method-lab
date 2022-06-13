// Code your solution here
function findMatching(names, searchName){
    return names.filter(driver => searchName.toLowerCase() === driver.toLowerCase())
  }
  
  function fuzzyMatch(names, searchString){
    return names.filter(driver => driver.startsWith(searchString))
  }
  
  function matchName(names, nameString){
    return names.filter(driver => driver.name === nameString)
  } 
const myForEach = (arr,func) => {
  for(let i=0;i<arr.length;i++){
    func(arr[i])
  }
};

const myMap = ([...arr],func) => {
  let newArr = []
  for(let i=0;i<arr.length;i++){
    newArr.push(func(arr[i]))
  }
  return newArr
};

const myFind = (arr,func) => {
  for(let i=0;i<arr.length;i++){
    if(func(arr[i]) == true) return arr[i] 
  }
  return undefined
};

const myFilter = ([...arr],func) => {
  let newArr = []
  for(let i=0;i<arr.length;i++){
    if(func(arr[i]) == true){
      newArr.push(arr[i]) 
    }  
  }
  return newArr
};

const sortWords = ([...arr]) => {
  const unsorted = [...arr]
  return unsorted.sort()
};

const sortNumbers = ([...arr]) => {
  return arr.sort((a,b) => a-b)
};

const sortNumbersBetter = ([...arr], isDescending) => {
  if(isDescending === true){
    return arr.sort((a,b) => b-a)
  }
  return arr.sort((a,b) => a-b)
};

const sortUsersByOrder = (...arr) => {
  const newArr = []
   for(let person of arr){
    newArr.push(person.sort((a,b) => a.order - b.order))
  }
  return newArr
};

const sortUsersByName = (...arr) => {
  for(let person of arr){
    person.sort((a,b) => {
      if(a.name > b.name) {
        
      }
  })
  }
  return arr 
};
sortUsersByName([
  { name: 'Bob', order: 1 },
  { name: 'Alice', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
])
module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray=[]
const arrayForEach=array.forEach(element=>{
    let {username}=element
    username= username+"!"
    newArray.push(username)})
console.log(newArray);
//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray= array.map(element=>{
  let {username}=element
  return username +"?"
})
console.log(mapArray)

//Filter the array to only include users who are on team: red
const filterArrayOnlyRed=array.filter(element=>{
  return element.team==="red"
})

//Find out the total score of all users using reduce

const totalValue=array.reduce((cont,element)=>{
  return cont+element.score
},0)
// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => {
  return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const shoutTheItems=array.map(element=>{
    let allItems=element.items
    let items = allItems.map(item=>{
        return item +"!"})
    element.items=items
    return element})



// const howmanyletter = () => {

// const phrase = prompt("write the words")

// let result = 0

 
// for (const letter in phrase){
//     console.log(Number(letter)+1);
//     result = Number(letter)+ 1;
// }
// return {result}
// }
// console.log(howmanyletter(letter)) 


// [1, 2, 3, 4]

// const sumArray = (numbers) =>{
// let result = 0
//  for (const letter of numbers){
//      console.log(letter)
//      result = result + letter
//  }

// return {result}
// }

// const num = [1 ,8, 7]
// console.log(sumArray(num))
 









//  const sum = (num) => {
//     let result = 0
// for (const number of num){
//     result = result + number
// }
//  return {result}

//  }
// const values = [1 , 2 ,4, 5,2,6,7]
// console.log(sum(values))














// function sum(num)  {
// let result = 0
// for (const number of num){
//     result = result + number;
// }
// return {result}


// }
// const values = [1,4,2]
// console.log(sum(values))
 







// const numbers = (sum) =>{
//     let result = sum[0];

//     for (const number of sum){
// if(number>result){
//     result = number
// }
//     }

// return {result}
// }
// console.log(numbers([1,4,5,6,3,50]))
 








// const letterFreq = (letters) =>{

// console.log(letters)

// for (const letter of letters){
//     console.log(letter)
// }

// }
// console.log(letterFreq("hello "))








// const letterfrequency = (phrase) =>{


// let frequency = {}

// for(const letter of phrase){

// if(letter in frequency){
//     frequency[letter] = frequency[letter] +1
// }
// else{
//     frequency[letter] = 1
// }

// }
// return frequency

// }

// console.log(letterfrequency("helloworld"))








// const freqchecker = (phrase) =>{

// let frequency = {}
 
// for (const letter of phrase){

//     if(letter in frequency){
//         frequency[letter] ++;
//     }
//     else{
//         frequency[letter] = 1
//     }

// }
// return frequency
// }








// // let frequency = {}
 
//  const wordfrequency = (phrase) =>{

// const words = phrase.split(" ")

// return freqchecker(words)







// for(const letter of words){
   
//    if(letter in frequency){
//     frequency[letter] += 1
//    }
// else{
//     frequency[letter] = 1
// } 

// }
//  return frequency
// }



// const userInput = prompt("write the sentence")
// console.log(wordfrequency(userInput)) 
// console.log(freqchecker(userInput))


// converting hours into seconds

// function howManySeconds(years){
//     let months = years * 12
//     let days = months * 30
//    let hours = days * 24
// let minutes = hours * 60
// let seconds = minutes * 60

// return seconds;
// }

// console.log(howManySeconds(1 ))





// const double = (numbers) =>{
//     let result = []
//     for(const number of numbers){
//         result.push(number * 2)
//     }
//     return result;
// }
// console.log(double([1,2,4]))



// let result = [1,3,5,7,9].map(number => number*2)
// console.log(result)



// const doubleMap = (number) =>{
// return number.map(number => number * 2)
// }

// console.log(doubleMap([1,5]))






 
// const filter = (numbers , greater) => {
//     let result =[]

//     for (const number of numbers){
//         if (number > greater){
//             result.push(number)
//         }
   
//     }
// return {result}

// }
// console.log(filter([1,2,3,4,5,6] , [3]) )



// const nums = [1,2,3,4,5,6,7,8]
// console.log(nums.filter(nums => nums>4 || nums < 3))




// const innovator = [
// {name:"nischal" , networth:25000000},
// {name:"Dr" , networth:22500000},
// {name:"elon" , networth:1500000},
// {name:"jeff" , networth:1000000 },
// {name:"engr" , networth:500000 }
// ]

// let result = innovator.filter(innovator=> innovator.networth > 20000000 || innovator.networth<10000000 )
// console.log(result.map(innovat => innovat.name))


// let sum = innovator.reduce((prev , nxt) => prev+nxt.networth , 0 )
// console.log(sum)






// const nums = [1,2,3,4,5,6]

// const result = nums.reduce((a,b) => a + b  )

// console.log(result)



// let result = document.getElementById("title");
// let finalResult = result.innerText = "hello world"
  
// console.log(finalResult)

// result.innerText = "good night" 
 



// let rock = document.querySelector(".red")
// let paper = document.querySelector(".yellow")
// let scissor = document.querySelector(".green")

// rock.onclick=()=>{
//     rock.innerHTML = "red"
//     console.log("red")
// }
// paper.onclick=()=>{
//     rock.innerHTML = "yellow"
//     console.log("yellow")
// }
// scissor.onclick=()=>{
//     rock.innerHTML = "green"
//     console.log("green")
// }








// const element = document.querySelectorAll(".color")


//  const clicked = {"red":0 , 'yellow':0, 'green':0 }

// element.forEach(color => {
// color.onclick = () =>{ 

//  clicked[color.value] += 1
//  color.innerHTML = clicked[color.value]
// }
// })


// let clearBtn = document.querySelector(".clear")

// clearBtn.onclick = () => clearScore()


// function clearScore(){

//         clicked.red = 0
//         clicked.yellow = 0
//         clicked.green = 0
//        element.forEach(color =>{
//          color.innerHTML = ""
//        })
// }





 


   //Advanced Tip calculator



// let calculateBtn = document.getElementById("calculateResult")
// let finalCost = document.getElementById("FSP")
// const numberofpeople = document.getElementById("splitAmount")
// let tipAmt = document.getElementById("tipAmt")

// const minusBtn = document.getElementById("minusBtn")
// const plusBtn = document.getElementById("plusBtn")


// let numberofpeoplePaying = Number(numberofpeople.innerText)



// function calculate(){

//     const bill = document.getElementById("costCal").value
//     const tip = document.getElementById("tipCal").value
//     let numberofpeople = document.querySelector(".splitAmount")
    
//     let Tipamount = (tip/100)*bill ;

//     let amount = Tipamount +  Number(bill);
//     let perPeopleAmount = Math.round(amount / numberofpeoplePaying);
//    finalCost.innerText = `$${perPeopleAmount}.00`
//    tipAmt.innerText = `$${Tipamount}.00`
// }




// minusBtn.onclick = () =>{
// if(numberofpeoplePaying <= 1){
//     return
// }
// else{
//     numberofpeoplePaying -=1
//     numberofpeople.innerText = numberofpeoplePaying
//     calculate()
// }
// }
// plusBtn.onclick = () =>{
//     numberofpeoplePaying +=1
//     numberofpeople.innerText = numberofpeoplePaying
//     calculate()
// }




//  letter = ["a" ,"b" ,"c" ,"d" ,"e" ,"f"]
// console.log(Math.floor(Math.random (letter) * 7))

const weatherScore = (weather) => {
let score 
if(weather == "ranny"){
   score = 1 
}
else if(weather =="sunny"){
   score = -  1
}
else{
   score = 0
}
return score
// const items = Math.floor(Math.random() * weather.length)
// return weather[items]


}


// weather = ["sunny" , "cold" , "rainy"];

console.log(weatherScore("sunny"))






































  





























  





























  





























  












 
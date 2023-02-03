import React from "react"
import { renderIntoDocument } from "react-dom/test-utils";

const App = () => {
  const course ='Introduction to React'
  const part1 =' components of React'
  const exercises1 =10 
  const part2 ='JSX'
  const exercises2=7
  const part3 = ' mutiple components'
  const exercises3 = 14
  const part4 ='passing data to components'
  const exercises4 = 8
  return(
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
       </p>
       <p>
        {part2} {exercises2}
        </p>
  
    <p>
      {part3} {exercises3}
         </p>
         <p>
          {exercises4}
         </p>
         <p> Number of exercises { exercises1  + exercises2  + exercises3  + exercises4}</p>
    
    </div>
  )
  }
  export default App; 

  // javascript
  // variables

  const x = 1
let y = 5

console.log(x, y)   
y += 10
console.log(x, y)   
y = 'teksti'
console.log(x, y)   
x = 4               

//arrays

const t = [1, -1, 3]

t.push(5)

console.log(t.length) 
console.log(t[1])     

t.forEach(value => {
  console.log(value)  
}
)                    

const a = [2, -3, 4]

const a2 = t.concat(5)

console.log(a)  
console.log(a2)


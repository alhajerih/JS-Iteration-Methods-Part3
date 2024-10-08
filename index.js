// You are given an array representing the daily average temperatures (in Celsius) of a month.
const temperatures = [22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];

/*****************************************************************
Part 1: Temperature Analysis

Task 1) Create a new array containing temperatures greater than or equal to 25 degrees Celsius.
       Output 1) [25, 28, 30, 27, 29, 26, 28, 30, 27, 26, 28, 29, 27, 26]*/


const greatTemp = temperatures.filter(temp=>temp>=25);
console.log(greatTemp)




       /*
Task 2) Create a new array containing temperatures less than 20 degrees Celsius.
       Output 2) [19, 18, 19, 19]*/

       const lessTemp = temperatures.filter(temp=>temp<20);
       console.log(lessTemp)


 /******************************************************************/


/*****************************************************************
Part 2: Temperature Transformation

Task 3) Convert the entire list of temperatures to Fahrenheit. Use the formula (Celsius * 9/5) + 32.
       Output 3) [
       71.6, 77, 66.2, 75.2,
       82.4, 86, 69.8, 68,
       80.6, 84.2, 73.4, 78.8,
       75.2, 71.6, 64.4, 66.2, 
       69.8, 82.4, 86, 80.6, 
       78.8, 77, 71.6, 73.4, 
       66.2, 68, 82.4, 84.2,
       80.6, 78.8 
]*/
const toFahrenheit = temperatures.map(celsius=>(celsius * (9/5))+32);
console.log(toFahrenheit);





/*
Task 4) Create a new array that labels each temperature as either "Warm" for temperatures >=25, "Mild" for temperatures between 20 and 24, and "Cool" for temperatures <20.
       Output 4) [
  'Mild', 'Warm', 'Cool', 'Mild',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Warm', 'Warm', 'Mild', 'Warm',
  'Mild', 'Mild', 'Cool', 'Cool',
  'Mild', 'Warm', 'Warm', 'Warm',
  'Warm', 'Warm', 'Mild', 'Mild',
  'Cool', 'Mild', 'Warm', 'Warm',
  'Warm', 'Warm'
]*/

const labelTemp= temperatures.map(temp=>{
    if(temp >= 25){return "Warm";
    }else if(temp >= 20 && temp <= 24){ return "Mild";
    }else if(temp < 20){ return "Cool";}
} )
console.log(labelTemp)







/******************************************************************/


/*****************************************************************
Part 3: Summary Statistics

Task 5) Calculate and return the highest temperature of the month.
       Output 5) 30*/


    const highestTemp = temperatures.reduce((higher,curr)=>{
        return curr > higher ? curr : higher},temperatures[0]
    )
console.log(highestTemp)




/*Task 6) Calculate and return the lowest temperature of the month.
       Output 6) 18*/
       const lowestTemp = temperatures.reduce((low,curr)=>{
        return curr < low ? curr : low},temperatures[0]
    )
console.log(lowestTemp)




/******************************************************************/

// Note: Use appropriate JavaScript array iteration methods such as filter, map, reduce, etc., to achieve the desired output for each task.

// 8 and 1846

// yearNeptuneDiscovered: 1849,  yearMarsDiscovered:1659

// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green

// Maya
// Marisa
// Chi

// 'Raindrops on roses'
// 'Whiskers on kitten'
//['Bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with strings'];

//[10, 30, 20]

// const obj = {
//     numbers: {
//         a:1, 
//         b:2
//     }
// }
// const {numbers: {a, b}}=obj

// [1,2] = [2,1];

const raceResults = ([first, second, third, ...rest]) => {
    return {
        first, 
        second, 
        third, 
        rest
    }
}

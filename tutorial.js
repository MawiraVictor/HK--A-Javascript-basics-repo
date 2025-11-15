const prompt = require ("prompt-sync")()
const name = prompt("What is your name? ")

console.log("Hello " + name + " Welcome to our game")



// Comparisson operators
/*
1. == loose comparison => if they are equal  but dont care about their types
2. === Strict equality operator. they should be exact , data and datatype
3.!=  not equal to => loose-not-equal to 
4.!==Strict not-equal-to . for it to display true then both values being compared should not have the same data type or data value 
5.< less than  => 
6.> greater than
7.<= less than or equal to
8.>= greater than or equal to
9.= equals
*/
const shouldWePlay = prompt ("Do you want to play? ")

// this is a if condition
// it also cotains an if else statement
if (shouldWePlay.toLowerCase() === 'yes') {
    while (true) {
        const leftOrRight = prompt('You entered a maze, Do you want to go left or right: \n');

        if (leftOrRight.toLowerCase() === 'left' ){
            console.log('You go left and see a bridge ...\n');
            const cross = prompt('Do you want to cross the bridge\n')
            if (cross.toLowerCase() === 'yes' ) {
                console.log('Hurry you have crossed the bridge: ');
                break;
            } else if (cross.toLowerCase() === 'no') {
                console.log('cmon bro it takes courage. Lets go back to the start of thr maze\n')
            } else {
                console.log('Invalid input. Going back to the start of the maze')
            }
        } else if (leftOrRight.toLowerCase() === 'right'){
            console.log('you go right and see a mountain ...\n')
            const cross = prompt('Do you want to climb the mountain\n')
            if (cross.toLowerCase() === 'yes'){
                console.log('Heck yeah Lets go Viking: ')
                break;
            } else if (cross.toLowerCase() === 'no') {
                console.log('Cmon bro it takes courange. Lets go at the start pof the maze')
            } else {
                console.log('Input is invaalid lets starrt again a fresh')
            }
        } else {
            console.log('please choose either Left  or Right')
            break
        }
    }

}else {
    console.log('Accept to enter the game to participate. Choose yes')
}
/* LOGIC OPERATORS
&& => AND
|| => OR
! => not
    logic Operatior AND
true && true = true
true && false = false
false && true = false
false && false = false
    Logic Operator OR
true || true = true
true || false = true
false || true = true
false || false = false
    logic operator Not => this is a complement
!(x === '2') => returns that whatever is is in the funtion is false

not is like negation. in truth table, !(1) = 0 ;means negation of 1 is 0
                                      !(0) = 1 ;means negation of 0 is 1
 */

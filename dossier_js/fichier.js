const button = document.getElementById('button');

button.addEventListener('click', addition);


function addition(){

    // console.log('hellooo')
    const number1 = parseInt(document.getElementById('number1').value )
    const number2 = parseInt( document.getElementById('number2').value )
    const number3 = parseInt(document.getElementById('number3').value)
    const resultat =document.getElementById('resultat')
    
    
    // console.log(  number1 , 'number1')
    
    const sum= number1+ number2+ number3 
    
    // console.log(sum, 'sum of elements hereee ')
    resultat.value = sum
    

}

function decodeColor( code ) {
    if ( code === 1 ) {
        console.log('Rouge') ;
    } else if ( code === 2 ) {
        console.log('Jaune') ;
    } else if ( code === 3 ) {
        console.log('Vert') ;
    } else {
        console.log('Code inconnu') ;
    }
}



// function test() {
//     console.log('testtdfgthjkl ')
// }
    
    
   




//stampa i numeri da 1 a 100
//- crea una variabile n che indichi in numero di ripetizioni

    let n = 100; //number

//- crea il ciclo for in modo che la variabile i si ripeta n volte

    for(let i = 0; i < 100; i++){

//- assicurati che la variabile i inizi da 1 e finisca con 100
    //- crea una variabile che contenga i + 1
        
        let nResult = i + 1; //number

        // console.log(nResult)
    


//per i multipli di 3 stampa “Fizz” al posto del numero
//per i multipli di 5 stampa “Buzz” al post del numero
//Per i numeri che sono sia multipli di 3 che di 5 stampa “FizzBuzz” al posto del numero
//- dividi il numero per 3 e 5 e ottieni il resto all'interno di due variabili
        let x = nResult % 3; //number
        let y = nResult % 5; //number

//- se il risultato (x = numero % 3) è 0 allora è divisibile per 3
//- se il risultato (y = numero % 5) è 0 allora è divisibile per 5

//-***RICORDA CHE IL CODICE VIENE LETTO A CASCATA***

//- SE il numero è divisibile per 3 && per 5 stampa "fizzBuzz" al posto del numero
        if(x === 0 && y === 0){

            nResult = "FizzBuzz"; //string
        }
//- sostituisci il numero x con "fizz"
        else if(x === 0 && y !== 0){

            nResult = "Fizz"; //string
        }
//- sostituisci il numero y con "buzz"
        else if(x !== 0 && y === 0){
            
            nResult = "Buzz"; //string
        }





//ALTRIMENTI stampa il numero normalmente
      console.log(nResult)
    


//BONUS 1
//crea una variabile da usare come contenitore in html
        let displayElement = document.querySelector('.table')

//crea nel DOM un elemento div con la classe container

        const containerElement = document.createElement('div')
	    

//assegna all'elemento div la classe "container"

        containerElement.classList.add('container')
//inserisci nel container il risultato n
	    containerElement.innerHTML = nResult

//fai sì che il risultato n compaia nell'html
        displayElement.append(containerElement)


        console.dir(containerElement)

    }
//****************BONUS 1A******************

//seleziona una classe da usare come contenitore in html
        let displayElement = document.querySelector('.table') //string

//crea nel DOM un elemento div

        const containerElement = document.createElement('div') //string
	    

//assegna all'elemento div la classe "container"

        containerElement.classList.add('container')

//fai sì che il risultato n compaia nell'html
    //-crea una ul che possa contenere i li con i nResult
        containerElement.innerHTML = `<ul class="numbers py-4 row gap-2"></ul>`
    //-fai apparire il containter con al suo interno l'ul in html
        displayElement.append(containerElement)




//CONSEGNA PRINCIPALE
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





//Stampa il risultato in console
        console.log(nResult)




//************BONUS 1B *********************/

//crea una variabile da usare come list item in html
        let displayLi = document.querySelector('.numbers'); //string

//crea nel DOM un elemento li

        const liElement = document.createElement('li'); //string
	    

//assegna all'elemento li la classe "items"

        liElement.classList.add('col')


//assegna a li il risultato n
        liElement.innerHTML = nResult;

//fai sì che il risultato n compaia nell'html
        displayLi.append(liElement)

//BONUS 2
//rendi rosse le caselle FizzBuzz
        if(nResult === "FizzBuzz"){
            liElement.classList.add('red')
        }
//rendi verdi le caselle Fizz
        if(nResult === "Fizz"){
            liElement.classList.add('green')
        }

//rendi verdi le caselle Fizz
        if(nResult === "Buzz"){
            liElement.classList.add('blue')
        }


    }
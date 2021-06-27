/*1 crear una funcion que cuente el numero de caracteres de 
    una cadena de texto P.E: f("hola mundo") = 10*/
/*toni*/
function TcontarCaracteres(param){
   let contador = 0
   for (i =0 ; i < param.length ; i++){ 
      contador++; 
   }
   return contador 
}
/*hector*/
function HcontarCaracteres(myString){
    let accumulator = 0;
    for(i=0; i < myString.length; i++ ){
        accumulator += 1;
    }
    return accumulator;
}

function FcontarCaracteres(myString,counter=0){
    if(myString.length==0) return counter;
    return contarCaracteres(myString.slice(1),counter+=1);
}
/*2 crear una funcion que te devuelva el texto recortado segun 
    el numero pasado como segundo parametro P.E: f("hola mundo",6) = "hola m" */

/*1.creamos una funcion que recibe como parametros un string y un numero al cual    
    queremos truncar el string
2. creamos una variable que inicialmente sera un string vacio "".
3. iteramos sobre el string segun el valor del segundo parametro pasado a la funcion
4. en cada iteracion concatenamos el caracter actual a nuestra string vacia.
5. cuando terminamos de iterar devolvemos el valor de la string (que ya no esta vacia).



// 1. hacer un ciclo for para recorrer el string el numero de veces que el parametro num diga
// 2. retornar el string con el lenght que establezca el num*/

/*toni*/
function Tcutter (str,num){
    let cutter = "";
    for (let i =0 ; i < num ; i++){
          cutter = cutter + str[i]
    }
    return cutter
}

/*hector*/
function Hcutter(letter, resta){
    emptyString = ""
   for(i=0; i < resta; i++){
        emptyString += letter[i];
    }
    return emptyString;
    return total;
}

/*karen
function Kcutter(string, cutNum ){
    let 
}


*/
function Fcutter(string,size,current=""){
    if(current.length==size){
        return current;
    }
    return Fcutter(string.slice(1),size,current+=string[0])
}



/*3 crear una funcion que dada una string pasada como primer parametro 
    te devuelva un arreglo con las palabras separadas segun el caracter
    pasado como segundo parametro P.E: f("hola*como*esta","*") = ["hola","como","estas"]*/
/*toni*/

function tSeparator(str,separator){
    let arr = [];
    let aux = "";

    for(let i=0 ; i<str.length; i++){
    if(str[i]!= separator){
       aux += str[i]}
    else{
        arr.push(aux)
        aux="";}
        }
    arr.push(aux)   
    return arr
    }



/*karen*/
function kSeparator (string, separat){
    let newArray = []
    let newString = ""

    
    for(i=0; i<string.length; i++){
        if (string[i] !== separat){
          newString += string[i]
        }
        else {
          newArray.push(newString)
          newString = "";
        }
    }

    newArray.push(newString)
    

    return newArray
}

kSeparator("hola*k*ase", "*")

/* Hector */
function hSeparator(strIng){
    let myArr = [];
    let cadena = "";

    for(let i=0; i < strIng.length; i++){
      if (cadena == " "){
        myArr.push(cadena);
        cadena = "";
      }else{
        cadena += strIng;
      }
    }
}



/*4 crear una funcion que dado un string te devuelva otro string repetido segun
    el segundo parametro P.E: f("oso",5) = "oso oso oso oso oso"*/

    /* Toño */
    function tTimesString (str,times){
  
        let strMulti = ""
      
        for (let i=0 ; i<times ; i++){
        }
      
        return strMulti
      
      }
      
      tTimesString("oso",5)




    /*Karen resolution*/
    function repeatString (string, times){
      
        let fiveTimesString = ""
  
        for (i=0; i<times; i++){
          fiveTimesString += string + " "
        }
        return fiveTimesString
      }
  
      repeatString("oso", 5)

    /* Hector */
    function hrepeatString (strIng, num){
      str = "";
          for(i = 0; i <= num; i++){
            str += strIng + " ";
          }
      return str
        }
/*5 crea una funcion que invierta los caracteres de una cadena de texto 
    P.E: f("barbacoa") = "aocabrab" */ /*BONUS chechar si una palabra es un palindromo*/

    /* Toño con bonus (mejor que el de karen lol)*/

    function palindromo(str){
        let arr = ""
        let noUse = ""
        let reverse = ""
      
      for(let i=0; i <str.length ; i++){
        if(str[i]!= " "){
          arr += str[i]
        } else {
          noUse += str[i]
        }
      }
       for(let i=str.length -1; i >= 0; i--){
         if(str[i] != " "){
          reverse += str[i]
        } else {
          noUse += str[i] 
        }}
        
       if ( reverse == arr){
         return true;
       }
       else{
           return false;
       }
      }



    /*Karen with bonus!*/

    function reverseString (string){
      let reverseString = ""

    for (i=string.length-1; i>=0; i--){
      if(string[i] !== " "){
        reverseString += string[i]
      }
    }
    return reverseString
    }

    function forwardStringNoSpaces (string){
      let forwardString = ""

      for (i=0; i<string.length; i++){
        if(string[i] !== " "){
          forwardString += string[i]
        }
      }
      return forwardString
    }


    function isPalindrome (string){
      let isPalindrome = false
      let reverse = reverseString (string)
      let forward = forwardStringNoSpaces (string)

      if (reverse === forward){
        isPalindrome =true
      }
      return isPalindrome
    }

    isPalindrome("ola k ase")
      
    /*--- Hector ---*/
    function hReverseString(strIng){
      let chain = "";
      for (let i = strIng.length -1; i >= 0; i--){
        if (strIng[i] == " "){
          continue;
        } else{
          chain += strIng[i];
        }
      }
      return chain;
    }
    /* TERMINAR ESTA PARTE */
    //vamos a recorrer nuestra variable
    // primero vamos a despreciar los " " de nuestro string
    //vamos a meter nuestra cadena sin espacios en una variable vacia 
    //vamos a comparar el string vs el string reverse
    function hisPalindrome(strIng){
      let chain = "";
      for(i=0; i < strIng.length; i++){
        chain += strIng[i];
        if (frase[i] ==  " "){

        } else {
          chain += strIng
        }
      }
    }
/*6 crear una funcion que cuente el numero de veces que se reptie una palabra en un string
    P.E: f("hola mundo adios mundo","mundo") = 2 */

       /* Toño solution uwu */
       function numberTimes (str,str2){
        let arre = []
        let arre2 = []
        let aux = ""
        let contador = 0
        
        for (let i = 0; i < str.length; i++){
          if(str[i] != " "){
            aux = aux + str[i]
          } else {  
            arre.push(aux)
            aux = ""
          }
        }
        arre.push(aux)
        arre2.push(str2)
        
        for (let i = 0; i < arre.length; i++){
          if(arre[i] == arre2){
            contador++
          }
        }
        return contador
      }   
       
    





    /* Karen exercise*/

    function repeatCounter (string, repeatedWord){
      let wordContainer = ""
      let repeatCounter = 0
  
      for (i=0; i<string.length; i++){
      
        if (i !== string.length-1){
          if (string[i] !== " "){
            wordContainer += string[i]
          }
        else {
            if (wordContainer === repeatedWord){
                repeatCounter++
                wordContainer = ""
              }
            else {
                wordContainer = ""
              }
            }
        }
        else {
          wordContainer += string[i]
        if (wordContainer === repeatedWord){
          repeatCounter++
        }
      }    
      }
  
      
      return repeatCounter;
    }
  
      repeatCounter ("hola mundo adios mundo", "mundo")
  
    

    
/*7 crear una funcion que evalue si un numero es capicua (se lee igual en ambos sentidos)
    P.E: f(1234321) = true*/

    /* Toño solution uwu */

    function numberArray (num){

        let numStr = num.toString()
        let numRev = numStr.split("").reverse().join("")
       
        if (numRev == numStr){
          return true
        } else {
          return false
        }
       }
       
       numberArray(1234321)




    
/*8 crear una funcion que calcule el factorial de un numero*/

function factorial(n){
    let inicial = n;
    for(let i=n-1;i>0;i--){
        inicial*=i;
    }
    return inicial
}




/* Karen solution*/

function factorialCalculator (factorialNumber){
  let currentMultiplier = factorialNumber

  for (let i = factorialNumber-1; i>0; i--){
    currentMultiplier *= i
  }

  return currentMultiplier
}

/*9  crear una funcion que calcule n-numeros de fibonacci*/
/*10 crear una funcion que determine si un numero es primo o nel*/




/*11 crear una funcion que convierta numeros de basa binaria a base decimal*/
/*12 crear una funcion que dado un arreglo de numeros te regrese un arreglo con 
    los numeros elevados al cuadrado*/
/*13 crear una funcion que dado un arreglo con numeros te devuelva el mayor y el menor*/
/*14 crear una funcion que dado un arreglo con numeros devuevla un objecto con
    los numeros pares en un arreglo y los impares en otro 
    
    P.E: f([1,2,3,4,5,6,7,8]) = {pares:[2,4,6,8], impar:{1,3,5,7}}*/
/*15 crear una funcion que dado un arreglo de numeros devuelva un objecto con dos
arreglos, uno ordenado de manera ascendente y el otro descendente 
    P.E: f([3,2,5,1,6]) = {ascendente:[1,2,3,4,5,6], descendete:[6,5,4,3,2,1]}*/
/*16  crear una funcion que dado un arreglo elimine los elementos duplciados*/
/*17 crear una funcion que dado un arreglo de elementos calcule la media aritmetica,media geometrica, variaza y desviazion estandar*/

/*problemas tentativos*/
/*. Integer Reversal*/
/* Anagrams */
/*Array Chunking
Given an array and a size, split the array items into a list of arrays of the given size.*/
/*Reverse Array*/
/*Caesar Cipher
Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.*/
/* Pyramid
For a given number of levels, print out a “pyramid” using hashes and spaces.*/
/* dado un arreglo devuelve el arreglo con los elementos "barajeados"*/
/*Hay un objeto salaries:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Crear la función topSalary(salaries) que devuelva el nombre de la persona mejor pagada.

Si salaries es vacío, debería devolver null.
Si hay varias personas con mejor paga, devolver cualquiera de ellos.
PD: Utilice Object.entries y desestructuración para iterar sobre pares de propiedades/valores.
*/

/*Cuando ...arr es usado en el llamado de una función, “expande” el objeto iterable arr en una lista de argumentos.*/
/*crear una funcion que cuente las personas repetidas en un arreglo y te devuelva
un objecto con el nombre como clave y la cuneta como valor (usa Reduce)/
function countRepeated(string,word){
    let counter = 0;
    for(let i=0;i<string.length;i++){
        if(string[i] == word[0]){
            let k=0;
            for(let j=0;j<word.length;j++){
                if(word[j] != string[i+k]){
                    break;
                }
                k++;
            }
            if(word.length==k){
                counter++;
            }
        }
    }
    return counter;
}
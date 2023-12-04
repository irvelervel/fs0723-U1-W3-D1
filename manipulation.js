console.log('Oggi si comincia con la manipolazione del DOM!')

// con la DOM TRAVERSING & DOM MANIPULATION tramite JS è possibile selezionare degli
// elementi nella pagina e modificarne il contenuto DOPO il caricamento della pagina
// oppure allo scatenarsi di un qualsiasi evento (es. click di un bottone)

// il processo di alterazione del contenuto della pagina si compone di DUE FASI:
// 1) DOM TRAVERSING (selezione dell'elemento ricercato all'interno della pagina caricata)
// 2) DOM MANIPULATION (una volta trovato l'elemento, possiamo cambiarne i connotati)

// 1) DOM TRAVERSING, RICERCA E SELEZIONE DEGLI ELEMENTI NELLA PAGINA

console.log(document) // document è un oggetto JS contenente TUTTI gli elementi della
// pagina, a partire dal tag <html>

// recap OGGETTI in JS
const person = {
  firstName: 'Stefano', // coppia chiave valore
  age: 19,
  // ma un oggetto non contiene solamente proprietà (rappres. di DATI), ma anche METODI
  // i metodi rappresentano delle capacità, dei comportamenti
  walk: function () {
    // questo è un METODO, una capacità di person
    console.log('Stefano cammina!')
  },
}

person.firstName // 'Stefano'
person.walk() // console.log che scrive "Stefano cammina"

// ora che sappiamo grossomodo cos'è un metodo, sappiamo come lavorare con "document",
// l'oggetto che rappresenta il contenuto della pagina

// come SELEZIONIAMO un elemento della pagina tramite l'oggetto "document"
// a) con getElementById, un metodo che richiede l'ID di un elemento
const h1Element = document.getElementById('main-title')
console.log('questo dovrebbe essere il tag H1', h1Element)

const footerList = document.getElementById('footer-menu')
console.log('questo dovrebbe essere il tag ul dentro il footer', footerList)

const dontknow = document.getElementById('cadrega') // non esiste
console.log('???', dontknow) // null

// b) con getElementsByClassName, un metodo che richiede la classe
// N.B: è getElementSSSSS, PLURALE! non esiste "getElementByClassName"
// getElementsByClassName torna SEMPRE un array!
const allTheArticles = document.getElementsByClassName('content')
console.log('tutti gli elementi con classe content', allTheArticles)
// ho trovato TRE elementi, non uno solo! tutti gli elementi dotati di classe "content"

const mainLink = document.getElementsByClassName('main-link')
// ??? NON TROVO l'elemento, ma trovo un ARRAY con in questo caso 1 contenuto
console.log('un array che contiene 1 <li>', mainLink)
console.log("se voglio trovare l'elemento <li>", mainLink[0])

const dontknowagain = document.getElementsByClassName('cadrega') // non esiste
console.log('cosa ho trovato? un ARRAY VUOTO', dontknowagain)

// c)

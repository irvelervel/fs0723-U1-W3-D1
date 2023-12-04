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

// c) con getElementsByTagName, un metodo che richiede il nome del tag da cercare
// N.B è plurale, tornerà sempre un array come risultato
const allTheAnchors = document.getElementsByTagName('a') // tutte le ancore della pagina
console.log('tutte gli anchor tag della pagina', allTheAnchors)

const allTheSections = document.getElementsByTagName('section') // non abbiamo sections!
console.log('tutte le section della pagina', allTheSections)

const allTheBodies = document.getElementsByTagName('body')
// troviamo un array con UN elemento, il body tag della pagina!
// allTheBodies[0] sarebbe il tag <body>

// d) querySelector e querySelectorAll, permettono di selezionare un elemento nella pagina
// tramite un selettore CSS

const allThePInsideArticles = document.querySelectorAll('article p')
// querySelector e querySelectorAll accettano parametri stringa, con il selettore
// che usereste in CSS per targhettare l'elemento/gli elementi che vi interessano
console.log(
  'dovrebbero essere solo i due p dentro il primo e terzo article',
  allThePInsideArticles
)

// document.querySelector('#main-title') NO! usiamo getElementById
// document.querySelectorAll('.content') NO! usiamo getElementsByClassName

console.log(document.querySelector('aside ol li:nth-of-type(3) a')) // qua l'orso polare è morto ma è morto contento!
console.log(document.querySelectorAll('aside ol li:nth-of-type(3) a')) // qua l'orso polare è morto ma è morto contento!

console.log(document.querySelector('article')) // primo article della pagina
console.log(document.querySelectorAll('article')) // array con tutti gli article della pagina

// finiti i metodi principali! facciamo pratica e troviamo degli elementi nella pagina!

//- seleziono il secondo paragrafo
// console.log(document.getElementsByTagName('p')[1])
// console.log(document.querySelectorAll('.content p')[1])
// console.log(document.querySelector('.content:nth-of-type(3) p'))

// - seleziono la lista ul del footer
console.log(document.getElementById('footer-menu'))

// - seleziono il li "Chi siamo"
// console.log(document.querySelectorAll('#main-menu li')[1])
// console.log(document.querySelector('#main-menu li+li'))

// - seleziono l'ultimo li della lista nel footer (strage di orsi polari)
console.log(
  document.querySelectorAll('#footer-menu li')[
    document.querySelectorAll('#footer-menu li').length - 1
  ]
)

// postilla: ogni elemento della pagina trovato contiene anche il riferimento
// al suo parent element!

const footerMenu = document.getElementById('footer-menu')
console.log(footerMenu.parentElement.parentElement)

// --FINITO PUNTO 1)--

// 2) DOM MANIPULATION (manipolazione degli elementi trovati con i metodi di 1) )

// const titleOfThePage = document.getElementById('main-title')
const titleOfThePage = document.getElementsByTagName('h1')[0] // il primo elemento dell'
// array contenente TUTTI gli h1 (ma in realtà ne avevamo uno solo...!)

console.log(titleOfThePage) // giusto!

// LETTURA/CAMBIO VALORE TESTUALE
// ogni elemento testuale ha una proprietà che si chiama "innerText"
// funziona in lettura! ...
console.log(titleOfThePage.innerText) // "DOM MANIPULATION"
// ...ma funziona anche in scrittura!
titleOfThePage.innerText = 'EPICODE!!!' // ri-assegnato il suo innerText a qualcos'altro!

// lavorare con le classi CSS dell'elemento
const firstParagraph = document.querySelector('article p') // primo paragrafo
firstParagraph.classList.add('ciao') // aggiungo una class="ciao" al primo paragrafo

const allTheParagraphs = document.querySelectorAll('article p') // un array di due elementi

// non fatevi prendere dalla tentazione di manipolare il DOM su un ARRAY DI ELEMENTI!
// le proprietà che abbiamo visto e che vedremo si applicano sugli ELEMENTI SINGOLI,
// se trovate un array di elementi grazie a getElementsByClassName, querySelectorAll etc.
// dovete CICLARE questi array, in modo da ottenere il SINGOLO ELEMENTO ad ogni ciclo!

// allTheParagraphs.classList.add('ciao') // <-- NON FUNZIONA
for (let i = 0; i < allTheParagraphs.length; i++) {
  allTheParagraphs[i].classList.add('ciao') // FUNZIONA!
}

firstParagraph.classList.remove('ciao') // tolgo il colore rosso dal primo paragrafo
// su classList c'è anche toggle, replace, etc.

// for (let i = 0; i < allTheParagraphs.length; i++) {
//   allTheParagraphs[i].classList.remove('ciao') // FUNZIONA!
// }

// possiamo anche inserire "al volo" degli inline-styles
// prendiamo il li con classe "main-link"
const anotherMainLink = document.getElementsByClassName('main-link')[0]
// <li class="main-link">Home</li>

anotherMainLink.style.fontSize = '1.5em'
anotherMainLink.style.opacity = '0.5'
// ricordatevi che non avrei potuto cambiare le proprietà dell'intero array!
// quando avete un array di elementi, o selezionate l'elemento singolo con un indice
// oppure, se volete ripetere l'operazione su TUTTI gli elementi dell'array
// lo dovete ciclare!

// facciamo una funzione per cambiare il colore del testo a TUTTI gli <li> della navbar
// creiamo una funzione per farlo!

const makeThemAllOrange = function () {
  // 1) selezioniamo gli elementi interessati
  const allTheListItems = document.querySelectorAll('#main-menu li')
  // 2) applichiamo ora il colore verde su TUTTI questi <li>
  // non posso farlo di colpo! stiamo lavorando con un array
  // dobbiamo CICLARE l'array
  for (let i = 0; i < allTheListItems.length; i++) {
    // ora so che allTheListItems[i] è un elemento, ovvero uno degli <li>
    allTheListItems[i].style.color = 'orange'
  }
}

// ma se non la invochiamo non succederà un bel niente :)
makeThemAllOrange()

const makeFooterInvisible = function () {
  // 1) seleziono l'elemento interessato
  const footerElement = document.getElementsByTagName('footer')[0]
  // [ <footer></footer> ]
  // footerElement è ora il tag <footer>
  footerElement.classList.toggle('invisible')
  // <footer class="invisible"></footer>
}

const changeAttribute = function () {
  const link = document.getElementById('first-link-element')
  link.setAttribute('href', 'www.epicode.com')
}

const addsANewLi = function () {
  // inserire un NUOVO elemento nella pagina è un'operazione a due step:
  // 1) creazione dell'elemento

  const newLiElement = document.createElement('li') // <li></li>
  // <li></li> <-- è vuoto! diamogli un contenuto testuale
  newLiElement.innerText = 'Lavora con noi!'
  // <li>Lavora con noi!</li>
  // ora l'elemento è completo, ma non esiste ancora nella pagina!

  // 2) inserimento dell'elemento nella pagina
  // un elemento va necessariamente inserito da qualche parte nella pagina
  // il metodo più classico da seguire, è selezionare nel DOM il suo contenitore
  // e "appendercelo" dentro

  // selezioniamo il suo futuro contenitore, la <ul> con id "main-menu"
  const parentList = document.getElementById('main-menu') // trovo il parent
  parentList.appendChild(newLiElement) // vi appendo dentro <li>Lavora con noi!</li>
  // <li>Lavora con noi!</li> finirà come ULTIMO elemento della lista!

  // makeThemAllOrange() // richiamo la funzione che rende tutti gli li arancioni
}

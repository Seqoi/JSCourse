const heading = document.getElementById('Hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2')[0]
const heading2 = document.querySelector('#sub-name') //Only 1 element
//And return first found element

//console.dir(heading2)

// const headinng3 = heading2.nextElementSibling
// console.log(headinng3)
const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length -1]



setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'blue','2rem')
}, 1500)
setTimeout(() => {
    addStylesTo(heading2, 'Practice', 'yellow','4rem')
}, 2000)
const link = heading3.querySelector('a')
addEventListener('click',(event) => {
    event.preventDefault()
    console.log('Click h3', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')
    window.location = url
})
setTimeout(() => {
    addStylesTo(link, "AND U'LL MASTER IT",'red',)
}, 2500)
function addStylesTo(node, text, color = 'red', fontSize = '5rem'){
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.widht = '100%'
    if (fontSize){
        node.style.fontSize = fontSize
    }
}
//https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
    console.log('click')
    if (heading.style.color === 'blue'){
        heading.style.color = 'black'
        heading.style.backgroundColor = "#FFFFFF"
    }else {
        heading.style.color = 'blue'
        heading.style.backgroundColor = "#000000"
    }
}

heading2.addEventListener('dblclick',() => {
    if (heading2.style.color === 'yellow'){
        heading2.style.color = 'black'
        heading2.style.backgroundColor = "#FFFFFF"
    }else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = "#000000"
    }
})

//heading3.
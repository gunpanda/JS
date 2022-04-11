const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2') [0]
// const heading2 = document.getElementsByClassName('h2-class') [0]
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello') // Всегда один эллемент 


console.dir(heading2);

// const heading3 = heading2.nextElementSibling
// console.log(heading3);

const h2List = document.querySelectorAll ('h2')
console.log(h2List);
const heading3 = h2List[h2List.length - 1]
console.log(heading3);

setTimeout( () => {
    addStyleLesTo(heading, 'JavaScript')
}, 1500 )

 const link = heading3.querySelector('a')
 link.addEventListener('click', (event) => {
     event.preventDefault()
          console.log('click on link', event.target.getAttribute('href'));
          const url = event.target.getAttribute('href')
          window.location = url
 })
setTimeout( () => {
    addStyleLesTo(link, 'Практикуйся', color = 'yellow')
}, 3000 )

setTimeout( () => {
    addStyleLesTo(heading2, 'И все получится', color = 'blue', fontSize = '2rem')
}, 4500 )

function addStyleLesTo(node, text, color ='red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%S'
    if(fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'black'  
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading.style.color === 'blue') {
        heading2.style.color = 'black'
        heading2.style.backgroundColor = 'white'
    } else {
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = 'black'
    }
})
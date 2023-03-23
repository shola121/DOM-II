import './less/index.less'

// Your code goes here!
console.log('Hello!!!')

// 1. Load
window.onload = function(evt) {
    console.log(`event ${evt.type}Set To Go!!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Set To Go!! '




// 2. Copy
window.addEventListener('copy', () => {
    navigator.clipboard.readText ()
    .then(text => {
        heading.textContent += text
    })
})

// 3. click
    document.body.addEventListener('click', evt =>{
        evt.target.classList.toggle('mirror')
    })

//4. dblclick
  document.body.addEventListener('dblclick', evt => {
    evt.target.innerHTML = ''
  })

  //5. keydown
   window.addEventListener('keydown', evt => {
    if(evt.key == 6) {
        document.body.innerHTML = 'Order 66'
    }
   })

   //6. mousemove
     document.body.addEventListener('mousemove', evt => {
        const {clientX, clientY} = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)
     })

     //7. focus
     const focus = document.querySelector('focus')
     document.body.addEventListener('focus', evt => {
        evt.target.innerHTML = ''
     })

     //8. Mouseenter
     const destination = document.querySelector('destination')
     destination.addEventListener('mouseenter', evt => {
        console.log('mouseenter activation')
        evt.target.style.backgroundColor = 'purple'
     })

     //9. Mouseleave
     const remove = document.querySelector('remove')
     remove.addEventListener('mouse', (document) => {
        document.target.style.backgroundColor = 'aqua'
     })


     //10. Wheel
     const wheel = document.querySelector('wheel')
     wheel.addEventListener('zoom', evt => {
        document.target.innerHTML = ''
     })
}

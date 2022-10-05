let cards = document.getElementById('cards');
let contador=0;



document.getElementById('agregar').addEventListener('click',()=>{
    contador++;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML+=
    `<div id="tarjeta${contador}" class="tarjeta">

        <h4 id='titulo' class='titulo'>Modulo ${contador}</h4>

        <p id="parrafo" class='parrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae iste laudantium pariatur, maxime rem dolore libero? Ipsum praesentium distinctio, et natus dolore adipisci provident, molestias assumenda nulla laborum impedit.</p>

        <button id="delete${contador}" class="delete" onclick="eliminar(event)">Delete</button>

    </div>`;
    cards.appendChild(card);

    
    
})



function eliminar(e){
    console.log(e.target);
    e.target.parentNode.remove();
  
    
}
 
    














//URL per API: https://lanciweb.github.io/demo/api/pictures///

const card= document.querySelectorAll(`.card`)
const container= document.querySelector(`.container`)

//Parte dell'overlay
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close-btn");



    fetch(`https://lanciweb.github.io/demo/api/pictures/`)
        .then(response => response.json())
        .then(data => {

            // codice per far qualcosa con la risposta
            console.log(data);


            // dove salvare le card
            container.innerHTML="";

            //aggiungere il ciclo for each per far passare tutte le carte
            
            data.forEach(element => {
                console.log(element)

                container.innerHTML += ` <div class="container">
       
            <div class="card" style="width: 18rem; display: block">
                <img src="${element.url}" class="card-img-top" alt="Immagine della carta">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.date}</p>
                <img src="./assets_day1/img/pin.svg" class="pin" alt="pin dell'immagine">
                </div>
            </div>
        </div>`

                
            });   

            //Aggiunta del click nell'overlay
            const imagesOverlay= document.querySelectorAll(".card-img-top")
            imagesOverlay.forEach(element=>{  //ciclare tuttle le immagini
                element.addEventListener(`click`,()=>{
                    overlayImg.src=element.src;
                    overlay.style.display = "flex"; //far in modo che l'overlay sia visibile
                })
            })
                         
        })
        .catch(error => {
            // codice da eseguire in caso di errore
            console.error(error);
        });
    
// Pulsante per chiudere l'overlay
closeBtn.addEventListener("click", () => {
    overlay.style.display= "none";
});



       

        
     
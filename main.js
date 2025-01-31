//URL per API: https://lanciweb.github.io/demo/api/pictures///

const card= document.querySelectorAll(`.card`)
const container= document.querySelector(`.container`)




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
        })
        .catch(error => {
            // codice da eseguire in caso di errore
            console.error(error);
        });
    

    
       
//Parte dell'overlay
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.getElementById("close-btn");

//Aggiunta del click nella card

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("card-img-top")) {
        overlayImg.src = event.target.src; // Imposta l'immagine dell'overlay
        overlay.style.visibility = "visible";
        overlay.style.opacity = "1";
        overlay.style.zIndex = "99999"; // Forza lo z-index per sicurezza
    }
});

// Pulsante per chiudere l'overlay
closeBtn.addEventListener("click", () => {
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
});

// Chiudere l'overlay cliccando fuori dall'immagine
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = "0";
    }
});
       

        
     
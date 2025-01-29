//URL per API: https://lanciweb.github.io/demo/api/pictures///

const card= document.querySelector(`.card`)
const container= document.querySelector(`.container`)



   

    fetch(`https://lanciweb.github.io/demo/api/pictures/`)
        .then(response => response.json())
        .then(data => {

            // codice per far qualcosa con la risposta
            console.log(data);

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
    
       
    

       

        
     
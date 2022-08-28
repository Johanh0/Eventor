// Search Const


// Cards Const
const resultSection = document.querySelector(`.result-section`);
// const cardImg = document.querySelector(`.card-img`);
// const cardTitle = document.querySelector(`.text-title`);
// const cardDescription = document.querySelector(`.text-body`);
// const cardPrice = document.querySelector(`.text-price`);

// API Client ID
const clientId = `Mjg2MTA4MDN8MTY2MTIxMjIzMS41NDk3NjAz`;

// Events Listeners




// Functions
// Local events it's the function default, this function runs when the app it's open and it search events on your location

function localEvents () {
    fetch(`https://api.seatgeek.com/2/events?geoip=true&client_id=${clientId}&per_page=50&page=3&sort=score.desc`).then( (response) => {

        return response.json();
    }).then( (data) => {

        console.log(data);

        for ( let i = 0; i < 15; i++ ) {
            //Create Elements
            const card = document.createElement(`div`);
            const cardImg = document.
            createElement(`div`);
                const img = document.createElement(`img`);
            const cardInfo = document.createElement(`div`);
                const textTitle = document.createElement(`p`);
                    const cardTextInfo = document.createElement(`div`);
                    const textBody = document.createElement(`p`);
                    const textDate = document.createElement(`p`);
            const cardFooter = document.createElement(`div`);
                 const textPrice = document.createElement(`span`);
                 const cardLocation = document.createElement(`div`)
                    const textState = document.createElement(`span`);
                    const textAddress = document.createElement(`span`);

            // Adding Classes
            card.classList.add(`card`);
            cardImg.classList.add(`card-img`);
                img.classList.add(`img`);
            cardInfo.classList.add(`card-info`);
                textTitle.classList.add(`text-title`);
                    cardTextInfo.classList.add(`card-text_info`)
                        textBody.classList.add(`text-body`);
                        textDate.classList.add(`text-date`);
            cardFooter.classList.add(`card-footer`);
                textPrice.classList.add(`text-title`, `text-price`);
                cardLocation.classList.add(`card-location`);
                    textState.classList.add(`text-title`, `text-state`);
                    textAddress.classList.add(`text-address`);

            // appendChild
            resultSection.appendChild(card);
                card.appendChild(cardImg);
                    cardImg.appendChild(img);
                card.appendChild(cardInfo);
                    cardInfo.appendChild(textTitle);
                    cardInfo.appendChild(cardTextInfo);
                        cardTextInfo.appendChild(textBody);
                        cardTextInfo.appendChild(textDate);
                card.appendChild(cardFooter);
                    cardFooter.appendChild(textPrice);
                    cardFooter.appendChild(cardLocation);
                        cardLocation.appendChild(textState);
                        cardLocation.appendChild(textAddress);

            // Printing Data
            // Img
            img.src = data.events[i].performers[0].image;

            // Title
            textTitle.innerText = data.events[i].performers[0].short_name;

            // Text Info
            textPrice.innerText = `$ ${data.events[i].stats.lowest_price}`;
            textBody.innerText = data.events[i].taxonomies[0].name;
            textDate.innerText = data.events[i].datetime_local;

            // Text Price & Location
            textState.innerText = data.events[i].venue.display_location;
            textAddress.innerText = data.events[i].venue.address;

            // console.log(data.events[i].performers[0].image);
        }
    })
}

localEvents();
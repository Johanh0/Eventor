// Global Const
const htmlWindow = document.querySelector(`html`);


// Search Const
const inputEvent = document.querySelector(`.input-event`);
const inputState = document.querySelector(`.input-city`);
const inputDate = document.querySelector(`.input-month`);
const btnSearch = document.querySelector(`.btn-search`);

// Cards Const
const resultSection = document.querySelector(`.result-section`);
const cardsContainer = document.querySelector(`.cards-container`);
let firstSearch = false;

// Alert Const
let alertStatus = false;
const alertSection = document.querySelector(`.alert-section`);
const closeBtn = document.querySelector(`.btn-close`);

// API Client ID
const clientId = `Mjg2MTA4MDN8MTY2MTIxMjIzMS41NDk3NjAz`;

// Events Listeners
// Event for search events
btnSearch.addEventListener(`click`, searchEvents);

// Evenet for close the alert messege
closeBtn.addEventListener(`click`, alertWindow);



// Functions
// Local events, it's the function default, this function runs when the app it's open and it search events on your location.

function localEvents () {
    // Calling the API
    fetch(`https://api.seatgeek.com/2/events?geoip=true&client_id=${clientId}&per_page=50&page=3&sort=score.desc`).then( (response) => {

        return response.json();
    }).then( (data) => {

        // Function for create and display the cards on the screen
        cardsDisplay(data);
    })
}

localEvents();

// Search events, it's the function that it's going to work with the search section, this functon runs a search to bring specifics events.

function searchEvents () {
    // Making sure the inputs are filled
    if ( inputEvent.value === `` || inputState === `` || inputDate === `` ) {
        // Cleaning the inputs values
        inputEvent.value = ``;
        inputState.value = ``;
        inputDate.value = ``;

        // Calling the alert window to pop up
        alertWindow();

    }else {

        // // Making the inputs lower case
        inputEvent.value.toLowerCase()
        inputState.value.toLowerCase()

        // Calling the API for get the spicific data
        fetch(`https://api.seatgeek.com/2/events?taxonomies.name=${inputEvent.value}&venue.state=${inputState.value}&datetime_utc.lte=${inputDate.value}&client_id=${clientId}&per_page=50&page=3&sort=score.desc`).then( (response) => {

            return response.json();
        }).then( (data) => {

            console.log(data);
            newCardsDisplay(data);
        })

        // Cleaning the inputs values
        inputEvent.value = ``;
        inputState.value = ``;
        inputDate.value = ``;

    }
};

function cardsDisplay (data) {
    for ( let i = 0; i < 9; i++ ) {
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
        cardsContainer.appendChild(card);
        // resultSection.appendChild(card);
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
    }
}

// Second call for new searchs

function newCardsDisplay (data) {
    // Remove old cards container with the cards
    if ( firstSearch === false ) {
        resultSection.removeChild(cardsContainer);
    } else {
        const deleteCard = document.querySelector(`.cards-container`);
        resultSection.removeChild(deleteCard);
    };

    // Create the new cards container
    let newCardsContainer = document.createElement(`div`);
    newCardsContainer.classList.add(`cards-container`);
    resultSection.appendChild(newCardsContainer);

    //Creating the new cards with the function cardsDisplay
    for ( let i = 0; i < 9; i++ ) {
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
        newCardsContainer.appendChild(card);
        // resultSection.appendChild(card);
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

        firstSearch = true;
    }
}

// Alert function, this alert it's going to pop up when it'a an error

function alertWindow () {

    if ( alertStatus === false ){
        // The code it's making appear the messege if the alert status it's false, that menas if it's not there
        alertSection.style.display = `flex`;
        alertSection.style.position = `absolute`;
        htmlWindow.style.overflow = `hidden`;

        alertStatus = true;
    } else if ( alertStatus === true ) {
        // The code it's making disappear the messege if the alert it's true, that's mean if it's there
        alertSection.style.display = `none`;
        alertSection.style.position = `none`;
        htmlWindow.style.overflow = `scroll`;

        alertStatus = false;
    };
};


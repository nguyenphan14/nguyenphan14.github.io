let roomId = sessionStorage.getItem('roomId').split(",");
let detail = roomId[roomId.length-1];
const containerImg = document.getElementById('container-img');
let data = details.filter((room) => {
    return room.id === detail;
})
renderDetail(data[0]);
renderImg(data[0]);
renderHost(data[0]);
renderNote(data[0])
function renderDetail(room) {
    document.querySelector('#room-price > span').textContent = `${room.details.price.value*1000000}`;
    document.querySelector('#room-area > span').textContent = `${room.details.area} m²`;
    document.querySelector('#room-deposit > span').textContent = `${room.details.deposit}`;
    document.querySelector('#room-capacity > span').textContent = `${room.details.capacity} người`;
    document.querySelector('#room-electric > span').textContent = `${room.details.additionalFee.electric.value}k\\${room.details.additionalFee.electric.unit}`;
    document.querySelector('#room-water > span').textContent = `${room.details.additionalFee.water.value}k\\${room.details.additionalFee.water.unit}`;
    document.querySelector('#room-other_fee > span').textContent = `${room.details.additionalFee.other}`;
    document.querySelector('#room-address > span').textContent = `Đường ${room.address.street}, phường ${room.address.ward.text} - ${room.address.district.text} - ${room.address.city.text}`;
    if(room.utils.airConditioner === false) {
        document.querySelector('#room-air_conditioner').style.display = 'none';
    }
    if(room.utils.bathroom === false) {
        document.querySelector('#room-bathroom').style.display = 'none';
    }
    if(room.utils.parkingArea === false) {
        document.querySelector('#room-parking_area').style.display = 'none';
    }
    if(room.utils.wifi === false) {
        document.querySelector('#room-wifi').style.display = 'none';
    }
    if(room.utils.liveWithOwner === false) {
        document.querySelector('#room-owner_living').style.display = 'none';
    }
    if(room.utils.fridge === false) {
        document.querySelector('#room-fridge').style.display = 'none';
    }
    if(room.utils.washingMachine === false) {
        document.querySelector('#room-washing_machine').style.display = 'none';
    }
    if(room.utils.waterHeater === false) {
        document.querySelector('#room-water_heater').style.display = 'none';
    }
    if(room.utils.bed === false) {
        document.querySelector('#room-bed').style.display = 'none';
    }
    if(room.utils.closet === false) {
        document.querySelector('#room-closet').style.display = 'none';
    }
    if(room.utils.petsAllowed === false) {
        document.querySelector('#pet_allowed').style.display = 'none';
    }
    if(room.utils.garret === false) {
        document.querySelector('#room-garret').style.display = 'none';
    }
    if(room.utils.window === false) {
        document.querySelector('#room-window').style.display = 'none';
    }
    if(room.utils.balcony === false) {
        document.querySelector('#room-balcony').style.display = 'none';
    }
    if(room.utils.cookingAllowed === false) {
        document.querySelector('#room-cooking_allowed').style.display = 'none';
    }
    
}


/* Images modal */

function renderModal(event) {
    let modal = document.querySelector(`.${event.target.id}`);
    modal.style.display = 'block';
    console.log(modal);
    let closeBtns = document.getElementsByClassName('close-btn');
    for(let btn of closeBtns) {
        btn.addEventListener('click', () => {
            modal.style.display = 'none';
        })
    }
}

/* render img */


console.log(containerImg);

function renderImg(room) {
    for(let i = 0; i < room.images.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = `
        <a href="${room.images[i]}" data-lightbox="image-1">
            <img id="img-${i}"class="img-fluid p-1 room-img" src="${room.images[i]}">
        </a>
        <div class="modal img-${i}">
            <span class="close-btn">&times;</span>
            <div class="modal-content row">
                <img class="modal-img justify-content-center" src="${room.images[i]}">
            </div>
        </div>
        `
        containerImg.append(div);
    }
}

/* Render Host */

function renderHost(room) {
    const host = document.getElementById('host-info');
    let div = document.createElement('div');
    div.innerHTML = `
        <p class="text-secondary font-weight-bold">Chủ trọ:  ${room.owner.name}</p>
        <p class="text-secondary font-weight-bold">SĐT:  ${room.owner.phoneNumber}</p>
    `
    host.append(div);
}

function renderNote(room) {
    const note = document.getElementById('room-note');
    note.innerHTML = `
        ${room.details.note.replace(/\n/gi, '<br>')}
    `
}
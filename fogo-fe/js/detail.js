let roomId = localStorage.getItem('roomId').split(",");
let detail = roomId[roomId.length-1];

let data = details.filter((room) => {
    return room.id === detail;
})
renderDetail(data[0]);

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


const roomList = document.querySelector('#room-card');
const seenRooom = [];
for(let i = 0; i < 5; i++) {
    renderRoom(roomData.data[i]);
}
addAllBtn();

document.querySelector('.all-btn').addEventListener('click', (event) => {
    for(let i = 5; i < roomData.data.length; i++) {
        renderRoom(roomData.data[i]);
    }
    event.target.style.display = 'none';
})

function addAllBtn() {
    let div = document.createElement('div');
    let a = document.createElement('a');
    div.className = 'text-center card-text';
    a.className = 'all-btn card-text';
    a.textContent = 'Xem tất cả';
    div.appendChild(a);
    roomList.append(div);
}

function getDetail() {
    let detail = this.id;
    seenRooom.push(detail);
    sessionStorage.setItem('roomId', seenRooom);
}

function renderRoom(room) {
    let a = document.createElement('a');
    let div = document.createElement('div');
    div.className = 'border-top my-3';
    a.className = 'row room-preview';
    a.id = room.id;
    a.href = "room.html";
    a.addEventListener('click', getDetail);
    a.innerHTML = `
        <div class="col-md-4">
        <img class="room-thumbnail" src="${room.image}">
        </div>
        <div class="col-md-8 text-dark">
            <h4>${room.name}</h4>
            <div class="row">
                <div class="col-9">
                    <div class="row text-black-50">
                        <div class="col-12">
                            <i class="fas fa-house-user text-icon"></i>
                            <span> ${room.type}</span>
                        </div>
                        <div class="col-md-6">
                            <i class="fas fa-ruler text-icon"></i>
                            <span> ${room.area} m²</span>
                        </div>
                        <div class="col-12">
                            <i class="fas fa-venus-mars text-icon"></i>
                            <span> ${room.gender === "any"? "Nam & Nữ": room.gender}</span>
                        </div>
                        <div class="col-12">
                            <i class="fas fa-map-marker-alt text-icon"></i>
                            <span> ${room.address}</span>
                        </div>
                    </div>
                </div>
                <div class="col-3 text-center text-fogo">
                    <h2>${ room.price/1000000}</h2>
                    <span class="small">tr/tháng</span>
                </div>
            </div>
        </div>
    `
    roomList.append(a);
    roomList.append(div);
}
// Constainer
let container = 
document.querySelector('.container-fluid');
// Create a getData() function
async function getData() {
    let res = await fetch('https://randomuser.me/api?results=3');
    let data = res.json();
    return data;
}

async function displayData() {
    let data = await getData();
    data.results.forEach( (item, index) => {
    container.innerHTML += 
        `
        <div class="card" style="width: 18rem;" id="${index}">
            <img src="${item['picture'].large}" class="card-img-top" alt="Profile">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <ul class='list-group d-inline' id='groupList'>
                    <li class="btn btn-primary" id='about' onmouseover="setData('Name', '${item['name'].first}', ${index})">
                    <i class="bi bi-file-person"></i>
                    </li>
                    <li class="btn btn-primary" id='email' onmouseover="setData('Email', '${item['email']}', ${index})"><i class="bi bi-envelope"></i></li>
                    <li class="btn btn-primary" id='dob' onmouseover="setData('Date Of Birth', '${item['dob'].date}', ${index})"><i class="bi bi-calendar-date"></i></li>
                    <li class="btn btn-primary" id='country' onmouseover="setData('Country', '${item['location'].country}', ${index})"><i class="bi bi-cup-fill"></i></li>
                    <li class="btn btn-primary" id='phone-number' onmouseover="setData('Phone Number', '${item['phone']}', ${index})"><i class="bi bi-telephone-minus"></i></li>
                </ul>
            </div>
        </div>
        `;

    });
}
// Calling a function
displayData().catch(e => {
    console.error(e.message);
});
// Set Data
function setData(key, value, index) {
    switch(index) {
        case 0:
            document.querySelectorAll('.card .card-title')[0].textContent = 
            `My ${key} is`;
            document.querySelectorAll('.card .card-text')[0].textContent = value;
        break
        case 1:
            document.querySelectorAll('.card .card-title')[1].textContent = 
            `My ${key} is`;
            document.querySelectorAll('.card .card-text')[1].textContent = value;
        break
        case 2:
            document.querySelectorAll('.card .card-title')[2].textContent = 
            `My ${key} is`;
            document.querySelectorAll('.card .card-text')[2].textContent = value;
        break
    }
}



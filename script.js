// const h1 = document.getElementById("h1");
// const vaqt = new Date () .getMinutes();
// h1.innerHTML = vaqt


const dataget = document.getElementById("h1");
let vaqt = new Date("February 28, 2025 12:00:00") .getTime();
function udapdeCountdown() {
    let HozirgiVaqt = new Date().getTime();
    const ditance =vaqt - HozirgiVaqt;
    const days = Math.floor(ditance / (1000*60*60*24));
    const hours = Math.floor((ditance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((ditance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((ditance % (1000*60)) / 1000);
    dataget.innerHTML = ` <div class="item">
            <p>Kun</p>
            <h1 id="h1">${days}</h1>
        </div>
        <div class="item">
            <p>Soat</p>
            <h1 id="h1">${hours}</h1>
        </div>
        <div class="item">
            <p>Minut</p>
            <h1 id="h1">${minutes}</h1>
        </div>
        <div class="item">
            <p>Second</p>
            <h1 id="h1">${seconds}</h1>
        </div>`
    console.log(vaqt);
}
const interval = setInterval(udapdeCountdown, 1000);
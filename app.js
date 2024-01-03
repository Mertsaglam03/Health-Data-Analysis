

const toggleNav =document.querySelector('.toggle-nav')
const sidebarOverlay = document.querySelector('.sidebar-overlay')
const closeBtn = 
document.querySelector('.sidebar-close')
const graphContainer = document.querySelector('.graph-container')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
document.addEventListener('DOMContentLoaded', function () {
    console.log('mert');
});

toggleNav.addEventListener('click', () =>{
    sidebarOverlay.classList.add('show')
})
closeBtn.addEventListener('click', () =>{
    sidebarOverlay.classList.remove('show')
})
let initNum = 0;
const graphInfo = [
    {
        info: "In 2016 data we can see that there is not much of an difference between school and holiday months this is because the workload hasn't started yet.",
        imgNo:2016
    },
    {
        info: "In 2017 this difference becomes much more imminent because we can see that during the spring time the steps I took is way less than steps I took during the summer and during december because of the semester holiday I was again more active.",
        imgNo:2017
    },
    {
        info: "In 2018 the graph is really similar to 2017 again spring time is not active summer is extremely active and fall is not active as well the semester holiday again more than many months in the school period.",
        imgNo:2018
    },
    {
        info: "In 2019 again we see a pattern where summer is by far the most active and times like spring or early fall where the weather is still nice has the least amount of activeness.",
        imgNo:2019
    },
    {
        info: "I do not have my 2020 data due to the pandemic but in 2021 due to most of the school being online and me having the university entrance exams there is nothing that proves my point and also I was in prepatory school so there was not much of an workload.",
        imgNo:2021
    },
    {
        info: "2022 was a weird year to prove my hypothesis beacuse there was alot of external factors that inflate the statistics about this graph. I had to use public transportation for the whole year and the road was 3 hours long for me so the walking distance increased as it should but this was not because my workload was high even with this my walking distance during school cannot catch-up to summer.",
        imgNo:2022
    },
    {
        info: "In 2023 because I had an vehicle the data is more precise summer times are again most active but june is starting fall beacuse of the final exams again an effect that we can see clearly. The winter and the spring times are lowest because of the workload in both terms.",
        imgNo:2023
    },
]
window.addEventListener('DOMContentLoaded', function () {

    const item = graphInfo[initNum];
   
});
setInterval(()=>{
    const item = graphInfo[initNum];
    initNum++;
    if(initNum == 6){
        initNum = 0;
    }
    updateGraphInfo();
},10000)
leftBtn.addEventListener('click', ()=>{
    console.log(3);
})
leftBtn.addEventListener('click', () => {

    console.log('Left button clicked');
    initNum = (initNum - 1 + graphInfo.length) % graphInfo.length;
    updateGraphInfo();
});

rightBtn.addEventListener('click', () => {
    console.log('Right button clicked');
    initNum = (initNum + 1) % graphInfo.length;
    updateGraphInfo();
});


function updateGraphInfo() {
    graphContainer.classList.add('transition-effect');
    graphContainer.innerHTML = `
        <button class="left">
            <i class="fas fa-arrow-left"></i>
        </button>
        <div class="graph-info">
            <img src="./images/${graphInfo[initNum].imgNo}.png" alt="img" 
            width="80%" height="400px">
            <p class="graph-title">Lets Explore my Step Count based on years</p>
            <p>${graphInfo[initNum].info}</p>
        </div>
        <button class="right">
            <i class="fas fa-arrow-right"></i>
        </button>`;
        void graphContainer.offsetWidth;

    // Remove the transition class after the transition is complete
    setTimeout(() => {
        graphContainer.classList.remove('transition-effect');
    }, 500);
}

updateGraphInfo();
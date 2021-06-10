const skills = [
    {name:'PYTHON', amount:75, link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'PYTHON + DJANGO', amount:55, link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'DJANGO + REST', amount:25, link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'CSS', amount:75, link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'JAVASCRIPT', amount:30, link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'SVG and RASTER', amount:40, link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'UI UX', amount:35,link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'GIT', amount:25, link:"https://boyedandtoyed.github.io/Medata/"},
    {name:'LIVING LIFE', amount:1, link:"https://boyedandtoyed.github.io/Medata/"}
]

const numberOfstates = 6;

const ranges = [
    100/numberOfstates,
    100/numberOfstates *2,
    100/numberOfstates *3,
    100/numberOfstates*4,
    100/numberOfstates*5,
    100/numberOfstates*6,
];

const states= [
 {value_ranges:[0, ranges[0]], state:'Beginner'},
 {value_ranges:[ranges[0] ,ranges[1]], state:'Newbie'},
 {value_ranges:[ranges[1]+0.01 ,ranges[2]], state:'Junior'},
 {value_ranges:[ranges[2]+0.01 ,ranges[3]], state:'Moderate'},
 {value_ranges:[ranges[3]+0.01 ,ranges[4]], state:'Senior'},
 {value_ranges:[ranges[4]+0.01 ,ranges[5]], state:'Expert'},
]


function returnState(amount){
    for (var i=0; i< numberOfstates; i++){
    state = states[i]
    let value_range = state['value_ranges'];
    if ((amount >= value_range[0]) && (amount <= value_range[1])){
    return state['state'];
        
    }
     
 }
}

// ----selecting the meter side----
var rightaside = document.querySelector('.skills')

function redirect(e){
redirectTo = e.target.getAttribute('to')
window.location = redirectTo; 
}

skills.forEach((skill) => {
    //create div.meter
    let div  = document.createElement('div');
    div.classList.add('meter');
    div.setAttribute('tabindex',"0");
   

    let meter = document.createElement('span')
    meter.style.setProperty('--bgWidth', skill['amount'] +'%');
    meter.setAttribute('to',skill['link']);
    meter.setAttribute('target',"_blank");
    meter.addEventListener('click',redirect);
    div.appendChild(meter);

    let h3 = document.createElement('h3');
    h3.innerHTML = skill['name'];
    div.appendChild(h3);

    let p = document.createElement('p');
    p.classList.add('level');
    p.innerHTML = returnState(skill['amount']) +" " + Math.floor(skill['amount'])+"%"
    div.appendChild(p);


    rightaside.appendChild(div);
});
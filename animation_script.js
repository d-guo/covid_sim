let width = window.innerWidth;
let height = window.innerHeight;

let N = 1000; // population size
let p = 0.1 // probability of contracting disease from an encounter with an infected person
let radius = 5;

let people = [];

class Person {
    constructor(infected_status, x, y) {
        this.health_status = infected_status;
        this.x = x;
        this.y = y;
    }
}

// initialize population of person objects
function init() {
    let canvas = document.getElementById("cw");
    let ctx = canvas.getContext("2d");
    for (let i = 0; i < N; i++) {
        people.push(new Person(Math.random() < 0.5 ? "uninfected" : "infected", Math.floor(Math.random() * width), Math.floor(Math.random() * height)));
    }
    anim();
}

let i = 0
// run animation and changes per time interval
function anim() {
    i++;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let canvas = document.getElementById("cw");
    let ctx = canvas.getContext("2d");

    ctx.canvas.width = width;
    ctx.canvas.height = height;

    ctx.clearRect(0, 0, width, height); // clear canvas
    
    for (let j = 0; j < N; j++) {
        // move people
        people[j].x += Math.floor(Math.random() * 5) - 2;
        people[j].y += Math.floor(Math.random() * 5) - 2;

        ctx.beginPath();
        ctx.arc(people[j].x, people[j].y, radius, 0, 2 * Math.PI, false);
        if (people[j].health_status == "uninfected") {
            ctx.strokeStyle = 'blue';
        }
        else if (people[j].health_status == "infected") {
            ctx.strokeStyle = 'red';
        }
        else {
            ctx.strokeStyle = 'green';
        }
        
        ctx.stroke();
    }

    console.log('ok');
    window.requestAnimationFrame(anim);
}

init();
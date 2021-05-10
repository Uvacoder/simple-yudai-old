let navWrapper = document.querySelector('.nav-wrapper'),
    navToogler =  document.querySelector('.nav-toogler');

if(navToogler){
    navToogler.addEventListener('click', function () {
        navWrapper.classList.toggle('active')
    });
}

//Hover nav items
let link = document.querySelectorAll('.link-move');

let scaleLink = () => {
    anime({
        targets: link,
        scale: 1.2,
        delay: 1000,
        easing: 'easeInOutQuad'
    });
};

scaleLink();

let hoverLink1 = document.querySelector('#l1');

if (hoverLink1){
    hoverLink1.addEventListener('mouseover',function() {
        anime({
            targets: hoverLink1,
            translateY: 8,
        });
    });

    hoverLink1.addEventListener('mouseout',function() {
        anime({
            targets: hoverLink1,
            translateY: 0,
        });
    });
}

let hoverLink2 = document.querySelector('#l2');

if (hoverLink2){
    hoverLink2.addEventListener('mouseover',function() {
        anime({
            targets: hoverLink2,
            translateY: 8,
        });
    });

    hoverLink2.addEventListener('mouseout',function() {
        anime({
            targets: hoverLink2,
            translateY: 0,
        });
    });
}


let hoverLink3 = document.querySelector('#l3');

if (hoverLink3){
    hoverLink3.addEventListener('mouseover',function() {
        anime({
            targets: hoverLink3,
            translateY: 8,
        });
    });

    hoverLink3.addEventListener('mouseout',function() {
        anime({
            targets: hoverLink3,
            translateY: 0,
        });
    });
}


let hoverLink4 = document.querySelector('#l4');

if (hoverLink4){
    hoverLink4.addEventListener('mouseover',function() {
        anime({
            targets: hoverLink4,
            translateY: 8,
        });
    });

    hoverLink4.addEventListener('mouseout',function() {
        anime({
            targets: hoverLink4,
            translateY: 0,
        });
    });
}



//Intro Page animations

//banner animation


if (window.innerWidth > 800){
    const banner = () => {
        anime({
            targets: '.wrapper-name',
            height: 300,
            backgroundColor: '#011d57',
            //easing: 'easeInOutQuart'
        });
    };
    banner();
}

if (window.innerWidth < 800){
    const banner = () => {
        anime({
            targets: '.wrapper-name',
            height: 100,
            backgroundColor: '#011d57',
        });
    };

    banner();
}







const wrapperName = document.querySelector('.wrapper-name');

if(wrapperName){
    wrapperName.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.3,
        })

    });

    wrapperName.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1,
        })

    });
}


//Hover name
const id = document.querySelector('.id');

const mouseOutId = () => {
    anime({
        targets: id,
        translateY: 0,
        loop: false
    });
};

const mouseHoverId = () => {
    anime({
        targets: id,
        translateY: 15,
    });
};

if(id){
    id.addEventListener('mouseover', mouseHoverId);
    id.addEventListener('mouseout', mouseOutId);
}


//Blocks floating around
const container = document.querySelector('.container');
if(container){
    for(let i = 0; i <=100; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        container.appendChild(block)
    }

//floating blocks
    function blockAnimate(){
        anime({
            targets: '.block',
            translateX: function () {
                return anime.random(-700,700);
            },
            translateY: function () {
                return anime.random(-220,270);
            },
            //easing: 'easeInCubic',
            duration: 3000,
            rotate: 360,
            easing: 'spring(10, 100, 10, 0)',
            delay: anime.stagger(10),
            complete: function Move () {
                anime({
                    targets: '.block',
                    translateX:function () {
                        return anime.random(-700, 700);
                    },
                    translateY:function () {
                        return anime.random(-220, 250);
                    },
                    easing: 'easeInOutQuint',
                    duration: 7000,
                    complete:Move
                })
            }
        })
    }

    blockAnimate();
}


//Hover blocks
let blocks = document.querySelectorAll('.block');

if(blocks){
    function hoverBlocks(el, scale, rotate){
        anime({
            targets: el,
            scale: scale,
            rotate: rotate
        });
    }

    function hoverB(el){
        hoverBlocks(el, 1.3, 360)
    }

    function outB(el){
        hoverBlocks(el, 1,0)
    }

    for (let i = 0; i < blocks.length; i++){
        blocks[i].addEventListener('mouseover', function (e) {
            hoverB(e.target);
        },false);

        blocks[i].addEventListener('mouseout', function (e) {
            outB(e.target);
        },false);
    }
}


//Intro Page SVG animation
let eye1 = document.getElementById('line-eye-1');
let eye2 = document.getElementById('line-eye-1-2');

const eyesFlicker = () => {
    anime({
        targets: eye1,
        width: [10.77, 2],
        easing: 'linear',
        direction: 'alternate',
        loop: true,
        delay: 1500,
        begin: () => {
            anime({
                targets: eye2,
                width: [10.77, 2],
                easing: 'linear',
                direction: 'alternate',
                loop: true,
                delay: 1500,
            })
        }
    })
};

eyesFlicker();

let colorSquare1 = document.getElementById('color-square-1Y');
let squareShadow1 = document.getElementById('square-shadow-1Y');

let colorSquare2 = document.getElementById('color-square-2Y');
let squareShadow2 = document.getElementById('square-shadow-2Y');

const intro = () => {
    anime({
        targets: colorSquare1,
        rotate: 180,
        duration: 2000,
        loop: true,
        easing: 'linear',
        begin: () => {
            anime({
                targets: squareShadow1,
                rotate: 180,
                duration: 2000,
                loop: true,
                easing: 'linear',
                begin: () => {
                    anime({
                        targets: colorSquare2,
                        rotate: 180,
                        duration: 2000,
                        loop: true,
                        easing: 'linear',
                        begin: () => {
                            anime({
                                targets: squareShadow2,
                                rotate: 180,
                                duration: 2000,
                                loop: true,
                                easing: 'linear'
                            })
                        }
                    })
                }
            })
        }
    })
};

intro();


let arm = document.querySelector('.whole-arm');
let colorCircle = document.getElementById('color-circleY');

const timeLine = () => {
    let tl = anime.timeline({
        loop: 1,
    });
    tl
        .add({
            targets: arm,
            rotate:[
                { value: 0},
                { value: -85, duration: 1500},
                {value: -95, duration: 500, delay: 1000},
                {value: 0, duration: 1500, delay: 2000}
            ],
            duration: 3500,
            easing: 'linear'
        }).add({
        targets: colorCircle,
        translateX:[
            {value: -70, duration: 500},
            {value: 5, duration: 500, delay: 1000}
        ],
        translateY:[
            {value: 35, duration: 500},
            {value: -5, duration: 500, delay: 1000}
        ],

        easing: 'spring'
    }, '-=5000')
};

timeLine();




//About Page animations

//card flip
let card = document.querySelector(".card");
let playing = false;

let arrowP = document.querySelector('.arrow-p');
let squareGroup = document.querySelector('.square-group');
let lineGroup = document.querySelector('.line-group');
let squareP = document.querySelector('.square');
let personP = document.querySelector('.person');
let baseP = document.getElementById('base');


if(card){
    card.addEventListener('click',function() {
        if(playing)
            return;

        playing = true;
        anime({
            targets: card,
            scale: [{value: 1}, {value: 1.5}, {value: 1, delay: 250}],
            rotateY: {value: '+=180', delay: 200},
            easing: 'easeInOutSine',
            duration: 400,
            complete: function(anim){
                playing = false;
            },
        });
    });
}

if (card){
    card.onclick = function () {
        anime({
            targets: squareGroup,
            translateX: 50,
            begin: () => {
                anime({
                    targets: arrowP,
                    translateX: 50,
                    begin: () => {
                        anime({
                            targets: lineGroup,
                            translateX: 50,
                            begin: () => {
                                anime({
                                    targets: personP,
                                    translateX: 50,
                                    begin: () => {
                                        anime({
                                            targets: squareP,
                                            translateX: 50,
                                            begin: () => {
                                                anime({
                                                    targets: baseP,
                                                    translateX: 50,
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    };
}


//Click me animation
const clickMe = () => {
    anime({
        targets: '.click-me',
        translateY: 10,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
    });
};

clickMe();

let click = document.querySelector('.click');

let clickScale = () => {
    anime({
        targets: click,
        scale: 2,
        color: '#eead0e',
        delay: 1000
    })
};

clickScale();





//Contact Page animations
let box1 = document.querySelector('#box1');

if(box1){
    box1.addEventListener('mouseover',function() {
        anime({
            targets: box1,
            scale: 1.3
        });
    });

    box1.addEventListener('mouseout',function() {
        anime({
            targets: box1,
            scale: 1
        });
    });
}


let box2 = document.querySelector('#box2');

if(box2){
    box2.addEventListener('mouseover',function() {
        anime({
            targets: box2,
            scale: 1.3
        });
    });

    box2.addEventListener('mouseout',function() {
        anime({
            targets: box2,
            scale: 1
        });
    });

}


let box3 = document.querySelector('#box3');

if(box3){
    box3.addEventListener('mouseover',function() {
        anime({
            targets: box3,
            scale: 1.3
        });
    });

    box3.addEventListener('mouseout',function() {
        anime({
            targets: box3,
            scale: 1
        });
    });
}



let box4 = document.querySelector('#box4');

if(box4){
    box4.addEventListener('mouseover',function() {
        anime({
            targets: box4,
            scale: 1.3
        });
    });

    box4.addEventListener('mouseout',function() {
        anime({
            targets: box4,
            scale: 1
        });
    });

}

let socialMedia = document.querySelector('.social_media');

if(socialMedia){
    socialMedia.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1
        });

    });

    socialMedia.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1
        });

    });
}


let contact = document.querySelector('.contact');

if(contact){
    contact.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1
        });

    });

    contact.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1
        });

    });

}

//Contact SVG animations
let girlBody = document.querySelector('.girl-body');
let background3 = document.getElementById('background-3');
let colorCircle2 = document.getElementById('color-circle-2');
let verified2 = document.getElementById('verified-2');


const revealGirl = () => {
    anime({
        targets: background3,
        scale: [0, 1.2],
        delay: 1000,
        begin:() => {
            anime({
                targets: girlBody,
                scale: [0, 1.2],
                delay: 1200,
                begin:() => {
                    anime({
                        targets: colorCircle2,
                        scale: [0, 1.2],
                        delay: 1400,
                        begin:() => {
                            anime({
                                targets: verified2,
                                scale: [0, 1.2],
                                delay: 1600,
                            })
                        }
                    });
                }
            });
        }
    });
};


revealGirl();


let guy2Body = document.querySelector('.guy2-body');
let background2 = document.getElementById('background-2');
let colorCircle3 = document.getElementById('color-circle-3');
let verified3 = document.getElementById('verified-3');

const revealGuy2 = () => {
    anime({
        targets: background2,
        scale: [0, 1.2],
        delay: 1000,
        begin:() => {
            anime({
                targets: guy2Body,
                scale: [0, 1.2],
                delay: 1200,
                begin:() => {
                    anime({
                        targets: colorCircle3,
                        scale: [0, 1.2],
                        delay: 1400,
                        begin:() => {
                            anime({
                                targets: verified3,
                                scale: [0, 1.2],
                                delay: 1600,
                            })
                        }
                    });
                }
            });
        }
    });
};


revealGuy2();



let guy1Body = document.querySelector('.guy1-body');
let background1 = document.getElementById('background-1');
let colorCircle1 = document.getElementById('color-circle-1');
let verified1 = document.getElementById('verified-1');



const revealGuy1 = () => {
    anime({
        targets: background1,
        scale: [0, 1.2],
        delay: 1000,
        begin:() => {
            anime({
                targets: guy1Body,
                scale: [0, 1.2],
                delay: 1200,
                begin:() => {
                    anime({
                        targets: colorCircle1,
                        scale: [0, 1.2],
                        delay: 1400,
                        begin:() => {
                            anime({
                                targets: verified1,
                                scale: [0, 1.2],
                                delay: 1600,
                            })
                        }
                    });
                }
            });
        }
    });
};


revealGuy1();


let indicator1 = document.getElementById('indicator-1');
let indicator2 = document.getElementById('indicator-2');

const indicatorMove = () => {
    anime({
        targets: indicator1,
        translateX: [
            { value: 60, duration: 1000, delay: 500 },
            { value: 0, duration: 1000, delay: 500 }
        ],
        scale: [
            { value: 0, duration: 500 },
            { value: 1.1, duration: 500, delay: 1000 },
        ],
        begin: () => {
            anime({
                targets: indicator2,
                translateX: [
                    { value: -60, duration: 1000, delay: 500 },
                    { value: 0, duration: 1000, delay: 500 }
                ],
                scale: [
                    { value: 0, duration: 500 },
                    { value: 1.1, duration: 500, delay: 1000 },
                ],
            })
        }
    })
};


indicatorMove();



const verifiedRotate = () => {
    anime({
        targets: verified1,
        rotate:[-10, 10],
        loop: true,
        direction: 'alternate',
        duration: 1000,
        begin: () => {
            anime({
                targets: verified2,
                rotate:[-10, 10],
                loop: true,
                direction: 'alternate',
                duration: 1000,
                begin: () => {
                    anime({
                        targets: verified3,
                        rotate:[-10, 10],
                        loop: true,
                        direction: 'alternate',
                        duration: 1000,
                    })
                }
            })
        }
    })
};


verifiedRotate();


let connectPeople1 = document.querySelector('.connect-people1');

if (connectPeople1){

    connectPeople1.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1
        })
    });

    connectPeople1.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1
        })
    });
}



let connectPeople2 = document.querySelector('.connect-people2');

if (connectPeople2){

    connectPeople2.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1
        })
    });

    connectPeople2.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1
        })
    });
}

let connectPeople3 = document.querySelector('.connect-people3');

if (connectPeople3){

    connectPeople3.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1
        })
    });

    connectPeople3.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1
        })
    });
}





//Portfolio Page animations
let projects = document.querySelector('.project');

if(projects){
    projects.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.1
        })
    });

    projects.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1
        })
    });
}


let modal = document.getElementById("myModal");

let span = document.getElementsByClassName("close")[0];


if(modal){
    const scale_M = () => {
        anime({
            targets: modal,
            scale: 0
        })
    };

    scale_M();

    projects.onclick = function () {
        modal.style.display= "block";
        modalAnimation();
    };


    const modalAnimation = () => {
        anime({
            targets: modal,
            scale: 1
        });
    };

    span.addEventListener('mouseover', function () {
        anime({
            targets: this,
            scale: 1.8,
            rotate: 180
        });
    });

    span.addEventListener('mouseout', function () {
        anime({
            targets: this,
            scale: 1,
            rotate: 0
        });
    });

    span.onclick = function () {
        modal.style.display= "none";
        modalAnimationB();
    };

    const modalAnimationB = () => {
        anime({
            targets: modal,
            scale: 0,
        });
    };

    window.onclick = function (event) {
        if (event.target === modal){
            modal.style.display = "none";
            modalAnimationB();
        }
    };

}


let squares = document.querySelectorAll('.color-square');

const portfolioElements = () => {
    anime({
        targets: squares,
        rotate: 180,
        loop: true,
        direction: 'alternate',
        duration: 1500,
    })
};

portfolioElements();


//Scroll animation
window.addEventListener('scroll', function () {
    let reveal = document.querySelector('.reveal');
    let windowheight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top;
    let revealpoint = 150;

    if (revealTop < windowheight - revealpoint){
        reveal.classList.add('active');
    }
    else{
        reveal.classList.remove('active');
    }

});


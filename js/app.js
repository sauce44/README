/*
I want the game to ask questions and if you get it right you can try to navigate a maze or race each other, not sure which. 

I have to set if statements that will loop, I want to let the user choose a direction and
*/

// First the player will enter their name, then they will choose a difficulty?? after this a modal (to explain the rules will open) then when the close button is clicked it will go to the top right of the page. The rules are "Choose the number of players (up to 2 to start) or select computer. You will race to complete a maze but in order to move forward you have to answer a question correctly."
// What classes are needed. A player class/factory and a computer class. 
// What methods are needed, player will need to input their name (constructor). The next method is the move method, needed for both the computer and player... will translate the player (design options?) 100px in whichever direction they choose for the maze. 

// const $playerName = $('#name').val();
// let playerName = $playerName;
let playerName = null;
let playerAnswer = null;
let player1Right = '';
let player2Right = '';
// playerAnswer = $('#userInput').val();

const $player = $('<div>')
.attr('id', 'styleMe')
.css('height', '10px')
.css('width', '10px')
.css('border-radius', '50%')
.css('position', 'absolute')
.css('color', 'black')
.css('z-index', '999')
.appendTo('#everything');
const $player2 = $('<div>')
.attr('id', 'styleMe1')
.css('height', '10px')
.css('width', '10px')
.css('border-radius', '50%')
.css('position', 'absolute')
.css('color', 'blue')
.css('display', 'none')
.css('z-index', '999')
.appendTo('#everything');
const $computer = $('<div>')
.attr('id', 'styleComp')
.css('height', '10px')
.css('width', '10px')
.css('border-radius', '50%')
.css('position', 'absolute')
.css('color', 'green')
.css('z-index', '999')
.appendTo('#everything');


class Player {
    constructor(name, $el){
        this.name = playerName;
        this.$el = $el;
    }
    moveUp(){
        $(document).keydown(function(event) { 
            if (event.which == '38') { //Up Arrow
                $("#styleMe").finish().animate({ 
                    top: "-=50" 
                }); 
            } 
        });  
    }
    moveDown(){
        $(document).keydown(function(event) { 
            if (event.which == '40') {  //Down Arrow
                $("#styleMe").finish().animate({ 
                    top: "+=50" 
                }); 
            } 
        });  
    }
    moveLeft(){
        $(document).keydown(function(event) { 
            if (event.which == '39') { //Right Arrow
                $("#styleMe").finish().animate({ 
                    left: "+=50"
                }); 
            } 
        });  
    }
    moveRight(){
        $(document).keydown(function(event) { 
            if (event.which == '37') { //Left Arrow
                $("#styleMe").finish().animate({ 
                    left: "-=50" 
                }); 
            } 
        });  
    }
}





class Computer  {
    constructor($el){
        this.$el = $el;
    }
    move(){
        $computer.css('transform', 'translate(10px, 10px)');
        $computer.css('transform', 'translate(10px, -10px)');
        $computer.css('transform', 'translate(10px, 5px)');
        $computer.css('transform', 'translate(10px, 5px)');
        $computer.css('transform', 'translate(10px, 5px)');
        $computer.css('transform', 'translate(-2px, 4px)');
        $computer.css('transform', 'translate(4px, 10px)');
        $computer.css('transform', 'translate(-4px, 4px)');
        $computer.css('transform', 'translate(-4px, -5px)');
        $computer.css('transform', 'translate(-4px, 4px)');
        $computer.css('transform', 'translate(10px, 5px)');
        $computer.css('transform', 'translate(4px, 4px)');
        $computer.css('transform', 'translate(-10px, -3px)');
        $computer.css('transform', 'translate(-3px, 3px)');
        $computer.css('transform', 'translate(-3px, -10px)');
        $computer.css('transform', 'translate(-3px, 30px)');
        $computer.css('transform', 'translate(3px, -5px)');
        $computer.css('transform', 'translate(3px, 3px)');
        $computer.css('transform', 'translate(5px, 6px)');
        $computer.css('transform', 'translate(10px, 0px)');
        $computer.css('transform', 'translate(10px, 2px)');
        $computer.css('transform', 'translate(4px, -2px)');
        $computer.css('transform', 'translate(2px, -4px)');
        $computer.css('transform', 'translate(-2px, -4px)');
        $computer.css('transform', 'translate(10px, 0px)');
    }
}








const trivia = [
    {
        question:"What tag would you use for the heading of a website? No need for carrots.",
        answer:"header",
        id:1
    },
    {
        question:"I don't want to do coding trivia for I'm making it LOTR trivia, just hit me with a sweet",
        answer:"sweet",
        id:2
    },
    {
        question:"Are dwarves distance runners or sprinters?",
        answer:"sprinters",
        id:3
    },
    {
        question:"Where does Gandalf fight the balrog?",
        answer:"In the lowest dungeon, on the highest peak",
        id:4
    },
    {
        question:"Why am I doing trivia, no one will get this far...??",
        answer:"No clue man",
        id:5
    },
    {
        question:"What was Sauron's masters name?",
        answer:"Morgoth",
        id:6
    },
    {
        question:"Maybe I should make an exercise program... not enough convenient progess trackers",
        answer:"Meh",
        id:7
    },
    {
        question:"How many wizards are there?",
        answer:"5",
        id:8
    },
    {
        question:"How old is Aragorn?",
        answer:"87",
        id:9
    },
    {
        question:"How old is Frodo?",
        answer:"33",
        id:10
    },
    {
        question:"I doubt it takes this long to finish the maze",
        answer:"hahaha",
        id:11
    }
];




const $questionModal = $('<div>')
.attr('id', 'questionModal')
.appendTo('#everything');
const $questionModalText = $('<div>')
.attr('id', 'questionModalText')
.appendTo('#questionModal');
const $userInput = $('<input>')
.attr('type', 'text')
.attr('id', 'userInput')
.appendTo('#questionModal');
const $userInputLabel = $('<label>')
.attr('for', 'userInput')
.appendTo('#userInput');
const $userSubmit = $('button')
.attr('id', 'userSubmit')
.appendTo('#userInput');

const $trivia = trivia.map(item => {
    return $(`<div data-name='${item.question}' id='${item.id}'>${item.question}</div>`).css('display', 'none')
    .appendTo($questionModal);
})







const compVersion = () => {
    const game = () => {
        for(let i = 0; i < trivia.length - 1; i++){
            setTimeout(questions, 3000);
            function questions(){
                let $triviaQuestion = $('<div>')
                $triviaQuestion = trivia[i].question.appendTo($questionModalText);
                } 
                if(trivia[i].answer == playerAnswer){
                    player.move();
                } else {
                    alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                    computer();
        }
    }
    game();
    const computer = () => {
        setTimeout(compMove, 3000)
        function compMove(){
            computerAnswer = Math.random();
            if(computerAnswer < .5){
                    computer.move()
                    computer();
            } else {
                alert('The computer was wrong, your turn.');
                    game();
                    }
            }
        }   
    }
}

const playerVersion = () => {
    const player1 = () => {
        for(let i = 0; i < trivia.length - 1; i++){
            setTimeout(questions1, 3000);
            function questions1(){
                const $triviaQuestion = $('<div>')
                $triviaQuestion = trivia[i].question.appendTo($questionModalText);
                } 
                if(trivia[i].answer == playerAnswer){
                    player.Move();
                } else {
                    alert(`I\'m sorry ${player.name}that was wrong, player 2 will go.`);
                    player2();
        }
    }   
    player1();
    const player2 = () => {
                for(let i = 0; i < trivia.length - 1; i++){
                    setTimeout(questions1, 3000);
                    function questions1(){
                        const $triviaQuestion = $('<div>')
                        $triviaQuestion = trivia[i].question.appendTo($questionModalText);
                        } 
                        if(trivia[i].answer == playerAnswer){
                            player_2.Move();
                        } else {
                            alert('I\'m sorry that was wrong, Player 1 will go.');
                            player1();
                }
            }   
        }


    }
}

$(()=>{
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    const $closeBtn1 = $('#close1');
    const $welcome = $('#start');
    const $section = $('section');
    const $modal1 = $('#modal1');
    const $form = $('form');
    const $input = $('#name');
    const $compBtn = $('#compBtn');
    const $playerBtn = $('#playerBtn');


    const welcome = () => {
        $welcome.css('display', 'none');
        $section.css('display', 'block');
        $modal1.css('display', 'block');
    }

    $form.on('submit', (event)=> {
        event.preventDefault();
        playerName = $input.val();
        $input.val('');
        console.log(playerName);
    }) 
    $compBtn.on('click', (event)=> {
        event.preventDefault();
        $modal1.css('display', 'none');
        compVersion();
    })
    $playerBtn.on('click', (event)=> {
        event.preventDefault();
        $modal1.css('display', 'none');
        $player2.css('display', 'block');
        playerVersion();
    })


    const openModal = () => {
        $modal.css('display', 'block');
        }
    const closeModal = () => {
        $modal.css('display', 'none');
        }
    const closeModal1 = () => {
        $modal1.css('display', 'none');
        }
    
    setTimeout(closeModal, 5000);
    $welcome.on('click', welcome);
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);
    $closeBtn1.on('click', closeModal1);

    const player = new Player(playerName, $player);
    const player_2 = new Player('', $player2);
    const computer = new Computer($computer);

})


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

let player1Right = '';
let player2Right = '';
// playerAnswer = $('#userInput').val();


//Player classes, should control the arrow key movement
class Player {
    constructor(name, $el){
        this.name = playerName;
        this.$el = $el;
    }
    move1() {
        $('#player').css('transform', 'translate(10px, 10px)');
        $('#player').css('transform', 'translate(10px, -10px)');
        $('#player').css('transform', 'translate(10px, 5px)');
    }
    move2(){
        $('#player').css('transform', 'translate(10px, 5px)');
        $('#player').css('transform', 'translate(10px, 5px)');
        $('#player').css('transform', 'translate(-2px, 4px)');
    }
    move3(){
        $('#player').css('transform', 'translate(4px, 10px)');
        $('#player').css('transform', 'translate(-4px, 4px)');
        $('#player').css('transform', 'translate(-4px, -5px)');
    }
    move4(){
        $('#player').css('transform', 'translate(-4px, 4px)');
        $('#player').css('transform', 'translate(10px, 5px)');
        $('#player').css('transform', 'translate(4px, 4px)');
    }
    move5(){
        $('#player').css('transform', 'translate(-10px, -3px)');
        $('#player').css('transform', 'translate(-3px, 3px)');
        $('#player').css('transform', 'translate(-3px, -10px)');
    }
    move6(){
        $('#player').css('transform', 'translate(-3px, 30px)');
        $('#player').css('transform', 'translate(3px, -5px)');
        $('#player').css('transform', 'translate(3px, 3px)');
    }
    move7(){
        $('#player').css('transform', 'translate(5px, 6px)');
        $('#player').css('transform', 'translate(10px, 0px)');
        $('#player').css('transform', 'translate(10px, 2px)');
    }
    move8(){
        $('#player').css('transform', 'translate(4px, -2px)');
    }
    move9(){
        $('#player').css('transform', 'translate(2px, -4px)');
    }
    move10(){
        $('#player').css('transform', 'translate(-2px, -4px)');
    }
    move11(){
        $('#player').css('transform', 'translate(10px, 0px)');
    }  
}

// Computer class, should have premade movements through board.
class Computer  {
    constructor($el){
        this.$el = $el;
    }
    move1() {
        $('#computer').css('transform', 'translate(10px, 10px)');
        $('#computer').css('transform', 'translate(10px, -10px)');
        $('#computer').css('transform', 'translate(10px, 5px)');
    }
    move2(){
        $('#computer').css('transform', 'translate(10px, 5px)');
        $('#computer').css('transform', 'translate(10px, 5px)');
        $('#computer').css('transform', 'translate(-2px, 4px)');
    }
    move3(){
        $('#computer').css('transform', 'translate(4px, 10px)');
        $('#computer').css('transform', 'translate(-4px, 4px)');
        $('#computer').css('transform', 'translate(-4px, -5px)');
    }
    move4(){
        $('#computer').css('transform', 'translate(-4px, 4px)');
        $('#computer').css('transform', 'translate(10px, 5px)');
        $('#computer').css('transform', 'translate(4px, 4px)');
    }
    move5(){
        $('#computer').css('transform', 'translate(-10px, -3px)');
        $('#computer').css('transform', 'translate(-3px, 3px)');
        $('#computer').css('transform', 'translate(-3px, -10px)');
    }
    move6(){
        $('#computer').css('transform', 'translate(-3px, 30px)');
        $('#computer').css('transform', 'translate(3px, -5px)');
        $('#computer').css('transform', 'translate(3px, 3px)');
    }
    move7(){
        $('#computer').css('transform', 'translate(5px, 6px)');
        $('#computer').css('transform', 'translate(10px, 0px)');
        $('#computer').css('transform', 'translate(10px, 2px)');
    }
    move8(){
        $('#computer').css('transform', 'translate(4px, -2px)');
    }
    move9(){
        $('#computer').css('transform', 'translate(2px, -4px)');
    }
    move10(){
        $('#computer').css('transform', 'translate(-2px, -4px)');
    }
    move11(){
        $('#computer').css('transform', 'translate(10px, 0px)');
    }  
}

const player = new Player(playerName, $('#player'));
const computer = new Computer($('#computer'));

// Questions array
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


// Should create a div for each question in the trivia array and get appended to the question modal.
const $questionModal = $('#questionModal');

const $trivia = trivia.map(item => {
    return $(`<div data-name='${item.question}' id='${item.id}'>${item.question}</div>`).css('display', 'none')
    .insertBefore('#question');
})

let playerAnswer = $('#answer').val();

// The logic of the game, it should run through the trivia array, continously displaying the questionModal every 3 seconds and a new trivia question equivalent to the i for loop value. If the answer input answer is false, then the computer will run. Every 3 seconds it will have the same issue having a 50/50 shot of getting it right. 
let compNum = null;
let playerNum = null;

const compVersion = () => {
    const game = () => {
        function move1() {
                $('#questionModal').css('display', 'block');
                $trivia[1].css('display', 'block');
                if($trivia[1].answer == playerAnswer){
                    $trivia[1].css('display', 'none');
                    playerNum = 1;
                    player_Move();
                } else {
                    alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                    $trivia[1].css('display', 'none');
                    comp1();
        }
    }
        function move2() {
            $('#questionModal').css('display', 'block');
            $trivia[2].css('display', 'block');
            if($trivia[2].answer == playerAnswer){
                $trivia[2].css('display', 'none');
                playerNum = 2;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[2].css('display', 'none');
                comp_Move();
        }
    }
        function move3() {
            $('#questionModal').css('display', 'block');
            $trivia[3].css('display', 'block');
            if($trivia[3].answer == playerAnswer){
                $trivia[3].css('display', 'none');
                playerNum = 3;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[3].css('display', 'none');
                comp_Move();
        }
    }
        function move4() {
            $('#questionModal').css('display', 'block');
            $trivia[4].css('display', 'block');
            if($trivia[4].answer == playerAnswer){
                $trivia[4].css('display', 'none');
                playerNum = 4;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[4].css('display', 'none');
                comp_Move();
        }
    }
        function move5() {
            $('#questionModal').css('display', 'block');
            $trivia[5].css('display', 'block');
            if($trivia[5].answer == playerAnswer){
                $trivia[5].css('display', 'none');
                playerNum = 5;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[5].css('display', 'none');
                comp_Move();
        }
    }
        function move6() {
            $('#questionModal').css('display', 'block');
            $trivia[6].css('display', 'block');
            if($trivia[6].answer == playerAnswer){
                $trivia[6].css('display', 'none');
                playerNum = 6;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[6].css('display', 'none');
                comp_Move();
        }
    }
        function move7() {
            $('#questionModal').css('display', 'block');
            $trivia[7].css('display', 'block');
            if($trivia[7].answer == playerAnswer){
                $trivia[7].css('display', 'none');
                playerNum = 7;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[7].css('display', 'none');
                comp_Move();
        }
    }
        function move8() {
            $('#questionModal').css('display', 'block');
            $trivia[8].css('display', 'block');
            if($trivia[8].answer == playerAnswer){
                $trivia[8].css('display', 'none');
                playerNum = 8;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[8].css('display', 'none');
                comp_Move();
        }
    }
        function move9() {
            $('#questionModal').css('display', 'block');
            $trivia[9].css('display', 'block');
            if($trivia[9].answer == playerAnswer){
                $trivia[9].css('display', 'none');
                playerNum = 9;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[9].css('display', 'none');
                comp_Move();
        }
    }
        function move10() {
            $('#questionModal').css('display', 'block');
            $trivia[10].css('display', 'block'); 
            if($trivia[10].answer == playerAnswer){
                $trivia[10].css('display', 'none');
                playerNum = 10;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[10].css('display', 'none');
                comp_Move();
        }
    }
        function move11() {
            $('#questionModal').css('display', 'block');
            $trivia[11].css('display', 'block');
            if($trivia[11].answer == playerAnswer){
                $trivia[11].css('display', 'none');
                playerNum = 11;
                player_Move();
            } else {
                alert(`I\'m sorry ${player.name} that was wrong, the computer will go.`);
                $trivia[11].css('display', 'none');
                comp_Move();
        }
    }
    const player_Move = () =>{
        if(playerNum === 1) {
            player.move1();
            move2()
        }
        else if(playerNum === 2) {
            player.move2();
            move3();
        }
        else if(playerNum === 3) {
            player.move3();
            move4();
        }
        else if(playerNum === 4) {
            player.move4();
            move5();
        }
        else if(playerNum === 5) {
            player.move5();
            move6();
        }
        else if(playerNum === 6) {
            player.move6();
            move7();
        }
        else if(playerNum === 7) {
            player.move7();
            move8();
        }
        else if(playerNum === 8) {
            player.move8();
            move9();
        }
        else if(playerNum === 9) {
            player.move9();
            move10();
        }
        else if(playerNum === 10) {
            player.move10();
            move11();
        }
        else if (playerNum === 11) {
            player.move11();
            gameWon();
        }
    }
    move1();
}
    game();

    const comp1 = () => {
        computerAnswer = Math.random();
        function compMove1() {
                if(computerAnswer < .5){
                        compNum = 1;
                        comp_Move();
                        
                } else {
                    alert('The computer was wrong, your turn.');
                        player_Move();
                        }
                }
        function compMove2() {
                if(computerAnswer < .5){
                        compNum = 2;
                        comp_Move();
                        
                } else {
                        alert('The computer was wrong, your turn.');
                            game();
                            player_Move();
                }
        }
    
        function compMove3() {
            if(computerAnswer < .5){
                    compNum = 3;
                    comp_Move();
                    
            } else {
                alert('The computer was wrong, your turn.');
                player_Move();
            
            }
        }

        function compMove4() {
            if(computerAnswer < .5){
                compNum = 4;
                comp_Move();
                
            } else {
            alert('The computer was wrong, your turn.');
            player_Move();
            }
        }
        function compMove5() {
            if(computerAnswer < .5){
                compNum = 5;
                comp_Move();
                
            } else {
                alert('The computer was wrong, your turn.');
                player_Move();
            }
        }
        function compMove6() {
            if(computerAnswer < .5){
                compNum = 6;
                comp_Move();
                
            } else {
                    alert('The computer was wrong, your turn.');
                    player_Move();
            }
        }

        function compMove7() {
            if(computerAnswer < .5){
                compNum = 7;
                comp_Move();
                
            } else {
                alert('The computer was wrong, your turn.');
                player_Move();
            }
        }
        function compMove8() {
            if(computerAnswer < .5){
                compNum = 8;
                comp_Move();
                
            } else {
                    alert('The computer was wrong, your turn.');
                    player_Move();
            }
        }
        function compMove9() {
                if(computerAnswer < .5){
                    compNum = 9;
                    comp_Move();
                    
                } else {
                    alert('The computer was wrong, your turn.');
                    player_Move();
                }
        }
        function compMove10() {
            if(computerAnswer < .5){
                compNum = 10;
                comp_Move();
                
            } else {
                alert('The computer was wrong, your turn.');
                player_Move();
            }
        }
        function compMove11() {
            if(computerAnswer < .5){
                compNum = 11;
                comp_Move();
                
            } else {
                alert('The computer was wrong, your turn.');
                player_Move();
            }
        }
        compMove1();

        const comp_Move = () =>{
            if(compNum === 1) {
                computer.move1();
                compMove2();
            }
            else if(compNum === 2) {
                computer.move2();
                compMove3();
            }
            else if(compNum === 3) {
                computer.move3();
                compMove4();
            }
            else if(compNum === 4) {
                computer.move4();
                compMove5();
            }
            else if(compNum === 5) {
                computer.move5();
                compMove6();
            }
            else if(compNum === 6) {
                computer.move6();
                compMove7();
            }
            else if(compNum === 7) {
                computer.move7();
                compMove8();
            }
            else if(compNum === 8) {
                computer.move8();
                compMove9();
            }
            else if(compNum === 9) {
                computer.move9();
                compMove10();
            }
            else if(compNum === 10) {
                computer.move10();
                compMove11();
            }
            else if (compNum === 11) {
                computer.move11();
                compWon();
            }
        }
    }
}



$(()=>{
    // Opening modals and making buttons clickable
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    const $welcome = $('#start');
    const $section = $('section');
    const $modal1 = $('#modal1');
    const $form = $('form');
    const $form1 = $('#question')
    const $input = $('#name');
    const $compBtn = $('#compBtn');

    // Welcome button
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
    $form1.on('submit', (event)=> {
        event.preventDefault();
        playerAnswer = $('#answer').val();
        $('#answer').val('');
        $('#questionModal').css('display', 'none');
    }) 

    const openModal = () => {
        $modal.css('display', 'block');
        }
    const closeModal = () => {
        $modal.css('display', 'none');
        }
    
    setTimeout(closeModal, 5000);
    $welcome.on('click', welcome);
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);

})


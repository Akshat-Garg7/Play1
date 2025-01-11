'use strict';

const dice=document.querySelector('.dice');
const rollbtn=document.querySelector('.btn--roll');
const holdbtn=document.querySelector('.btn--hold');
const newbtn=document.querySelector('.btn--new');

const player1score=document.getElementById('score--0');
const player2score=document.getElementById('score--1');
const currentplayer1=document.getElementById('current--0');
const currentplayer2=document.getElementById('current--1');
const background1=document.querySelector('.player--0');
const background2=document.querySelector('.player--1');

let currentscore,lessthan,activeplayer;

const init=function()
{
    currentscore=0;
    lessthan=true;
    activeplayer=0;

    player1score.textContent=0;
    player2score.textContent=0;
    currentplayer1.textContent=0;
    currentplayer2.textContent=0;
    
    background1.classList.add('player--active');
    background1.classList.remove('player--winner');
    background2.classList.remove('player--active');
    background2.classList.remove('player--winner');
    
    dice.classList.add('hidden');
}
init();

const switchPlayer=function()
{
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore=0;
    activeplayer=activeplayer===0?1:0;
    background1.classList.toggle('player--active');
    background2.classList.toggle('player--active');
}

rollbtn.addEventListener('click',function()
{
    if(lessthan)
    {
    const randomnum=Number(Math.trunc(Math.random()*6)+1);
    dice.classList.remove('hidden');
    dice.src=`dice-${randomnum}.png`;
    if(randomnum!==1)
    {
        currentscore+=randomnum;
        document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    }
    else
    {
        switchPlayer();
    }
}
}
);

holdbtn.addEventListener('click',function()
{
    if(lessthan)
    {
        document.getElementById(`score--${activeplayer}`).textContent=Number(document.getElementById(`score--${activeplayer}`).textContent)+Number(document.getElementById(`current--${activeplayer}`).textContent);
        if(Number(document.getElementById(`score--${activeplayer}`).textContent)>=20)
        {
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            lessthan=false;
            dice.classList.add('hidden');
            
        }
        else switchPlayer();


    // if(background1.classList.contains('player--active'))  
    // {
    //     player1score.textContent=Number(player1score.textContent)+Number(currentplayer1.textContent);
    //     currentscore=0;
    //     currentplayer1.textContent=currentscore;
    //     if(Number(player1score.textContent)>=20)
    //     {
    //         background1.classList.add('player--winner');
    //         lessthan=false;
    //         dice.classList.add('hidden');
    //     }
    //     else{
    //     background1.classList.toggle('player--active');
    //     background2.classList.toggle('player--active');
    //     }
        
    // }
    // else 
    // {
    //     player2score.textContent=Number(player2score.textContent)+Number(currentplayer2.textContent);
    //     currentscore=0;
    //     currentplayer2.textContent=currentscore;
        
    //     if(Number(player2score.textContent)>=20)
    //     {
    //         background2.classList.add('player--winner');
    //         lessthan=false;
    //         dice.classList.add('hidden');
    //     }
    //     else{
    //         background1.classList.toggle('player--active');
    //         background2.classList.toggle('player--active');
    //     }
    // }
}
}
);

newbtn.addEventListener('click',init);

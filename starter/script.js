'use strict';

const dice=document.querySelector('.dice');
const player1score=document.getElementById('score--0');
const player2score=document.getElementById('score--1');
const rollbtn=document.querySelector('.btn--roll');
const holdbtn=document.querySelector('.btn--hold');
const newbtn=document.querySelector('.btn--new');
const currentplayer1=document.getElementById('current--0');
const currentplayer2=document.getElementById('current--1');
const background1=document.querySelector('.player--0');
const background2=document.querySelector('.player--1');

dice.classList.add('hidden');
player1score.textContent=0;
player2score.textContent=0;
let lessthan=true;
let currentscore=0;
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
        if(background1.classList.contains('player--active')) currentplayer1.textContent=currentscore;
        else currentplayer2.textContent=currentscore;
    }
    else
    {
        currentscore=0;
        if(background1.classList.contains('player--active')) currentplayer1.textContent=currentscore;
        else currentplayer2.textContent=currentscore;
        background1.classList.toggle('player--active');
        background2.classList.toggle('player--active');

    }
}
}
);

holdbtn.addEventListener('click',function()
{
    if(lessthan)
    {
    if(background1.classList.contains('player--active'))  
    {
        player1score.textContent=Number(player1score.textContent)+Number(currentplayer1.textContent);
        currentscore=0;
        currentplayer1.textContent=currentscore;
        if(Number(player1score.textContent)>=20)
        {
            background1.classList.add('player--winner');
            lessthan=false;
            dice.classList.add('hidden');
        }
        else{
        background1.classList.toggle('player--active');
        background2.classList.toggle('player--active');
        }
        
    }
    else 
    {
        player2score.textContent=Number(player2score.textContent)+Number(currentplayer2.textContent);
        currentscore=0;
        currentplayer2.textContent=currentscore;
        
        if(Number(player2score.textContent)>=20)
        {
            background2.classList.add('player--winner');
            lessthan=false;
            dice.classList.add('hidden');
        }
        else{
            background1.classList.toggle('player--active');
            background2.classList.toggle('player--active');
        }
    }
}
}
);

newbtn.addEventListener('click',function()
{

    player1score.textContent=0;
    player2score.textContent=0;
    currentplayer1.textContent=0;
    currentplayer2.textContent=0;
    currentscore=0;
    background1.classList.add('player--active');
    background1.classList.remove('player--winner');
    background2.classList.remove('player--active');
    background2.classList.remove('player--winner');
    lessthan=true;
    dice.classList.add('hidden');
}
);

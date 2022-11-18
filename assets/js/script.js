var startGame=document.querySelector('#startBtn');
var wordsArray = ["variable","array", 'banana',"modulus", "object", "function", "string", "boolean"];
var slashesArray=[]
var status=false
var WinEl=document.getElementById('winJs');
var winGrade=localStorage.getItem('win') || 0;
var isOn;
var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
var isWin;
var loss=0;
var lossEl=document.getElementById('lossJs')
var lossGrade=localStorage.getItem('loss') || 0;
var canWinFun=false
var time=document.getElementById('timer');
var second=6;
var slash=document.getElementById('gameSlash')
 var togDivEl=document.getElementById('togDiv')



var start=function(){
    console.log('win grade',winGrade)
   WinEl.innerHTML=winGrade
lossEl.innerHTML=lossGrade
    var randomIndex=Math.floor(Math.random()*wordsArray.length);

    var randomWord=wordsArray[randomIndex];

    var lettersPerWord=randomWord.split('')
console.log(lettersPerWord)
var slashesLength=lettersPerWord.length;
for(var i=0;i<slashesLength;i++){
    slashesArray.push("_")
}

slash.innerHTML=slashesArray.join(" ")


document.addEventListener('keydown',function(event){
    var key=event.key.toLocaleLowerCase();

 for(var i=0;i<lettersPerWord.length;i++){

//    checkLetters(key,lettersPerWord)
// [w,o,o,d],[[-,o,-,-]]



//     var index=lettersPerWord.indexOf(key)
console.log('1st loop',key,'...',lettersPerWord[i])
if(key==lettersPerWord[i]){

isOn=true


    }

    if(isOn){
        for(var j=0;j< slashesArray.length;j++){
        
if(key===lettersPerWord[j]){

    
    
    slashesArray[j]=key
    slash.textContent=slashesArray.join(" ")

    arraysEqual(slashesArray,lettersPerWord)

}


        }
        
    }



}
   

if(    arraysEqual(slashesArray,lettersPerWord)
){

canWinFun=true
console.log(canWinFun,'canwinFun')

}




})
startTime(status,canWinFun)


}










if(startGame){
    startGame.addEventListener('click',start,false)


}






function arraysEqual(slashesArray,lettersPerWord) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
  return JSON.stringify(slashesArray)==JSON.stringify(lettersPerWord);
}




function startTime(status){

 var timer= setInterval(()=>{
    status=true
    second--
    if(second>=0  ){

        console.log('status',status,canWinFun)

        if((status&&canWinFun)==true){
            winGrade++

console.log('true')
startGame.disabled = true;
clearInterval(timer);
localStorage.setItem('win',winGrade)
window.alert('you win buddy!! 🏆🏆🏆🏆✌️ ✌️ ✌️ ✌️ ✌️ ')
WinEl.innerHTML=localStorage.getItem('win')
  var newBtn=document.createElement('button');
  newBtn.textContent='Play Again';
  newBtn.setAttribute('class','btn');
  newBtn.setAttribute('id','clearBt')
  newBtn.setAttribute('style','margin:50px');

  togDivEl.addEventListener('click',()=>{
    location.reload( )


})


togDivEl.appendChild(newBtn)
}else{
            time.innerHTML = `<span>${second} </span>`;


            startGame.disabled = true;
            WinEl.innerHTML=localStorage.getItem('win')


        }

    
    }if(second<0){

        lossGrade++;


        startGame.disabled = true;


localStorage.setItem('loss',lossGrade)
        window.alert('you loss  📈  📉 · 🤕 · 📈 · 💔 · 😓  😣. ')


     clearInterval(timer);

     lossEl.innerHTML=localStorage.getItem('loss')

     var newBtn=document.createElement('button');
  newBtn.textContent='Play Again';
  newBtn.setAttribute('class','btn');
  newBtn.setAttribute('id','clearBt')
  newBtn.setAttribute('style','margin:50px');

  togDivEl.addEventListener('click',()=>{
    location.reload( )


})


togDivEl.appendChild(newBtn)
   }
    
    
    
        
    
      
        
           },1000)}


           function runCommand(){
             window.alert('hi')
           }
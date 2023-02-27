// define instrument in an array
const kits = ["snare","kick","crash","tom"];
// get the container with the buttons 
const containerEl=document.querySelector(".container");

//create the elements in JS instead of html looping the list of strings
kits.forEach((kit)=>{
//    create the element 
   const btnEl =document.createElement("button");
//    give it a class 
   btnEl.classList.add("btn");
//    add name text to button 
   btnEl.innerText=kit;
//    add button to container as a child element 
   containerEl.appendChild(btnEl); 
//    create audio elements for each kit item 
   const audioEl = document.createElement("audio");
//    add audio elements to container 
   containerEl.appendChild(audioEl);
//    add audio source using kit name string 
   audioEl.src=(kit+".mp3");
//    change background of each button to reflect associated instrument 
   btnEl.style.backgroundImage="url("+ kit + ".png)";
//    add event listener to play the audio when you click the button 
   btnEl.addEventListener("click",()=>{
    //    play aduio 
    audioEl.play();
    // console.log("playing");
   })
//    add event listener to do the work with just pressing the keys that correspond to first letter 
   window.addEventListener("keydown", (event)=>{
        // console.log(event.key);
        // only play sound when letter corresponds to an instrument on the list with the same first letter 
        if(event.key === kit.slice(0,1)){
            audioEl.play();
            // add animation to button when you press key 
            btnEl.style.transform= "scale(0.9)";
            // restore original size of buttton after key is pressed 
            setTimeout (()=>{
                btnEl.style.transform= "scale(1)";
            },100);               
        };
   });

});







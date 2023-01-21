document.body.addEventListener("keyup" , (event)=>{
    
    PlaySound(event.code.toLowerCase());
    console.log(event.code);
});


let button = document.querySelector("button").addEventListener("click", ()=>{
    let song = document.querySelector("#composição").value;
    let songArray = song.split("");
    console.log(songArray);
    playcomposition(songArray);
})

function PlaySound(sound){

    let audioelement = document.querySelector(`#s_${sound}`);
    let keyelement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioelement){
        audioelement.currentTime = "0";
        audioelement.play();}


    if(keyelement){ keyelement.classList.add("select"); setTimeout(()=>{
        keyelement.classList.remove("select")}, 300
    )
}};

function playcomposition(songArray){
    let wait = 0;
    for(let songIten of songArray){

        setTimeout(()=>{PlaySound(`key${songIten}`)}, wait)
            wait += 250;
        }}
        
        


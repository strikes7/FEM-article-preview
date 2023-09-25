document.onload = socialMediaShow();

function socialMediaShow(){
    const shareButton = document.getElementById("js-share-button");
    shareButton.addEventListener('click', () =>{
        document.getElementById("js-media").classList.toggle("visible");
        document.getElementById("js-share-button").classList.toggle("show-media");
    })
}
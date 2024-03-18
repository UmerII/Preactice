// function changeimage2()
// {
//    let img = document.getElementById('image2');
//     if (img=="artemis.png") {
//         document.getElementById('image2').setAttribute("src","3.png");
//     } else if(onmouseout) {
//         document.getElementById('image2').setAttribute("src","Greece.png");
//     }
   
// }

function changeimage2()
{
var image = document.getElementById('image2');
if(image=="3.png")
{
    document.getElementById('image2').setAttribute("src","3.png");
}

else{
    document.getElementById('image2').setAttribute("src","giza.png");
}

}
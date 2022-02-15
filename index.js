function show_box(link,object){
    let clicked = document.getElementsByClassName("clicked")[0];

    clicked.classList.add("click")
    clicked.classList.remove("clicked");
    
    link.firstChild.classList.remove("click");
    link.firstChild.classList.add("clicked");

    let boxs = document.getElementsByClassName("box");
    for(let i = 0; i < boxs.length; i++){
        boxs[i].classList.remove("visible");
        boxs[i].classList.add("hidden");
    }

    object.classList.remove("hidden");
    object.classList.add("visible");
}

function button(object,box){
    let obj = document.getElementById(object);
    obj.addEventListener("click",function(){
        show_box(obj,document.getElementById(box));
    },false);
}

button("computer_graphics","computer_graphics_box");
button("pixel","pixel_box");
button("resolution","resolution_box");
button("scaling","scaling_box");
button("compression","compression_box");
button("graphics_mode","graphics_mode_box");
button("standart","standart_box");
button("4:3","4:3_box");
button("GWR","GWR_box");
button("RGB","RGB_box");
button("DPI","DPI_box");
button("FOR","FOR_box");
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
Koenigsegg_Agera_RS_width=100;
Koenigsegg_Agera_RS_height=100;
Devel_Sixteen_width=100;
Devel_Sixteen_height=100;
background_image="th (1).jpg";
Koenigsegg_Agera_RS_image="th.jpg";
Koenigsegg_Agera_RS_x=10;
Koenigsegg_Agera_RS_y=10;
Devel_Sixteen_image="th (85).jpg";  
Devel_Sixteen_x=20;
Devel_Sixteen_y=20;

function add(){
    background_image1=new Image();
    background_image1.onload=uploadbackground;
    background_image1.src=background_image;
    background_image2=new Image();
    background_image2.onload=uploadKoenigsegg_Agera_RS;
    background_image2.src=Koenigsegg_Agera_RS_image;
    background_image2=new Image();
    background_image2.onload=uploadDevel_Sixteen;
    background_image2.src=Devel_Sixteen;

}
function uploadbackground(){
    ctx.drawImage(background_image1,0,0,canvas.width,canvas.height);
}



<script language="javascript">

function ampliarImg(img) {
    
    if (img == 1) 
    {
        document.getElementById("img1").style.border = "3px solid blue";
        document.getElementById("img2").style.border =  "0px";
        document.getElementById("img3").style.border =  "0px";
        document.getElementById("img4").src = document.getElementById("img1").src;
    }
    else if (img == 2) 
    {
        document.getElementById("img2").style.border = "3px solid blue";
        document.getElementById("img1").style.border =  "0px";
        document.getElementById("img3").style.border =  "0px";
        document.getElementById("img4").src = document.getElementById("img2").src;
    }
    else if (img == 3) 
    {
        document.getElementById("img3").style.border = "3px solid blue";
        document.getElementById("img1").style.border =  "0px";
        document.getElementById("img2").style.border =  "0px";
        document.getElementById("img4").src = document.getElementById("img3").src;
    }
}
</script>

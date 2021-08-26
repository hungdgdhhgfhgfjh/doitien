function lamgido(){
    let giatridauvao =(document.getElementById("dauvao").value)
    let select1 =(document.getElementById("select1").value)
    let select2 = (document.getElementById("select2").value)
    if(select1 == select2){
        document.write(giatridauvao);
    }
    if(select1 == "a" && select2 == "b"){
        document.write(giatridauvao/24000);
    }
}
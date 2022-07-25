
window.addEventListener("load",() => {
    var laui = new layout_ui(
        document.querySelector("#nyuton"),
        document.querySelector("#nibun"),
        document.querySelector("#zyukai"),
        document.querySelector("#henkyoku")
    );

});


function layout_ui(nyuton,nibun,zyukai,henkyoku){
    this.nyuton = nyuton;
    this.nibun = nibun;
    this.zyukai = zyukai;
    this.henkyoku = henkyoku;

    //this.nibunhou = new nibun();

    this.nyuton.addEventListener("click" , () => {
        document.write("これはテストです");
        console.log("ニュートン法を行うためのボタンが押されました");
    });
    this.nibun.addEventListener("click" , () =>{
        //document.write("これは2分法のボタンを押します");
        console.log("2分法を行うためのボタンが押されました");
        test = new nibunkeisan(document.querySelector("#ziku"));
    });
    this.zyukai.addEventListener("click" , () =>{
        //document.write("これは重解のある関数です");
        console.log("重解のアイテムを行うためのボタンが押されました");


    });
    this.henkyoku.addEventListener("click" , () =>{
        document.write("これは変曲点が解の周辺にあります");
        console.log("変曲点を行うためのボタンが押されました");
    });
};

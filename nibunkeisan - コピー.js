function nibunkeisan(canvas) {
    var element = document.querySelector("#line");
    var co;ntext = element.getContext("2d");
    nibun_3(0,400)
};



//許容誤差
let e = .0001;
//a点の規定
let a = 15;
//pointLine(a);

//b点の規定
//pointLine(a+200);

//a,bを入力したあとに点を更新したことを知らせるための、点を入力する？
//絶対値を付けることで、中点をx軸と合わせて描画するところまで可能
//ループしない
function nibun_1(a,b){
    a = a-200;
    b = b-200;
    console.log(a,b);
    console.log(a-b);
    let c;
    const message = "";
    console.log(Math.abs(a-b));
    while (Math.abs(a-b) > e){
        
        c = a+b/2 + 300;
        console.log([a,b,c])
        writeLine_y(c);
        console.log(func_y(c) * func_y(a))
        
        if(func_y(c) * func_y(a) < 0){
            b=c;
            writeLine_y(c)
            const message = "b"
            console.log([message,c])
        }else{
            a=c;
            writeLine_y(c)
            const message = "a"
            console.log([message,c])

        }
        //console.log([a,b,math.abs(a-b)]);
        console.log([a,b]);
        return c;
    }
}

//a,bを入力したあとに点を更新したことを知らせるための、点を入力する？
//a,bは共に画面ピクセル値。左上を0とする方
//ループできた。収束箇所が異なる。ループの修正箇所はリターン
function nibun_2(a,b){
    //x軸として規定しているグラフィックの中心を0とする。
    a = a-200;
    b = b-200;
    console.log(a,b);
    console.log(a-b);
    let c;
    const message = "";
    //console.log(Math.abs(a-b));
    while (Math.abs(a-b) > e){
        Math.abs(a-b)
        c = (a+b)/2 ;
        console.log([a,b,c,func_y(c+200),func_y(a),func_y(a+200),])
        writeLine_y(c+200);
        console.log(func_y(c+200) * func_y(a+200))
        
        if(func_y(c+200) * func_y(a+200) < 0){
            b=c;
            writeLine_y(c+200)
            const message = "b"
            console.log([message,c])
        }else{
            a=c;
            writeLine_y(c+200)
            const message = "a"
            console.log([message,c])

        }
        //console.log([a,b,math.abs(a-b)]);
        console.log([a,b]);
        
    }return c;
}

function nibun_3(a,b){
    //x軸として規定しているグラフィックの中心を0とする。
    a = a;
    b = b;
    //console.log(a,b);
    //console.log(a-b);
    let c;
    const message = "";
    //console.log(Math.abs(a-b));
    while (Math.abs(a-b) > e){
        Math.abs(a-b)
        c = (a+b)/2;
        console.log([c,func_y(c),func_y(a),func_y(a-200),])
        //writeLine_y(c);
        //console.log(func_y(c) * func_y(a))
        
        if(func_y(c) * func_y(a) < 0){
            b=c;
            writeLine_y(Math.abs(c-400+200+100))
            const message = "b"
            console.log([message,c,func_y(c)])
        }else{
            a=c;
            writeLine_y(Math.abs(c-400+200+100))
            const message = "a"
            console.log([message,c,func_y(c)])

        }
        //console.log([a,b,math.abs(a-b)]);
        //console.log([a,b]);
        
    }return c;
}

//現関数を作る
function func_y(x){
    //return x**3+x-1;
    return (1/200)*(x-200)**2;
}

function func_y(x){
    //return x**3+x-1;
    //x-200の部分はグラフィックに依存。軸の座標を減算
    return (1/200)*(x-200)**3+1/200*(x-200)+50;
    
}

//現関数を作る数字を外から持ってくる


//時間事に操作を還る

//console.log(nibun_1(10,390));

//console.log(nibun_2(10,390));

//console.log([nibun_3(10,390),Math.abs(func_y(nibun_3(10,390))+400-200)]);

//console.log([nibun_3(10,390),Math.abs(func_y(nibun_3(10,390)))]);

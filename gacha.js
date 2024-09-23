
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('imageDisplay').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('imageDisplay-SSR').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});


document.getElementById('imageUpload3').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imageDisplay3').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});
document.getElementById('imageUpload3').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('imageDisplay-SR').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});


document.getElementById('imageUpload4').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imageDisplay4').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});
document.getElementById('imageUpload4').addEventListener('change', function(event) {
    const file = event.target.files[0]; //選択されたファイルを取得 
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('imageDisplay-NR').src = e.target.result; //画像を表示
        console.log(e.target.result);
    };
    if (file) {
        reader.readAsDataURL(file); //画像ファイルをData URLとして読み込む
    }
});



// 画像非表示
const imageSSR = document.getElementById('imageDisplay-SSR');
imageSSR.classList.add("opacity");
const imageSR = document.getElementById('imageDisplay-SR');
imageSR.classList.add("opacity");
const imageNR = document.getElementById('imageDisplay-NR');
imageNR.classList.add("opacity");

// ガチャ結果表示
const gachatext = document.getElementById('gacharesult');
gachatext.classList.add("opacity");

// imageDisplay2取得
const imageDisplay2 = document.getElementById('imageDisplay2');

imageDisplay2.addEventListener('animationend',() => {
    //アニメーション終了時
    imageDisplay2.classList.remove('move');
    console.log('アニメーション終了。id:moveを削除しました。')
});

gachatext.addEventListener('animationend',() => {
    //アニメーション終了時
    gachatext.classList.remove("move2");
});



// ボタンがクリックされたらガチャを実行
function buttonClick(){
imageSSR.classList.add("opacity");
imageSR.classList.add("opacity");
imageNR.classList.add("opacity");
    const imageDisplay2 = document.getElementById('imageDisplay2');
    imageDisplay2.classList.add("move");
    gachatext.classList.add("move2");
    random(); // ガチャを実行

}



// ガチャランダム

function random() {
    var rand = Math.floor(Math.random() * 100); // 1d100
    let m = "R"; // 初期値は "R"

    // ランダムにmを設定
    if (rand < 5) {
        m = "SSR"; // 5未満なら "SSR"
        imageSSR.classList.add("randomresult");
        imageSSR.classList.remove("opacity");
    } else if (rand < 30) {
        m = "SR"; // 30未満なら "SR"
        imageSR.classList.add("randomresult");
        imageSR.classList.remove("opacity");
    } else if (rand < 100) {
        m = "NR"; // 70未満なら "NR"
        imageNR.classList.add("randomresult");
        imageNR.classList.remove("opacity");
    }
    gachatext.textContent = m ;
    gachatext.classList.add("randomresult");
    gachatext.classList.remove("opacity");
        console.log('ガチャ結果', m); // ランダムな結果を表示
}

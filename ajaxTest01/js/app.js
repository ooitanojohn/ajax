//①jQuery基本事項の復習
$(function () {}); //function

//②外部htmlファイル読み込み演習
$(function () {
  //②外部htmlファイル読み込み演習（その①）
  $("#button01").click(function () {
    $.ajax({
      url: "load.html",
      dataType: "html",
    })
      .done(function (html) {
        alert("OKOK!");
        $("#sample01").html(html);
      })
      .fail(function (html) {
        alert("NG...");
      });
  });

  //ボタンクリックで非同期通信
  //②外部htmlファイル読み込み演習（その②）
  $("#box1 select").on("change", function () {
    // イベントが行われた要素のvalue値を取得する
    var changeVal = $(this).val();
    $.ajax({
      //url:'page1.html',
      url: changeVal + ".html",
      dataType: "html",
      // get データ送信
      data: {},
    })
      .done(function (a) {
        $("#box2In").html(a);
      }) //done
      .fail(function (data) {
        alert("NG!");
      }); //fail
  });
  //セレクトボックス選択で非同期通信

  // form内容送信
  $("button").click(function () {
    // 多重送信を防ぐため通信完了までボタンをdisableにする
    var button = $(this);
    button.attr("disabled", true);

    // 各フィールドから値を取得してJSONデータを作成
    var data = {
      name: $("#name").val(),
      age: parseInt($("#age").val()),
    };

    // 通信実行
    $.ajax({
      type: "post", // method = "POST"
      url: "page2.html", // POST送信先のURL
      data: JSON.stringify(data), // JSONデータ本体
      contentType: "application/json", // リクエストの Content-Type
      dataType: "json", // レスポンスをJSONとしてパースする
      success: function (json_data) {
        // 200 OK時
        // JSON Arrayの先頭が成功フラグ、失敗の場合2番目がエラーメッセージ
        if (!json_data[0]) {
          // サーバが失敗を返した場合
          console.log("Transaction error. " + json_data[1]);
          alert("Transaction error. " + json_data[1]);
          return;
        }
        // 成功時処理
        location.reload();
      },
      error: function () {
        // HTTPエラー時
        console.log("Server Error. Please try again later.");
        alert("Server Error. Please try again later.");
      },
      complete: function () {
        // 成功・失敗に関わらず通信が終了した際の処理
        button.attr("disabled", false); // ボタンを再び enableにする
      },
    });
  });
}); //function

// jsで書くと
var xhr = new XMLHttpRequest();
xhr.open("GET", "page1.html");
xhr.onreadystatechange = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // 処理
    } else {
      //失敗時
    }
  }
};
xhr.send();

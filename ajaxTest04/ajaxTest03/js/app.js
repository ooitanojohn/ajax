console.log("jQuery");
$(function () {
  /* JSONファイル
  jsonフォーマットで記述された、テキスト形式のファイル。
  jsonとはJavaScript Object Notationの略でジェイソンと読んでいます。
  jsonはJavaScriptで定義されているオブジェクト表記法の一つで、
  テキスト形式で表記されるので、簡単にデータ交換が出来ます。
  そのためJavaScriptに限らず、主要なプログラム言語から利用されています。*/

  // オブジェクトの扱い方の復習
  let subject = {
    class: "IW21",
    time: "5限目",
  };
  console.log(subject.class);
  /* JSONを表示させる その1 */
  $("#button01").on("click", function () {
    $.ajax({
      url: "document.json",
      datatype: "json",
    })
      .done(function (json) {
        // 実際にデータが取れているか？
        // どういう構造になっているか？
        console.log(json);
      })
      .fail(function () {});
  });
  /* JSONを表示させる その2 */
});
//function

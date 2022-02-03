console.log("jQuery");
$(function () {
  /* JSONを表示させる その1 */
  $("#button01").on("click", function () {
    console.log("click");
    $.ajax({
      url: "sample34.xml",
      datatype: "xml",
    })
      .done(function (xml) {
        console.log(xml);
        //  findメソッド あるタグ内の子孫要素を選択する為のメソッド
        console.log($(xml).find("sample"));
        console.log($(xml).find("title").text());
        console.log($(xml).find("url").text());

        // eqメソッド 複数のHTML要素の中からインデックス番号を指定する事で特定の要素だけを指定できます
        console.log($(xml).find("title").eq(1).text());

        // eachメソッド
        // 要素に対する繰り返し処理が出来る
        $(xml)
          .find("sample")
          .each(function () {
            //  append メソッド
            // 対象の要素の中の最後に要素を追加
            $("#sample ul").append("<li>取得</li>");
            //  1) <title>を取得
            $("#sample2 ul").append(
              "<li>" + $(this).find("title").text() + "</li>"
            );
            //  2) <url>を取得
            $("#sample3 ul")
              .append(
                "<li><a>リンク</a>" + $(this).find("url").text() + "</li>"
              )
              .attr("href");
          });
      })
      .fail(function () {
        alert("失敗。。");
        // fail
      });
  });
  /* JSONを表示させる その2 */
}); //function

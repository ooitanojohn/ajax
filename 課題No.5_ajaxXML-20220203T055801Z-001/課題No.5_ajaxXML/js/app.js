$(function () {
  $("#btn").on("click", function () {
    // #sample h2を消す
    $("#sample #item").remove();
    // xmlの要素取得
    $.ajax({
      url: "ituneRank.xml",
      datatype: "xml",
    })
      .done(function (xml) {
        console.log(xml);
        //  findメソッド あるタグ内の子孫要素を選択する為のメソッド
        console.log($(xml).find("title").text());
        console.log($(xml).find("url").text());

        // eqメソッド 複数のHTML要素の中からインデックス番号を指定する事で特定の要素だけを指定できます
        console.log($(xml).find("title").eq(1).text());

        // eachメソッド
        var i = 0;
        $(xml)
          .find("entry")
          .each(function () {
            i++;
            // #sample #item
            $("#sample").append('<div id="item"></div>');
            //  no
            $("#sample #item:nth-of-type(" + i + ")").append(
              '<div class="rankNo">' + "No" + i + "</div>"
            );
            //   url
            $("#sample #item:nth-of-type(" + i + ") h2")
              .append(
                "<h2><a href='" +
                  $(this).find("url").text() +
                  "'>" +
                  $(this).find("title").text() +
                  "</a></h2>"
              )
              .attr("href");
            //   img
            $("#sample #item:nth-of-type(" + i + ")")
              .append("<img src='" + $(this).find("image").text() + "'></img>")
              .attr("href");
            //   rights
            $("#sample #item:nth-of-type(" + i + ")")
              .append("<p>" + $(this).find("rights").text() + "</p>")
              .attr("href");
            //   リリース
            $("#sample #item:nth-of-type(" + i + ")")
              .append(
                "<p class='release'>" +
                  $(this).find("releaseDate").text() +
                  "</p>"
              )
              .attr("href");
          });
      })
      .fail(function () {
        alert("失敗。。");
        // fail
      });
  });
}); //function

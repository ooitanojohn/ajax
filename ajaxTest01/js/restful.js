fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:9784103060765")
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    console.log(res.items[0].volumeInfo.title);
    //  "女たち三百人の裏切りの書" と表示されます
  })
  .catch((error) => {
    console.log(error);
  });

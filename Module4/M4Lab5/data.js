let news = [
  { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
  { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
  { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
];


function displayNews() {
  return new Promise(resolve => {
    setTimeout(function(){
      resolve(news)
    }, 5000)
  })
}

displayNews().then((news) => console.log(news))
$.getJSON("https://api.myjson.com/bins/udbm5", function (data) {
    books2(data);
    
// quick search regex
var qsRegex;

// init Isotope
var $grid = $('#container').isotope({
  itemSelector: '.flip-container',
  layoutMode: 'fitRows',
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});

// use value of search field to filter
var $quicksearch = $('.form-control').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}, 200 ) );


// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout( delayed, threshold || 100 );
  }
}
})




function books(data) {

    var myContainer = document.getElementById("container");

    for (var i = 0; i < data.books.length; i++) {

        var imgUrl = data.books[i].portada;

        var flipContainer = document.createElement("div");
        flipContainer.setAttribute("class", "flip-container");

        var flipper = document.createElement("div");
        flipper.setAttribute("class", "flipper");

        var back = document.createElement("div");
        var front = document.createElement("div");
        back.setAttribute("class", "back");
        front.setAttribute("class", "front");

        var imgPotada = document.createElement("img");
        imgPotada.setAttribute("src", imgUrl);

        //Contenido

        front.append(imgPotada);

        flipper.append(front, back);
        flipContainer.append(flipper);
        myContainer.append(flipContainer);

        console.log(data.books[i]);
    }
}

function books2(data) {

    var myContainer = document.getElementById("container");


    for (var i = 0; i < data.books.length; i++) {

        var imgUrl = data.books[i].portada;
        var titulo = data.books[i].titulo;
        var description = data.books[i].descripcion;
        
        
        var descriptionDiv = document.createElement("div");
        descriptionDiv.setAttribute("class","descriptiondiv");
        
        


        var tituloDiv = document.createElement("div");
        tituloDiv.setAttribute("class", "tituloDiv");
        
        var flipContainer = document.createElement("div");
        flipContainer.setAttribute("class", "flip-container")

        var flipper = document.createElement("div");
        flipper.setAttribute("class", "flipper");


        var front = document.createElement("div");
        front.setAttribute("class", "front");

        var back = document.createElement("div");
        back.setAttribute("class", "back");

        var imgPortada = document.createElement("img");
        imgPortada.setAttribute("src", imgUrl);
        imgPortada.setAttribute("class" , "imgportada");
        
        var link = document.createElement("a");
        link.setAttribute("class", "btn btn-info" );
        link.textContent="See Book";
        link.setAttribute("href", data.books[i].detalle);
        link.setAttribute("data-fancybox"  ,  "images");
         
        var linkDiv = document.createElement("div");
        linkDiv.setAttribute("class","linkdiv");



        front.append(imgPortada);
        back.append(tituloDiv);
        tituloDiv.append(titulo);

        flipper.append(front, back);
        flipContainer.append(flipper);
        myContainer.append(flipContainer);
         back.append(descriptionDiv);
        descriptionDiv.append(description);
        back.append(linkDiv);
        linkDiv.append(link);





    }
}

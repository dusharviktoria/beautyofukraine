function readMore(city) {
  let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
  let moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
  let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Read less";
    moreText.style.display = "inline";
  }
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



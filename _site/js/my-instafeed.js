document.addEventListener("DOMContentLoaded", function() {
 $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");

 var tutorialFeed = new Instafeed ({
  get: 'user',
  userId: '2362436988',
  accessToken: '2362436988.7179641.a3b8f099e1044cfa987678ab5a34250c',
  sortBy: 'most-recent',
  resolution: 'standard_resolution',
  template: '<figure class="col-md-4">\n' +
      '        <a href="{{image}}" data-size="1000x1000">\n' +
      '          <img src="{{image}}" alt="placeholder"\n' +
      '            class="img-fluid">\n' +
      '        </a>\n' +
      '      </figure>\n' +
      '\n',

 });

tutorialFeed.run();
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});


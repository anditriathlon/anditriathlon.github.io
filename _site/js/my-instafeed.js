document.addEventListener("DOMContentLoaded", function() {

 var tutorialFeed = new Instafeed ({
  get: 'user',
  userId: '2362436988',
  accessToken: '2362436988.7179641.0864391817f0409781706206c66af726',
  sortBy: 'most-recent',
  resolution: 'standard_resolution',
  template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',

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


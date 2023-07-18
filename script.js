const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
});

const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    console.log(`Image "{image.alt}" is clicked`);
  });
});

(function() {
    (".skills-prog li")
      .find(".skills-bar")
      .each(function(i) {
        (this)
          .find(".bar")
          .delay(i * 150)
          .animate(
            {
              width:
                (this)
                  .parents()
                  .attr("data-percent") + "%"
            },
            1000,
            "linear",
            function() {
              return (this).css({
                "transition-duration": ".5s"
              });
            }
          );
      });
  
    (".skills-soft li")
      .find("svg")
      .each(function(i) {
        var c, cbar, circle, percent, r;
        circle = (this).children(".cbar");
        r = circle.attr("r");
        c = Math.PI * (r * 2);
        percent = (this)
          .parent()
          .data("percent");
        cbar = (100 - percent) / 100 * c;
        circle.css({
          "stroke-dashoffset": c,
          "stroke-dasharray": c
        });
        circle.delay(i * 150).animate(
          {
            strokeDashoffset: cbar
          },
          1000,
          "linear",
          function() {
            return circle.css({
              "transition-duration": ".3s"
            });
          }
        );
         (this)
          .siblings("small")
          .prop("Counter", 0)
          .delay(i * 150)
          .animate(
            {
              Counter: percent
            },
            {
              duration: 1000,
              step: function(now) {
                return (this).text(Math.ceil(now) + "%");
              }
            }
          );
      });
  }.call(this));


  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const contact = {
        name: name,
        email: email,
        message: message
    };

    // Save the contact to local storage
    localStorage.setItem('contact', JSON.stringify(contact));

    alert('Contact saved successfully!');
});
  
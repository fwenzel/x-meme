(function(){
  var memes = [
    'futurama-fry',
    'firstworldproblems'
  ];

  xtag.register('x-meme', {
    lifecycle: {
      created: function() {
        var xtag = this.xtag;

        var container = document.createElement('div');

        var img = document.createElement('img');
        container.appendChild(img);
        xtag.img = img;

        ['header', 'footer'].forEach(function(caption) {
          var captElem = document.createElement(caption);
          container.appendChild(captElem);
          xtag[caption] = captElem;
          console.log(xtag);
        });

        this.appendChild(container);
      }
    },

    events: {
    },

    accessors: {
      header: {
        attribute: {},

        set: function(text) {
          this.xtag.header.textContent = text;
        }
      },
      footer: {
        attribute: {},

        set: function(text) {
          this.xtag.footer.textContent = text;
        }
      },
      type: {
        attribute: {},

        set: function(memetype) {
          if (memes.indexOf(memetype) >= 0) {  // Valid meme.
            this.xtag.img.src = 'http://fwenzel.github.io/x-meme/img/' + memetype + '.jpg';
          } else {
            this.xtag.img.src = '';
          }
        }
      }
    },

    methods: {
    }
  });

})();

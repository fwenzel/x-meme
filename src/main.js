(function(){
  var memes = [
    'bad-luck-brian',
    'condescending-wonka',
    'futurama-fry',
    'first-world-problems',
    'overly-manly-man',
    'scumbag-steve',
    'success-kid'
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
      src: {
        attribute: {},

        set: function(src) {
          this.setAttribute('type', 'custom');
          this.xtag.img.src = src;
        }
      },
      type: {
        attribute: {},

        set: function(memetype) {
          if (memes.indexOf(memetype) >= 0) {  // Valid meme.
            this.removeAttribute('src');
            this.xtag.img.src = 'http://fwenzel.github.io/x-meme/img/memes/' + memetype + '.jpg';
          } else if (memetype !== 'custom') {
            this.xtag.img.src = '';
          }
        }
      }
    },

    methods: {
    }
  });

})();

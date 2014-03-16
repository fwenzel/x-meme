(function(){
  var img_baseurl = 'http://fwenzel.github.io/x-meme/img/memes/';
  var memes = {
    'bad-luck-brian': {},
    'condescending-wonka': {},
    'futurama-fry': {},
    'first-world-problems': {},
    'homer-simpson-bush': {
      filetype: 'gif'
    },
    'overly-manly-man': {},
    'scumbag-steve': {},
    'success-kid': {}
  };


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
          if (memes[memetype]) {  // Valid meme.
            var ext = memes[memetype]['filetype'] || 'jpg';
            this.removeAttribute('src');
            this.xtag.img.src = img_baseurl + memetype + '.' + ext;
          } else if (memetype !== 'custom') {
            this.xtag.img.src = '';
          }
        }
      }
    }
  });


  xtag.register('x-doge', {
    lifecycle: {
      created: function() {
        var xtag = this.xtag;

        var container = document.createElement('div');
        xtag.container = container;

        var img = document.createElement('img');
        container.appendChild(img);
        xtag.img = img;

        // Default to doge background.
        if (!this.hasAttribute('src')) {
          this.type = 'doge';
        }

        this.appendChild(container);
      }
    },

    accessors: {
      src: {
        attribute: {},

        set: function(src) {
          this.setAttribute('type', 'custom');
          this.xtag.img.src = src;
        }
      },
      phrases: {
        attribute: {},

        set: function(phrases) {
          var cont = this.xtag.container;

          // Remove old phrases.
          for (var p of cont.querySelectorAll('.phrase')) {
            p.parentNode.removeChild(p);
          }

          // Add new phrases.
          phrases.split('|').forEach(function(phrase) {
            var p = document.createElement('span');
            p.className = 'phrase';
            p.textContent = phrase;
            cont.appendChild(p);
          });
        }
      },
      type: {
        attribute: {},

        set: function(memetype) {
          if (memetype === '' || memetype === 'doge') {
            this.removeAttribute('src');
            this.xtag.img.src = img_baseurl + 'doge.jpg';
          } else if (memetype !== 'custom') {
            this.xtag.img.src = '';
          }
        }
      }
    }
  });

})();

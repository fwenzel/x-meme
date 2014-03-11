(function(){

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
      },

      inserted: function() {
        if (!(this.hasAttribute('type') && this.getAttribute('type') == 'futurama-fry')) return;
        this.xtag.img.src = 'http://www.quickmeme.com/memes/334.jpg';
      },

      removed: function() {},
      attributeChanged: function() {}
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
      }
    },
    methods: {

    }
  });

})();

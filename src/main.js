(function(){

  xtag.register('x-meme', {
    lifecycle: {
      created: function() {},
      inserted: function() {
        console.log(this);
        if (!(this.hasAttribute('type') && this.getAttribute('type') == 'futurama-fry')) return;

        var container = document.createElement('div');
        var img = document.createElement('img');
        img.src = 'http://www.quickmeme.com/memes/334.jpg';

        container.appendChild(img);
        while (this.firstChild) {
          container.appendChild(this.firstChild);
        }
        this.appendChild(container);
      },

      removed: function() {},
      attributeChanged: function() {}
    },
    events: {

    },
    accessors: {

    },
    methods: {

    }
  });

})();

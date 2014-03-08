# About

This is an experimental web component (using [x-tags](https://github.com/x-tag/core)). I'm mostly playing with the technology, but if I am doing it right, this will end up allowing you to create a meme on the fly.

# Use
Include the CSS and JS files in your project:

```
<link rel="stylesheet" type="text/css" href="x-meme/main.css"/>
<script type="text/javascript" src="x-meme/main.js"></script>
```

And use the web component according to the API description below. For example:

```
<x-meme type="futurama-fry">
    <p>can't tell if satire</p>
    <p>or election year</p>
</x-meme>
```

# Dev Setup

```
Clone this repo.

$ npm install	// install bower tasks
$ bower install	// install components
$ grunt build   // build the dependencies

```

# License

This program is free software; it is distributed under an [MIT License](./LICENSE).

---

Copyright (c) 2014 Fred Wenzel.

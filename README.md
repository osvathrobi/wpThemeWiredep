# wpThemeWiredep
This is a blank WordPress theme that has Grunt, Bower and Wiredep built on HTML5Blank (http://html5blank.com/). You can swap out HTML5Blank to your own theme (or other boilerplates) by replacing the content of the SRC folder. 

With this package you are not required anymore to manually install external 3th party javascript libraries.

Use http://bower.io/search/ to search for javascript packages.

All you need to do is edit ```bower.json```: add the pacakge name and version you require and the grunt task will take care of all the work. The final references are inserted via ```get_template_directory_uri()``` into ```header.php``` (styles) and ```footer.php``` (vendor javascripts).

Prerequisites
-------------

Node, Npm, bower, grunt, grunt-cli


```npm install -g bower```

```npm install -g grunt```

```npm install -g grunt-cli```


Usage
-----

```bower install```

```grunt build```

Build will create the dist folder containing everything you need. You can symlink this to your wordpress theme folder or copy the files over there manually

Workflow
--------

You can issue the ```watch``` command to continuously rebuild the theme while working on the ```src``` folder. (this will move everything into the ```dist``` folder every time something changes)

```grunt watch```

Note
----

All the 3th party JS and CSS are concated into vendor.js and vendor.css and are included via get_template_directory_uri()

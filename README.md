# wpThemeWiredep
This is a blank WordPress theme that has Grunt, Bower and Wiredep built on HTML5Blank (http://html5blank.com/).

Usage
-----

```bower install```

```grunt build```

Build will create the dist folder containing everything you need. You can symlink this to your wordpress theme folder or copy the files over there manually

You can issue the watch command to continuously rebuild the theme while working on the src.

```grunt watch```

Noe
----

All the 3th party JS and CSS are concated into vendor.js and vendor.css and are included via get_template_directory_uri()

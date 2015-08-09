# A framework for fast web development using the Susy grid system.
A simple skeleton for starting your web development. 

## Why?
Because bootstrap, foundation and any other framework out there suck. Big time. You end up with projects that are hard to maintain, filled with messy !important all over your css, and annoying div classes all over your html. They also put lots of additional css on the browser that you are not using. You know what that does? That slows down your site. Yeah, that's right, it makes the kids wait, and you know they hate waiting. Be cool. Hang out with Sass and Susy. Those gals know how to party!

## Requirements
Ruby, Node, Grunt, Susy. I've added all the node modules here so you don't have to downloade them. You might want to keep them up to date though. That's on you.

## How to run
Run the grunt file from the command line: $grunt watch. This will update your project when you change and save a file in _/components/jade, _/components/js, _/components/sass folders.

You can have as many files as you like. All these files will be minified and placed in one file in the _/css and _/js folders respectively. Jade files are converted to individual html files and placed in _/html folder. You can have subfolders in your jade folder, which will be reflected in you html folder. 

## How to change
congig.rb file: change this file if you want to place your css and javascript files in different locations. 

gruntfile.js: change this file if you want to add or remove tasks.

## License
Do whatever you want. Sell it if you can. Tell people though.

## Put together by
Me. 
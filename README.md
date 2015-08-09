# A framework for easy web development with sass
A very simple responsive framework based on susy for web development.

## Requirements
Ruby

Grunt

## How to run
Run the grunt file and you are good to go. Grunt then runs uglify and compass to watch your project.

Sass files go in the _/components/sass folder, javascript files go in the _/components/js folder. You can have as many files as you like. All these files will be minified and placed in one file in the _/css and _/js folders respectively. 

## How to change
congig.rb file: change this file if you want to place your css and javascript files in different locations. 

gruntfile.js: change this file if you want to add additional tasks to your project.
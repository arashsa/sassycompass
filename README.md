# A framework for fast web development with jade and sass
A very simple framework based for web development. Conversion of files are taken care of by Grunt.

## Requirements
Ruby, Node, Grunt.

## How to run
Run the grunt file and you are good to go. It takes care of processing your javascript, sass and jade files.

Sass files go in the _/components/sass folder, javascript files go in the _/components/js folder, jade files go int the _/components/jade folder. You can have as many files as you like. All these files will be minified and placed in one file in the _/css and _/js folders respectively. Jade files are converted to individual html files.

## How to change
congig.rb file: change this file if you want to place your css and javascript files in different locations. 

gruntfile.js: change this file if you want to add additional tasks to your project.
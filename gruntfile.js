module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					// the files to compress, to <- from [list of files to compress, * compresses all fils in folder]
					'_/js/script.js': ['_/components/js/*.js']
				}
			}
		},
		jade: {
			compile: {
				options: {
					client: false,
					pretty: true
				},
				files: [{
					cwd: "_/components/jade",
					src: "**/*.jade",
					dest: "_/html",
					expand: true,
					ext: ".html"
            }]
			}
		},
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			jade: {
				files: ['_/components/jade/**/*.jade'],
				tasks: ['jade']
			},
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			},
			sass: {
				files: ['_/components/sass/*.scss'],
				tasks: ['compass:dev']
			}
		}
	});

	//	automaticall executes watch
	grunt.registerTask('default', 'watch')
}

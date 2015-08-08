module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
//					the files to compress, to <- from [list of files to compress, * compresses all fils in folder]
					'_/js/script.js': ['_/components/js/*.js']
				}
			}
		},
		
		watch: {
			files: ['_/components/js/*.js'],
			tasks: ['uglify']
		}
	});
	
//	automaticall executes watch
	grunt.registerTask('default', 'watch')
}
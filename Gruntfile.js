module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-inline');
	grunt.initConfig({
		inline: {
			options:{
				tag: '',
				uglify: true,
				cssmin: true
			},
			dist: {
				src: 'dev.html',
				dest: 'index.html'
			}
		}
	});

	grunt.registerTask('default', ['inline']);
};
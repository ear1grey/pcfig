/*global module */
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'expanded',
					lineNumbers: true,
				},
				files: [{
					expand: true,
					cwd: '<%= pkg.folders.src %>/',
					src: ['*.scss'],
					dest: '<%= pkg.folders.build %>',
					ext: '.css',
				}]
			}
		},

        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: '<%= pkg.folders.src %>',
                        src: [
                            '**/*.html',
                            '**/*.svg'
                        ],
                        dest: '<%= pkg.folders.build %>/',
                        filter: 'isFile',
                        flatten: false
                    }

                ]
            }
        },

        watch: {
            files: ['<%= pkg.folders.src %>/**/*'],
            tasks: ['default'],
            options: {
                livereload: true
            }
        },

        'gh-pages': {
            options: {
                base: '<%= pkg.folders.build %>'
            },
            src: ['**']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('default', ['sass', 'copy']);

};

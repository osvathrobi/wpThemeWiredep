'use strict';


module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    var appConfig = {
        app: 'src',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: appConfig,

        wiredep: {
            task: {
                src: [
                    'src/header.php',
                    'src/footer.php'
                ],

                options: {

                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '**'
                    ]
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },
    });

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        //'concat',
        'copy:dist',
    ]);

};
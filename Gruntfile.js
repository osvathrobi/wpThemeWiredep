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
            bower_deppendencies: {
                src: [
                    'src/header.php',
                    'src/footer.php'
                ],
                ignorePath: /\.\.\//
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

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: ['<%= yeoman.app %>/header.php', '<%= yeoman.app %>/footer.php'],
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        usemin: {
            html: ['<%= yeoman.dist %>/header.php', '<%= yeoman.dist %>/footer.php'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>']
            }
        },

        'string-replace': {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['header.php', 'footer.php'],
                    dest: 'dist/'
                }],
                options: {
                    replacements: [{
                        pattern: 'scripts/vendor.js',
                        replacement: '<?php echo get_template_directory_uri(); ?>/scripts/vendor.js'
                    }, {
                        pattern: 'styles/vendor.css',
                        replacement: '<?php echo get_template_directory_uri(); ?>/styles/vendor.css'
                    }]
                }
            }
        },

        'watch': {
            src: {
                files: ['src/**'],
                tasks: ['build'],
            },
        }

    });

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'concat',
        'cssmin',
        'copy:dist',
        'usemin',
        'string-replace'
    ]);


};
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../src/',
            deployPath: '../public/',
            htmlPath: '../views/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        jshint: {
            files: ['../public/javascripts/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: '../src/sass',
                    src: ['*.scss'],
                    dest: '../public/stylesheets',
                    ext: '.css'
                }]
            }
        },

        autoprefixer: {
            options: {
                "browsers": ["last 2 versions", "Firefox >= 20"],
                map: true
            },
            target: {
                files: [{
                    expand: true,
                    cwd: '../public/stylesheets',
                    src: ['*.css'],
                    dest: '../public/c3',
                    ext: '.css'
                }]
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: [{
                    expand: true,
                    cwd: '../public/c3',
                    src: ['*.css'],
                    dest: '../public/mincss',
                    ext: '.min.css'
                }]
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: '<%=meta.srcPath%>html',
                        src: ['**'],
                        dest: '<%=meta.htmlPath%>html'
                    }, {
                        expand: true,
                        cwd: '<%=meta.srcPath%>images',
                        src: ['**'],
                        dest: '<%=meta.deployPath%>images'

                    }, {
                        expand: true,
                        cwd: '<%=meta.srcPath%>sounds',
                        src: ['**'],
                        dest: '<%=meta.deployPath%>sounds'

                    }, {
                        expand: true,
                        cwd: '<%=meta.srcPath%>js',
                        src: ['**'],
                        dest: '<%=meta.deployPath%>javascripts'

                    }
                ]
            }
        },

        watch: {
            scripts: {
                files: [

                    '<%= meta.srcPath %>sass/*.scss',
                    '../public/javascripts/*.js'

                ],
                tasks: [/*'copy:main','autoprefixer', */'sass','jshint'],
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch', 'sass'/*,'autoprefixer','cssmin','copy'*/]);
};
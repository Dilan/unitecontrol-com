module.exports = function(grunt) {

    var checkFiles = [
        '*.js',
        'tests/**/*.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jscs: {
            default: {
                src: checkFiles,
                options: {
                    config: '.jscs.json'
                }
            }
        },
        jshint: {
            default: {
                src: checkFiles,
                options: {
                    jshintrc: '.jshintrc'
                }
            }
        },
        mochaTest: {
            unit: {
                options: {
                    timeout: 5000,
                    reporter: 'spec'
                },
                src: ['tests/**/*.spec.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-jscs-checker');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('check', ['jshint:default', 'jscs:default']);
    grunt.registerTask('test', ['check', 'mochaTest:unit']);
};

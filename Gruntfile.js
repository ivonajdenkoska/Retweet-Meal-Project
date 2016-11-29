module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            js: {
                files: ['**/*.js'],
                tasks: ['jshint']
            },
        },
        jshint: {
            all: ['Gruntfile.js', '**/*.js']
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: '*',
                    base: 'www-root'
                }
            }
        },
        serve: {
            options: {
                port: 9000,
                aliases: {
                    'index': {
                        output: 'index.html'
                    }
                },
                'index': {
                    tasks: ['watch', 'jshint'],
                    output: 'index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-serve');

}


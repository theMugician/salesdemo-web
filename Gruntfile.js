module.exports = function(grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({

        clean:{
            buildDir  : ["build/"]
        },

        concat: {
            salesdemo: {
                src: ["app/app.js","app/src/controllers/*.js", "app/src/services/*.js"],
                dest: "build/salesdemo.js"

            }

        },

        copy:{

            devhtml:{
                src: 'app/html/dev/base-dev.html',
                dest:'build/dev/index.html'
            },
            prodhtml:{
                src: 'app/html/prod/base-prod.html',
                dest:'build/prod/index.html'
            },
            devcss:{
                files: [
                    {expand:true, cwd: 'app/',flatten: false,src:['css/**'], dest:'build/dev/'}
                ]
            },
            prodcss:{
                files: [
                    {expand:true, cwd: 'app/',flatten: false,src:['css/**'], dest:'build/prod/'}
                ]
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-git-release');
    grunt.loadNpmTasks('grunt-version');
};
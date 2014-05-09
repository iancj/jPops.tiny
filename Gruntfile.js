module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Js min task
        uglify: {
            jm: {
                files: {
                    'dist/zepto.jpops.tiny-min.js': ['js/zepto.jpops.tiny.oa.js']
                }
            }
        },
        //Css min task
        cssmin: {
            cm: {
                files: {
                    'dist/zepto.jpops.tiny-min.css': ['css/zepto.jpops.tiny.oa.css']
                }
            }
        }

    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // resgister tasks
    grunt.registerTask('default', ['uglify', 'cssmin']);

};

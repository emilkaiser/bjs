/* global module */
/* jshint strict: false */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          cleanBowerDir: true
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'specs/**/*.js'],
      options: {
        force: true,
        jshintrc: '.jshintrc'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      target: {
        files: {
          'dist/b.js': [
            'src/ie.js',
            'src/number.js',
            'src/async.js',
            'src/device.js',
            'src/dom.js',
            'src/event.js',
            'src/string.js',
            'src/string.slug.js'
          ],
          'dist/plugins/jquery.all.js': ['src/plugins/jquery.parseparams.js']
        }
      }
    },
    jasmine: {
      test: {
        src: 'src/**/*.js',
        options: {
          helpers : 'lib/jquery/jquery.js',
          specs: 'specs/**/*.spec.js'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('default', ['bower', 'jshint', 'uglify', 'jasmine']);
};

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'dist/b.js': ['src/b.hash.js', 'src/b.async.js', 'src/b.dom.js', 'src/b.ie.js', 'src/b.js.js', 'src/b.prototype.js', 'src/b.rnd.js', 'src/b.timer.js', 'src/b.track.js'],
          'dist/b.async.js': ['src/b.async.js'],
          'dist/b.dom.js': ['src/b.hash.js', 'src/b.dom.js'],
          'dist/b.hash.js': ['src/b.hash.js'],
          'dist/b.ie.js': ['src/b.ie.js'],
          'dist/b.rnd.js': ['src/b.rnd.js'],
          'dist/b.timer.js': ['src/b.timer.js'],
          'dist/b.track.js': ['src/b.track.js'],
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};

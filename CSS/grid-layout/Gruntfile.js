"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        options: {
          compress: false,
          optimization: 2
        },
        files: {
          "css/style.css": "less/style.less",
        }
      }
    },
    watch: {
      less: {
        files: ["less/**/*.less"],
        tasks: ["less"],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch"); // Run tasks whenever watched files change.
  grunt.loadNpmTasks("grunt-contrib-less"); //
  /*     grunt.loadNpmTasks('grunt-contrib-cssmin'); // Compress CSS files. 
    grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify files with UglifyJS. */

  grunt.registerTask("default", ["less", "watch"]);
};

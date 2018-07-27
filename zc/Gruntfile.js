'use strict'
module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        , uglify: {
	     	dist: {
		    	options: {
			    	mangle: true,
			    	compress: {}	
			    },
			    files: {
			    	'js/vendor.min.js': [
						'node_modules/jquery/dist/jquery.js',
			    		'node_modules/bootstrap/dist/js/bootstrap.js',
						'node_modules/fullpage.js/dist/jquery.fullpage.js',
						'node_modules/nouislider/distribute/nouislider.js',
						'node_modules/odometer/odometer.js'						
			    	],
					'js/app.min.js': [
			    		'js/app.js',
						'js/messenger.js'
			    	],
					'js/shopifyapp.min.js': [
			    		'js/shopifyapp.js'
			    	],
					'js/pricing.min.js': [
			    		'js/pricing.js'
			    	]
		        }	
		    }   
	    }
        , less: {
	    	development: {
		    	options: {
			    	compress: true,
			    	yuicompress: true,
			    	optimization: 2
			    },
			    files: {
					// 'css/vendor.css' : [
					// 	'node_modules/bootstrap/dist/css/bootstrap.css',
					// 	'node_modules/fullpage.js/dist/jquery.fullpage.css',
					// 	'node_modules/animate.css/animate.min.css'
					// ],
					// 'css/app.css' : [
					// 	'less/**/app.less',
					// 	'less/**/preview-devices.less'
					// ],
					// 'css/shopifyapp.css' : [
					// 	'less/shopifyapp.less'
					// ],
					// 'css/pricing.css' : [
					// 	'less/pricing.less'
					// ],
					'css/features.min.css' : [
						'less/features.less'
					]
					
				}	
		    }    
	    }
	    , cssmin:{
		    compress:{
			    files:{
					// 'css/vendor.min.css': [
					// 	'css/vendor.css'
					// ],
					// 'css/app.min.css': [
					// 	'css/app.css',
					// 	'css/icomoon.css'
					// ],
					// 'css/shopifyapp.min.css': [
					// 	'css/shopifyapp.css'
					// ],
					// 'css/pricing.min.css': [
					// 	'css/pricing.css'
					// ],
					// 'css/features.min.css': [
					// 	'css/features.css'
					// ]
				}
			}
		}
	    , watch: {
		    scripts: {
				files: ['js/**/*.js'],
				tasks: ['uglify'],
				options: {
					debounceDelay: 250,	
				}
			},
			less:{
				files: ['less/**/*.less', 'css/**/*.css']
				, tasks: ['less', 'cssmin']
				, options: {
					livereload : true	
				}
			}    
		}
    });



    /*
    grunt.registerTask('hello', function(){
	console.log('hello world from Grunt');
    });
    */
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['uglify', 'less', 'cssmin', 'watch']);
};
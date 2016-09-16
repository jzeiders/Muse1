module.exports = function(grunt) {
	grunt.initConfig({
		meta: {
			commonFiles: {
				src: [
					'./www/lib/ionic/js/ionic.bundle.js',
					'./www/lib/ngCordova/dist/*.js',
					'./www/js/app.js',
					'./www/js/controllers/*.js',
					'./www/js/services/*.js',
					'./www/lib/*.js',
					'./www/lib/angular-mocks/angular-mocks.js'
				]
			}
		},
		watch: {
			karma: {
				files: {
					src: [
						'<%= meta.commonFiles %>',
						'./tests/unit-tests/spec-controller-helper.js',
						'./tests/unit-tests/controllers/*.js',
						'./tests/unit-tests/spec-service-helper.js',
						'./tests/unit-tests/services/*.js',
						'./tests/unit-tests/classes/*.js'
					]
				},
				tasks: ['karma:controllers:run', "karma:services:run"]
			},
			build: {
				files: {
					src: ["www/**/*"]
				},
				tasks: ["buildIos", "buildAndroid"]
			}
		},

		karma: {
			options: {
				configFile: 'karma.conf.js',
				background: true,
				singlerun: false
			},
			controllers: {
				files: [
					'<%= meta.commonFiles %>', {
						src: './tests/unit-tests/spec-controller-helper.js'
					}, {
						src: './tests/unit-tests/controllers/*.js'
					}
				]
			},
			services: {
				files: [
					'<%= meta.commonFiles %>', {
						src: './tests/unit-tests/spec-service-helper.js'
					}, {
						src: './tests/unit-tests/services/*.js'
					}
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-karma');
};

module.exports = function(grunt) {
    // Loads each task referenced in the packages.json file
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    // Initiate grunt tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        moment: require('moment'),
        // Tasks
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: [],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false,
                pushTo: 'upstream',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: 'beta',
                regExp: false
            }
        }

    });

    grunt.registerTask('default', ['bump']);


    grunt.registerTask('major', ['bump:major']);
    grunt.registerTask('minor', ['bump:minor']);
    grunt.registerTask('path', ['bump:patch']);
    grunt.registerTask('beta', ['bump:major']);

};

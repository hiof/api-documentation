# API documentation

## About

Documentation for the public HiØ API (this will be embedded in future API-service-layer)

## Copyright

- This project is distributed under a  GNU General Public License v3 - Take a look at the COPYING file for details.

## API Versions

### V1

#### About

Each endpoint is documented by a readme withing the *endpoint folder*.


## Documentation versions

Documentation is versioned with the same major version as the API itself. Minior and patch versions are done to keep the documentation in line with the functionality of the API.

The `grunt-bump plugin is used to update the version of the `package.js` file and the repositiory with the a commit message and a `git-tag`.

- Update major: `$ grunt bump:major`
- Update minor: `$ grunt bump:minor`
- Update patch: `$ grunt bump:patch`
- Update prerelease: `$ grunt bump:prerelease`

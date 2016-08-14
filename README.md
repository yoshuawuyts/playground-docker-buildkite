# playground-docker-buildkite [![stability][0]][1]
[![docker hub][2]][3]
[![js-standard-style][10]][11]

Testing out buildkite.

## Features
- create development and production docker images
- run tests inside container
- semantically tag containers
- release to docker hub for successful builds on master

## Usage
This repository is a member of the [module party](http://module.party/):
```txt
npm install   install dependencies
npm start     start the server
npm test      run tests
```

## Releases
All releases are [semver][semver] compliant [docker][docker] containers:
```txt
latest        the latest optimized image
base          the latest base image
x.y.z         an optimized image at version x.y.z
x.y.z-base    an base image at version x.y.z
```

## Installation
```sh
$ docker pull yoshuawuyts/playground-docker-buildkite:latest
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[docker]: https://www.docker.com/
[semver]: http://semver.org/
[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/badge/docker-ok-blue.svg?style=flat-square
[3]: https://hub.docker.com/r/yoshuawuyts/playground-docker-buildkite/tags/
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard

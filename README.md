# random-dog-generator

## Development

* `npm ci`
* `npm start`

The app will be available at http://0.0.0.0:8080/

## Contributing
### Code quality
#### Manual

* To lint files run `npm run lint`
* To format code run `npm run prettier`

Both accept `:fix` parameter that'll try to automatically fix whatever is possible.

##### Editor

I recommend to set up your code editor of choice to prettify and lint files `on type` or `on save`.

#### Git hooks
I have set up two git hooks to lint and test files

* `Pre-commit` - run prettier and eslint on files staged for commit, add modified/fixed files to commit
* `Pre-push` - run prettier, eslint and jest on all files. Push will fail if any of these fail.

#### Insightful links on code review process
 - [On Empathy & Pull Requests](https://slack.engineering/on-empathy-pull-requests-979e4257d158)
 - [How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)
 - [The anatomy of a pull request](https://medium.com/@hugooodias/the-anatomy-of-a-perfect-pull-request-567382bb6067)
 - [On Writing a Great Pull Request](https://blog.codeminer42.com/on-writing-a-great-pull-request-37c60ce6f31d)

## Testing

* `npm test` - Watch files for changes and rerun tests related to changed files.
* `npm test:verbose` - Watch files & display individual test results with the test suite hierarchy.
* `npm test:coverage` - Run tests and open coverage report
* `npm test:ci` - Run all tests once

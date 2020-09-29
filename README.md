# random-dog-generator

## Task
 
1. Use open dog api https://dog.ceo/dog-api/documentation/
1. Fetch all dog breeds and display as buttons with breed names
1. On button click a modal opens. Modal shows random image of chosen breed.
1. Modal has two buttons: close modal, fetch another random image of chosen breed

## Installation

```bash
git clone git@github.com:kzadurska/random-dog-generator.git
cd random-dog-generator
npm ci
```

## Development

`npm start`

The app will be available at http://0.0.0.0:8080/

## Contributing

* To lint files run `npm run lint`
* To format code run `npm run prettier`

Both accept `:fix` parameter that'll try to automatically fix whatever is possible.

## Deployment

`npm run deploy` and visit https://kzadurska.github.io/random-dog-generator/
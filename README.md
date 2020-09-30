# random-dog-generator

## Task
 
1. Use open dog api https://dog.ceo/dog-api/documentation/
1. Fetch all dog breeds and display as buttons with breed names
1. On button click a modal opens. Modal shows random image of chosen breed.
1. Modal has two buttons: close modal, fetch another random image of chosen breed

### What I considered doing but did not in the end

- Have separate actions for resetting image and chosen breed to null. I would definitely consider adding these in a larger app, but here it kind of seems over the top.
- Add loading state and a loader component. This app is tiny and the connection to API is instant, so I decided not to add it, because the loader would flash for a split second and look more of a glitch than a UI effect anyway.
- Error catching. Right now I am relying on stability of the dog API. I had some problems catching errors correctly and displaying a message. 
- Use an external UI library. I added some basic styling but not installed any library. I do not know any on the top of my head and looking for one and playing with it woulkd add a few hours to the task. As would adding some concrete styles here. I went for simplicity. 

## Installation

```bash
git clone git@github.com:kzadurska/random-dog-generator.git
cd random-dog-generator
npm ci
```

## Development

`npm start`

The app will be available at http://0.0.0.0:8080/

For production build type `npm run build`, the app will be built into the `/dist` directory.

## Contributing

* To lint files run `npm run lint`
* To format code run `npm run prettier`

Both accept `:fix` parameter that'll try to automatically fix whatever is possible.

## Deployment

`npm run deploy` and visit https://kzadurska.github.io/random-dog-generator/
# Pastille

A percentage indicator chart thing for Angular

![pastille](https://user-images.githubusercontent.com/14852491/63027254-86621680-bea4-11e9-880e-518b5fb32f81.gif)

## Usage

In your module:

```js
import { PastilleModule } from 'pastille';

@NgModule({
  ...
  imports: [
    ...
    PastilleModule
    ...
  ],
  ...  
})
```

In your template:

```html
<lib-pastille [stats]="stats"></lib-pastille>
```

Where `stats` is in the following format:

```js
stats = [{
  name: 'Downloaded',
  value: 50,
  color: '#8bc34a'
}, {
  name: 'Failed',
  value: 30,
  color: '#f44336'
}, {
  name: 'Not downloaded',
  value: 20,
  color: '#cfd8dc'
}]
```

## Development

### Build

Run `ng build pastille` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build pastille`, go to the dist folder `cd dist/pastille` and run `npm publish`.

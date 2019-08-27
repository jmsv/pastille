# Pastille

[![Pastille build CI status](https://github.com/jmsv/pastille/workflows/Pastille%20build%20CI/badge.svg)](https://github.com/jmsv/pastille/actions)

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
<lib-pastille [data]="data"></lib-pastille>
```

Where `data` is in the following format:

```js
data = [{
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

`npm start` runs the example app on `localhost:1337`

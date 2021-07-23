# test-imc-s

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### JSON VALIDATE
```
[
  {
    "type": "container",
    "code": "k1",
    "parent": null
  },
  {
    "type": "input",
    "code": "c1",
    "parent": "k1"
  },
  {
    "type": "datepicker",
    "code": "c2",
    "parent": "k1"
  },
  {
    "type": "container",
    "code": "k2",
    "parent": "k1"
  },
  {
    "type": "list",
    "code": "с3",
    "parent": "k2",
    "listdata": [
      {
        "key": 1,
        "value": "мужской"
      },
      {
        "key": 2,
        "value": "женский"
      }
    ]
  },
  {
    "type": "input",
    "code": "c4",
    "parent": "k2"
  }
]
```

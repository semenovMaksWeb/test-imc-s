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
npm install -g serve
serve -s dist

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

![image](https://user-images.githubusercontent.com/80784471/126782239-dd91837d-8f39-4f26-ae09-d4b7a206adee.png)
![image](https://user-images.githubusercontent.com/80784471/126782318-cce32525-0b80-4eb9-92ae-55bec18851d5.png)
![image](https://user-images.githubusercontent.com/80784471/126782452-ebf82811-566a-4545-afe4-36cff94cc719.png)



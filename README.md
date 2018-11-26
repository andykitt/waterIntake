# waterIntakeApp

This waterIntakeApp allows users to log their daily water intake. Built with MongoDB, Express, React and NodeJS.

Users can :

- Log daily water intake.
- Set daily water consumption target.
- View water consumption from previous days.
- View a log of daily intake.

## HOW TO USE

### Heroku App:

[https://arcane-gorge-65762.herokuapp.com/]

### Full App:

- Create a empty mongoDB database at https://mlab.com/.
- add a keys_dev.js in ./config folder and include :

```
module.exports = {
  mongoURI:
    'mongodb://heroku_xjwj109w:vvdkh5g7l9lthblgtvos8a0acq@ds245240.mlab.com:45240/heroku_xjwj109w'
};
```

- run `npm run dev`

### Client-only:

- run `npm run client-install`

### Wireframes.

See waterIntake.sketch in repo.

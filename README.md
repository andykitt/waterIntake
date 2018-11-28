# waterIntakeApp

This waterIntakeApp allows users to log their daily water intake. Built with MongoDB, Express, React and NodeJS.

Users can :

- Log daily water intake.
- Set daily water consumption target.
- View water consumption from previous days.
- View a log of daily intake.

## How to use

### Heroku App:

[https://arcane-gorge-65762.herokuapp.com/]

### Full App:

- Create a empty mongoDB database at https://mlab.com/.
- add keys_dev.js in ./config folder and include :

```
module.exports = {
  mongoURI:
    'mongodb://<dbuser>:<dbpassword>@<dbhost>'
};
```

- run `npm run dev`

### Client-only:

- run `npm run client-install`

### Wireframes.

See waterIntake.sketch in repo.

## TO DO:

- Dockerise.
- Travis integration.
- Add Tests. 

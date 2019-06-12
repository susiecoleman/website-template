# Website template

Allows you to:

- Visualise items in a grid
- Get data from a backend
- Query APIs

## Seting up the application

Run `yarn install`

Sensitive information such as API keys are stored in the `.env` file when developing locally. This file needs to contain:

```
WEATHER_API_KEY=key
```

To allow the app to access:
[Open Weather Map](http://api.openweathermap.org)

## Running the application

Run `node server.js`

The application will now be available at [http://localhost:5000](http://localhost:5000/)

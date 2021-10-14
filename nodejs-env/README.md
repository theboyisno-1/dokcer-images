# Environment variable test with nodejs
With this nodejs + express server we check values for any environment variable available to it. In order to access variable value hit `localhost:3000/get/<NAME-OF-ENV-VAR>`

## Usage

Lets assume we want to check value of env var 'NODE_ENV' and our express server is running on `localhost:3000`. For this we can hit `localhost:3000/get/NODE_ENV`

NOTE: Response can be check on browser as well as in express process logs.
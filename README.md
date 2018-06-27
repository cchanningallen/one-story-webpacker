## Basis
Working off this tutorial: https://x-team.com/blog/get-in-full-stack-shape-with-rails-5-1-webpacker-and-reactjs/

Credit: [Andy Bernov](https://x-team.com/blog/author/andy-barnov/)

## Startup

```
bundle exec rails s
./bin/webpack-dev-server
```

## Status

* First session was just experimenting. Decided to stick with this to fully vet webpacker, and to make non-react views (looking at you, ActiveAdmin) work on Heroku without a hitch.

* Next time:
  * Finish refactoring React components from the original one-story repo into this one
  * Git init and deploy
  * Add AdminUser & User auth
  * Get text-to-record working 

## Setup

```
bundle install
bundle exec rake db:create db:migrate db:seed
bundle exec rails s
./bin/webpack-dev-server
```

### Twilio

  1. Run this locally:
    ```bash
    ngrok http 3000
    ```
  1. Save randomly-generated URL in Twilio console:
  https://www.twilio.com/docs/voice/client/tutorials/how-to-set-up-a-server-for-twilio-client#running-locally-using-ngrok
  1. Profit.

## Misc

### Find an icon

https://material.io/tools/icons/?style=baseline

```
import CamelCasedIconName from '@material-ui/icons/CamelCasedIconName';
```

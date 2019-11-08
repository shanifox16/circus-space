# Circus Space

[![Codeship Status for shanifox16/circus-space](https://app.codeship.com/projects/acd6da70-d682-0137-38f5-2ee50a1757e6/status?branch=master)](https://app.codeship.com/projects/370596)

## Description

Welcome to Circus Space - a communication platform and video repository for circus instructors and students.

Please visit the application here:
[Circus Space](https://circusspace.herokuapp.com/)

## Authentication

Circus Space relies on logging in through Google as an instructor or student.

To view the instructor workflow, please log in using Google with these credentials:
```
email: circusspaceinstructor@gmail.com
password: circusspace
```
To view the student workflow, please log in using Google with these credentials:
```
email: circusspacestudent3@gmail.com
password: circusspace
```

## Technologies

* Ruby - 2.6.5
* Rails - 5.2.3
* React - 16.8.0
* CarrierWave - 2.0.2
* Foundation-Rails - 6.5.3.0
* Omniauth-Google-Oauth2 - 0.8.0
* Google-Api-Client - 0.34.0
* HTTParty - 0.17.1

## To Run Locally

* Download the Repo
* 'yarn install' and 'bundle install' from your terminal
* create the database: 'bundle exec rake db:create', 'bundle exec rake db:migrate'
* You will need IDs and secrets for AWS, Google, and Mailchimp. Please review the .env.example file for all IDs that are needed
* The seed data is up to date and ready to use, but assumes that 4 initial users have been set up through Google
* 'yarn run start' and 'rails s'
* Navigate your browser to localhost:3000
* Run test suite with `yarn test` and `rspec`

## Author

Shani Fox

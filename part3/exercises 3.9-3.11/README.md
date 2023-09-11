### LINK TO THE CURRENT APLICATION

[Phonebook-App](https://blue-sea-1851.fly.dev/)

```Note: If you are using Fly.io, Fly may create 2 machines for your app, if it does then the state of the data in your app will be inconsistent between requests, i.e. you would have two machines each with there own notes variable, you could POST to one machine then your next GET could go to another. you can check the number of machines by using the command "$ fly scale show", if the COUNT is greater than 1 then you can enforce it to be 1 with the command "$ fly scale count 1". The machine count can also be checked on the dashboard.```
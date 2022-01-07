# Installation

Run the following commands

 - git clone https://github.com/carlosmarinho/taller-exam.git
 - cd taller-exam
 - npm install
 - npm run start

# Tecnologies used

 - React
 - Hooks
 - Redux
 - Redux Thunk
 - CSS in JS (Styled Components)
 - Jest
 - React Testing Library
# About the application

## Development

I started developing the application and decided to use Styled Components, redux with redux thunk, although it's a small application as it grows redux scalle very well, it sounded a good idea to show how an real application should be developed.

## Refactoring

- We should refactor the search, that i used simple es6 functions to filter the result.
- We should refactor the fetch type_device when we have an endpoint that can handle it.
- We should improve some apicalls using useCallback and maybe debounce to improve it's performance.
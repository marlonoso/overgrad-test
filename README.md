# Overgrad Test

## Installation

`git clone origin overgrad-test`

`cd overgrad-test`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

`npm install`

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Technical approach

- The project was built using functional components.
- I choose axios as the API communication library.
- I separated the index, show and edit actions much like rails does, but instead of navigating to routes, the Show and Edit actions live in a common modal component.
- The traversing of the students array happens in the Show modal.
- I adventured myself by using a DRY approach for rendering the fields, traversing the Student object attributes. It might not be the right approach in a real project, but it was fun to try it for the first time.

# Improvements I would make with more time (TODOs)

- Adding PropTypes and Default props
- Better styling
- Separating axios actions in a service object
- Actually editing the record, since is not happening
- Enabling/Disabling Next and Prev buttons
- Fixing console warnings
- Addressing ESLint suggestions
# SearchSpring task...

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# npm run dev

to start run the project in development mode

# npm run build

to build the project

# tech stack

reactjs
redux-toolkit
material UI

# flow

LandingPage is main component where data fetching is done using fetch()

Paginate --- displays pagination and updates state inside landingPage via callback functions. that triggers fetching data with updated page number.

ProductCard -- simple product card --> has thumbnail, name, price, msrp and buy button.

Cart and Fotter are simple components. when we click Buy button cart will show the total items in cart as a badge. this is implemented using Redux- state management.

# cartSlice redux-toolkit

it is responsible for updating the cartCount via dispatch() using actions and payloads.

# background

simple gradient on body.

# Fallback UI.

fetching data from api can take a time to display data, so i added fallback UI -- a simple spinner animation.

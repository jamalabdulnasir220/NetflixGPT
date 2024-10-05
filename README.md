# Netflix GPT

- Create React App used for the project
- Configured Tailwind CSS in our App
- Header built
- routing 
- Login Form built
- Sign Up form built
- Form validation
- useRef Hook used
- Firebase setup
- Deploying to production
- Sign Up user Account
- Sign In User Implemented
- Created a redux store to manage userSlice
- Implemented Sign OUt
- updated the profile
- BugFix: Sign Up user display name and photoURL updated
- BugFix: if the user is not logged in, and tries to access /browse, redirect to the login page /, and vice versa
- We unsubscribed to the onAuthStateChanged callback, that is when the header component umounts, we unsubscribe.
- Added hard coded values to the constant file
- Registered for the TMDB API and get access token
- Get data from TMDB now playing movie api
- movie slice created and movies list from api added to the store.
- custom hook created for fetching the movieList api data and updating the store
- planning for main container and secondary container
- custom hook for fetching trailer video using movie id and storing it in the store inside the moviesSlice
- embedded the youtube video and made it autoplay and mute
- Tailwind classes added to make main container look good
- Fetch moviesList with different api endspoints (now playing, popular, upcoming, top rated)
- built GPT search component
    - built GPT search Bar
    - built GPT 
- (Big Feature) Incorporated a multi language feature in the gpt search component
- get openAi key
- built the gpt feature to recommend movies 
- pass the recommend movies to the tmdb search api to get movies and display in a movielist
- implemented memoization in the api calls 
- made my app mobile responsive

# Features

- Login/Sign UP Page or Route

  - Header without the user object
  - Sign Up / Sign In form
  - redirect to the browse page

- Browse Page - Browse Route (after authentication)

  - Header
  - Main Movie
    - Trailer in the background
    - Title and Description
    - Movie Suggestions
      - Movie list \* n (row of movie list)

- Netflix GPT
  - Search bar
  - movie suggestions

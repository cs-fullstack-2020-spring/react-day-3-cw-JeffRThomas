# React Day 3 CW
### Since we had an unexpected half day all students will receive a 4/5 if an assignment will all necessary components created as submitted on time. The final point will be added on if the app meets requirements. 
### You're not rendering the child components in the Favorites component. Also you can run multiple lines of code in one set of curly braces in the return statement
### Score : 3/5

Create a react app called `user-media-favorites-app`. Create a class based component called `Favorites`. In the `Favorites` component render `<h1> This is a list of your favorite movies and albums</h1>` and two child components `Movies` and `Albums`. In the `Favorites` component prompt the user to enter their favorite movie, then prompt the user to enter their second favorite movie. Store both movies in a movie array and pass this array to the child component  `Movies`. Also prompt the user for the favorite album and their second favorite album. Store both albums in an album array and pass this array the the child component `Album`. In each child component print the message `Child component mounted` using a lifecylce method. Also iterate through the passed arrays rendering each element as an h3 tag. Display the `Movies` component and `Albums` component side by side.
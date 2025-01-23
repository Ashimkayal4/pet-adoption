## Project Name: Adopt-a-Pet Hub

### Short Description of the Project
This project is a pet adoption application that fetches and displays pet data dynamically from an API. Users can view different categories of pets, adopt them through a modal countdown, and see detailed information about each pet. The application features a user-friendly interface built with HTML, CSS (Tailwind), and JavaScript, enhancing the experience of browsing and adopting pets.

### 5 Key Features of the Project
1. **Dynamic Pet Categories**: The application fetches pet categories from an API and dynamically creates buttons for each category. Users can click these buttons to view pets belonging to the selected category.

2. **Pet Details Modal**: When a user clicks on a pet's details button, a modal appears with detailed information about the pet, including breed, birth date, gender, vaccination status, and price.

3. **Countdown Timer for Adoption**: When a user clicks the "Adopt" button, a modal with a countdown timer appears. The modal closes automatically after three seconds, enhancing the adoption experience.

4. **Responsive Design**: The application is built using Tailwind CSS for responsive design, ensuring a seamless experience on both mobile and desktop devices.

5. **Clicking like button added pets thumnail into a div**

### ES6 Features Used
1. **Arrow Functions**: The code utilizes arrow functions for concise function declarations, improving readability.

2. **Template Literals**: Template literals are used for easier string interpolation and multi-line strings, allowing dynamic HTML content creation (e.g., `createDiv.innerHTML = ``.

3. **Destructuring Assignment**: Destructuring is employed to simplify variable extraction from objects (`const { breed, date_of_birth, gender, price } = data`).

4. **Promises**: The use of Promises with .then() for handling asynchronous API calls is evident throughout the code, providing a clean and manageable way to work with asynchronous operations.

5. **Let and Const**: The code makes use of `let` and `const` for variable declarations, ensuring block scope and reducing errors related to variable hoisting.

6. ## live link : https://pet-hub-assignment-6.netlify.app/

### Exercise 1: 
**Create a basic back-end application with multiple web servers running on different ports.**

I set up two different servers running on ports **3000** and **3001**.

---

### Exercise 2:
**Based on the ‘add’ route example from the slides, create routes for ‘subtract’, ‘divide’, and ‘multiply’ to handle the four core mathematical operations.**

I created a simple calculator API with routes for all four operations to make it easier to understand and experiment with the concept.

---

### Exercise 3:
**Extend your `calculator.html` so it allows the user to access all 4 server-side calculator routes from Exercise 2 (Add, Multiply, Divide, Subtract) through a basic calculator interface.**

I organized the code by implementing the operations in `calculatorLib.js` for cleaner structure and functionality.

---

### Exercise 4:
**Use the Express App template from Exercise 4 (m5lab4_expressapp from Google Drive) to implement the following tasks in `friendRoutes.js`**:
- **Part 1**: Add support to the ‘filter’ endpoint for a new query parameter `letter` to filter friends by starting letter.
- **Part 2**: Modify the ‘info’ route to return only the `user-agent`, `content-type`, and `accept` headers.
- **Part 3**: Modify the dynamic GET route to return a single friend object matching the dynamic `id` request parameter.
- **Part 4**: Complete the PUT route to update data for an existing friend, with some basic data validation.

I tested all these tasks with various data inputs in a separate file.

---

### Exercise 5:
**Expand on the previous exercises by updating your application to use controllers instead.**

I created `calculatorController.js` to handle the logic, separating concerns between routing and business logic.

---

### Exercise 6:
**Add unit tests for each of the calculator operations, and run them to ensure all routes are working correctly and returning the expected results.**

I was able to conduct unit tests using Postman and verified the results in the terminal. For example:
- **Request**:  
  `http://localhost:3000/calculator/add?num1=5&num2=3`
- **Postman result**:  
  ```json
  { "result": 8 }
  ```
- **Terminal log**:  
  `ID: 565664, Operation: Addition, Result: 8`

---

### Exercise 7:
**Part 1**: Expanded the application to use a `Calculator` library for handling the calculations, and integrated it into the code.

**Part 2**: Modified the library to generate a random number as the ID instead of using the time, ensuring no two objects have the same ID.

**Part 3**: Created a generic logging library to log a message containing at least the ID of the caller and the result. Each log has output to the console with every operation.

**For Example**
# nodemon index.js
[nodemon] 3.1.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
App 1 listening at http://localhost:3000
App 2 listening at http://localhost:3001
ID: 201388, Operation: Addition, Result: 8
ID: 716138, Operation: Subtraction, Result: 2
ID: 105386, Operation: Multiplication, Result: 15
ID: 473386, Operation: Division, Result: 2

---

### Exercise 8:
**Part 1**: Write the Swagger specification for the entire project, documenting all the API endpoints.

**Part 2**: Final Module Project  
Using the knowledge gained from this module, recreate the **Fake eCommerce Store** from Module 4:
- Move your frontend files to the `public` folder.
- Create an Express back-end to handle all third-party data fetching using `axios`.
- The front end will now fetch data from the backend instead of the Fake Store API directly.
- Follow a clean MVC structure and use Swagger to document the API, making it easy to read and test.

This exercise is implemented in a separate application.


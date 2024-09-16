Labs 1-3
### Summary Lesson: Building a Simple Calculator with Node.js and Express

#### What We Did Today:

1. **Setting Up the Server**:
   - We used **Node.js** with **Express** to create a web server.
   - We created two servers (`server1` and `server2`), with `server1` being used to handle our calculator operations and serve our HTML file.

   **Key Concept**: A server is a computer that listens for requests and sends back responses, like a waiter in a restaurant. In this case, we made a server that can do math!

2. **Creating Calculator Routes**:
   - We created different routes (or "paths") for math operations like **Add**, **Subtract**, **Multiply**, and **Divide**.
   - Each route was connected to a specific URL, like `/calculator/add`, `/calculator/subtract`, etc. These routes allow us to perform calculations based on numbers provided by the user.

   **Key Concept**: A "route" in programming is like a pathway that leads to a specific function. When we visit a URL like `/calculator/add?num1=5&num2=3`, the server knows to take those two numbers and add them together.

3. **Fetching Data with the Front-End**:
   - We built a simple HTML page with input fields for two numbers and buttons to perform the math operations.
   - When a button is clicked, it sends the numbers to the server using a function called `fetch()`, which sends a request to the server and gets the result back.

   **Key Concept**: The front-end (the web page) and back-end (the server) work together. The front-end sends the numbers to the back-end to do the math, and the back-end sends the result back to the front-end to show to the user.

4. **Handling and Displaying Results**:
   - Once the server does the math, it sends the result back in a **JSON** format (a way to send data that looks like text).
   - We displayed the result on the web page using JavaScript.

   **Key Concept**: JSON is like a little package of data that the server sends to the front-end. The front-end can open the package and show the result.

5. **Logging Results in the Terminal**:
   - We also made sure that the server prints the results of the calculations in the terminal using `console.log()` so we could track what's happening on the back-end.

   **Key Concept**: The terminal is like a logbook where the server writes down what it’s doing. This helps us understand what's going on behind the scenes.

---

### Key Terms:
- **Server**: A computer or program that listens to requests and sends back responses.
- **Route**: A pathway that tells the server what function to run based on the URL.
- **Front-End**: The part of the website the user interacts with (HTML, CSS, JavaScript).
- **Back-End**: The part of the website that handles logic and calculations (Node.js/Express).
- **Fetch**: A function used by the front-end to send data to the server and get a response.
- **JSON**: A format for sending and receiving data between the server and the front-end.

---

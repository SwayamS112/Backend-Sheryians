# 🚀 Middleware Example with Express.js  

---

## 📽 Reference Tutorial  
[Watch here on YouTube](https://youtu.be/Q-icS7yZz5k?si=kl5OtZxm0FW9muEa)  

---

This project demonstrates how **middlewares** work in an Express.js application.  
It covers:  
- ✅ Built-in middlewares  
- ✅ Custom middlewares  
- ✅ Third-party middlewares (using `morgan`)  

---

## 📌 What are Middlewares?  
In Express, **middleware functions** are functions that have access to the request (`req`), response (`res`), and the `next` function.  
They can:  
- Execute code  
- Modify the request/response objects  
- End the request-response cycle  
- Call the next middleware in the stack  

---

## ⚙️ Types of Middlewares  

1. **Built-in Middlewares** → Provided by Express (like `express.json()`, `express.static()`).  
2. **Custom Middlewares** → Functions we write ourselves.  
3. **Third-Party Middlewares** → Installed from npm (like `morgan`, `helmet`, etc.).  

---

## 📂 Example Code  

### 1. Third-Party Middleware – `morgan`  
```js
const morgan = require("morgan");  

// Logs details of every request (method, route, status, response time)
app.use(morgan('dev'));

📌 Example Output in console when hitting /profile:
```

```bash 
GET /profile 200 5.123 ms - 12
```

2. Custom Middleware (Global)
```js
app.use((req, res, next) => {
    console.log("This is middleware");

    const a = 1;
    const b = 2;
    console.log(a + b); // 3

    next(); // Pass control to the next middleware/route
});
```

📌 Example:

When you open any route, this middleware runs first and prints:
```bash
This is middleware
3
```


3. Route-Specific Middleware
```js
app.get("/about", (req, res, next) => {
    const a = 5;
    const b = 6;
    console.log(a + b); // 11

    next(); 
}, (req, res) => {
    res.send("About page");
});
```

📌 Example:

When you hit /about, it first prints 11 in the console and then shows:
```bash
About page
```
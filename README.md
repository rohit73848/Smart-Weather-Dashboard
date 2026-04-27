# Smart Weather Dashboard 🌤️

A JavaScript mini-project that processes raw weather data by cleaning invalid entries, converting temperatures, and identifying extreme weather conditions.

## 🚀 Features
- Filters out corrupted or missing sensor data (`null` values).
- Converts temperatures from Celsius to Fahrenheit dynamically.
- Flags cities with an alert status ("Hot" or "Pleasant") based on temperature.
- Identifies the hottest city from the dataset using the `reduce()` method for object comparison.

## 🧠 Concepts Used
- Array Methods (`filter`, `map`, `reduce`)
- Object Comparison inside Reduce
- Object Destructuring
- ES6 Object Property Shorthand
- Template Literals

## 🛠️ How to Run
Run the JavaScript file using Node.js:
```bash
node app.js

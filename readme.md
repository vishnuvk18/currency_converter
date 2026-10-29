# 💱 Currency Converter

A simple and interactive Currency Converter web application built using **HTML, CSS, and JavaScript**. This application allows users to convert amounts between different international currencies using exchange-rate data fetched from a public API.

## 📸 Application Preview



## ✨ Features

- Convert between multiple international currencies.
- Dynamically populated currency dropdown menus.
- Default currency selection: USD to INR.
- Automatically updates country flags based on selected currencies.
- Fetches the latest available exchange rates using an external API.
- Calculates and displays the converted amount.
- Simple and user-friendly interface.
- Displays conversion results directly on the webpage.

## 🛠️ Technologies Used

| Technology        | Purpose                          |
| ----------------- | -------------------------------- |
| HTML5             | Webpage structure                |
| CSS3              | Styling and layout               |
| JavaScript (ES6+) | Application logic                |
| Fetch API         | Fetching exchange-rate data      |
| Async/Await       | Handling asynchronous operations |
| JSON              | Processing API responses         |
| Font Awesome      | Icons                            |

## 📂 Project Structure

```text
Currency-Converter/
│
├── index.html       # Main HTML structure
├── style.css        # CSS styling
├── app.js           # Main JavaScript functionality
├── codes.js         # Currency and country code mapping
├── screenshot.png   # Application screenshot
└── README.md        # Project documentation
```

## ⚙️ How to Run the Project

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Open the project folder**

```bash
cd Currency-Converter
```

**3. Open the project in VS Code**

```bash
code .
```

**4. Run the application**

- Install the Live Server extension in VS Code.
- Right-click `index.html`.
- Select **Open with Live Server**.

**5. Start converting currencies!**

- Enter the amount.
- Select the source currency.
- Select the target currency.
- Click **Get Exchange Rate**.
- View the converted amount.

## 🌐 APIs & External Resources

**1. Currency Exchange API**

Used to retrieve exchange-rate data.

- [Fawaz Ahmed Currency API – GitHub](https://github.com/fawazahmed0/exchange-api)
- [Currency API Endpoint](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json)

**2. Flags API**

Used to display country flags based on selected currencies.

- [Flags API](https://flagsapi.com/)

**3. Font Awesome**

Used for icons in the application.

- [Font Awesome](https://fontawesome.com/)

## 📚 What I Learned

While developing this project, I gained practical experience in:

- DOM manipulation using JavaScript.
- Handling click and change events.
- Working with JavaScript objects and nested properties.
- Fetching external API data using `fetch()`.
- Understanding Promises and `async/await`.
- Converting API responses into JSON.
- Performing calculations using dynamic user inputs.
- Updating webpage content dynamically.
- Handling data from external APIs.

## 🚀 Future Improvements

- Add a currency swap functionality.
- Improve responsive design for mobile devices.
- Implement better error handling and input validation.
- Display the exchange-rate update date.
- Improve the user interface and add animations.

## 👨‍💻 Author

**Vishnu Poola**

Aspiring Python Full Stack Developer

- **GitHub Profile:** [vishnuvk18](https://github.com/vishnuvk18)

## ⭐ Support

If you find this project useful, consider giving the repository a star!

---

*Built with ❤️ by Vishnu Poola*

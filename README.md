# Multiselect Timezones

Test task — React component `Multiselect` that loads a list of timezones from an external API and allows selecting multiple values.

## 📦 Technologies Used

- React (class component)
- Fetch API
- React state & lifecycle
- CSS modules

## 🚀 How to Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local server:
   ```bash
   npm start
   ```

3. Open in your browser:
   ```
   http://localhost:3000
   ```

## 🔧 Component Description

The `Multiselect` component makes a request to the following API:

```
GET https://timeapi.io/api/timezone/availabletimezones
```

After loading, the timezones are displayed in a dropdown with the ability to select multiple values. The selected values are shown below.

## 🧪 Testing

- Supports multiple selections
- Works without third-party UI libraries
- Handles loading errors

## 📁 Structure

```
src/
├── components/
│   └── Multiselect.js
├── App.js
└── index.js
```

## 📄 License

MIT
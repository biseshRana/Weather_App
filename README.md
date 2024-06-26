# Weather_App

### An app that shows you the weather at your location

<img src="https://github.com/biseshRana/Weather_App/assets/148798573/8b0a4837-d114-4ed9-b4c4-0bf1e766e0b9" width=20% height=20%>
<img src="https://github.com/biseshRana/Weather_App/assets/148798573/a291fd1d-513b-4285-94aa-6c8a61bbb223" width=20% height=20%>
<img src="https://github.com/biseshRana/Weather_App/assets/148798573/7c6dd389-7e3b-4cdc-b701-ada17cf77237" width=20% height=20%>

## Introduction
This app was made with React Native. The app is broken down into 3 sections: Current, Upcoming, and City. Current shows the current temperature, high, low, what it feels like, and the current weather. Upcoming shows the day, time, the highs, and the lows for the upcoming week. City shows the city name, city population, and time of sunset and sunrise. When opening the app, you may encounter a loading screen. Please be patient as the app is importing data from the API which may take a while. Furthermore, the app will also ask for your location, so please do not be alarmed and accept it as it is inevitable. 

## Running the code:
1) Ensure you have node.js installed (This will also automatically install npm): https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
2) Copy the repository https: https://github.com/biseshRana/Weather_App.git
3) Open your IDE, and open the GitHub extension
4) Click on Clone Repository and paste the repository in the provided bar above
### Opening the app:
There are 3 ways to open the app: through an IOS simulator, through an android simulator, or by scanning a QR code on your mobile device
1) Open your computer's terminal
2) Install expo by typing in this command in the terminal: npm install -g expo-cli
3) Navigate to the repository directory by typing in: cd *repository name*
4) To launch the app type: npx expo start
- #### Android Simulator:
  1) Install the Android Simulator: https://developer.android.com/studio
  2) Open the simulator by typing a
- #### IOS Simulator:
  1) Install XCode (Only available for macs):
  2) Open the simulator by typing in the terminal this command: npx react-native run-ios
- #### Mobile Device:
  1) Install the expo app
  2) Scan the QR code. This will open the expo app with the project

## API reference:
### OpenWeatherMap 5 Day / 3 Hour Forecast API
This project utilizes the OpenWeatherMap 5 Day / 3 Hour Forecast API to fetch weather data (https://openweathermap.org/forecast5). Below is a brief overview of how to use this API:
Endpoints
- GET /forecast: Retrieve weather forecast data for a specified location.
Parameters
- q (required): City name, state code, and country code. Example: q=London,uk
- appid (required): Your unique API key from OpenWeatherMap.
- units (optional): Units of measurement. Options are standard, metric, and imperial. Default is standard.
- cnt (optional): Number of timestamps to return. By default, the API returns data every 3 hours for 5 days.

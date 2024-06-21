# Web-worker-assignment
This is the Weather information websites of Web Workers using HTML, CSS and Javascript. Also, Open weather API is used to get information of weather.

# Description:
The Weather Information project involves creating a web application that allows users to input a city name. Upon pressing a button, the application fetches real-time weather data for that city using the OpenWeatherMap API. The data is processed and displayed in a visually appealing card format. The application also uses a Web Worker to handle data processing in the background. The main thread handles user inputs and DOM manipulations, while a dedicated Web Worker performs background tasks such as data processing. the application ensures smooth user interactions while fetching and processing data.

# Instructions:
The Instructions on how to run the project locally is given below:
1.	First of all, Clone the repository to any folder.
2.	Open command prompt and navigate to the directory containing all files.
3.	Then run the following command:
        “python -m http.server”
4.	Open your browser and navigate to http://localhost:8000.
5.	This will opens the running website.

# Challenges:
1-  Cross-Origin Resource Sharing (CORS):
When I run the web page and sending request to API, the data was not getting through API because CORS block the request and no data was showing. 
Solution:  I use the Server-Side solution as I run the command  “python -m http.server” on command prompt. This server is running on the command prompt and then I use localhost to run this website. This ensures the API supports to CORS.

2- Getting API:
Getting API was also very challenging due to security restrictions of some websites.
Solution: Be aware of security restriction from where you get APIs.




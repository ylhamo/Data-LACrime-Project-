Question1.  First use an existing Web API1. Select one or more online APIs (see [slides](https://cengique.github.io/course-adv-data-analytics/module5-sql-nosql.html#/4 "slides
    (https://cengique.github.io/course-adv-data-analytics/module5-sql-nosql.html#/4)")) and show usage examples from 3 different endpoints. For each one, show the URL with query parameters, explain its intention, and show a summary of its output in your browser. Note 
-CoinLore Crypocurrency API
URL 
```
https://api.coinlore.com/api/tickers/?start=1&limit=3

```

Explanation: This call fetches a list of the first three cryptocurrencies, including their prices and ranks. 
Output: This call fetches a list of the first 3 cryptocurrencies, including their prices and ranks 
```
{
  "data": [
    {"id":"90","symbol":"BTC","name":"Bitcoin","price_usd":"65320"},
    {"id":"80","symbol":"ETH","name":"Ethereum","price_usd":"2405"},
    {"id":"48543","symbol":"USDT","name":"Tether","price_usd":"1.00"}
  ]
}

```
-OpenWeatherMap API (Weather Data)
URL:
```
https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=YOUR_API_KEY&units=metric

```
Explanation: This calls retrieve the current weather in Atlanta, GA
Output: shows the temperature, humidity, weather description and wind speed.
```
{
  "name": "Atlanta",
  "main": {"temp": 29.3, "humidity": 65},
  "weather": [{"description": "clear sky"}],
  "wind": {"speed": 3.6}
}

```
-Nasa Astronomy Picture of the Day API
URL:
```
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2025-09-20

```
Explanation: This call retrieves NASA's Astronomy picture of the day for September 20, 2025
Output: Returns the data, title, explanation, and image URL
```
{
  "date": "2025-09-20",
  "title": "Aurora over Norway",
  "explanation": "A stunning aurora captured in Tromsø, Norway...",
  "url": "https://apod.nasa.gov/apod/image/2509/aurora_norway.jpg"
}

```
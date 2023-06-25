export default class Data {
  constructor(temperatureC, temperatureF, temperatureType, city, country,
    imgUrl, wind, humidity, pressure, update) {
    this.temperatureC = temperatureC;
    this.temperatureF = temperatureF;
    this.temperatureType = temperatureType;
    this.city = city;
    this.country = country;
    this.imgUrl = imgUrl;
    this.pressure = pressure;
    this.wind = wind;
    this.humidity = humidity;
    this.update = update;
  }
}

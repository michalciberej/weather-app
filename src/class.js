export default class Data {
  constructor(temperatureC, temperatureF, temperatureType, city, country,
    imgUrl, wind, humidity, preasure, update) {
    this.temperatureC = temperatureC;
    this.temperatureF = temperatureF;
    this.temperatureType = temperatureType;
    this.city = city;
    this.country = country;
    this.imgUrl = imgUrl;
    this.preasure = preasure;
    this.wind = wind;
    this.humidity = humidity;
    this.update = update;
  }
}

import { Component } from '@angular/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-discovers',
  templateUrl: 'discovers.page.html',
  styleUrls: ['discovers.page.scss']
})

export class DiscoversPage {

  geoLatitude: number;
  geoLongitude: number;
  geoAccuracy: number;
  geoAddress: string;

  watchLocationUpdates: any;
  loading: any;
  isWatching: boolean;

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  slides = [
    {
      img: 'https://www.elsudcaliforniano.com.mx/gossip/wevci7-emma-watson/alternates/LANDSCAPE_400/Emma%20Watson',
      name: 'Emma Charlotte Duerre Watson',
      address: 'Suite 200 Beverly Hills, CA 90212-4819',
      nickname: 'Sweet Princess',
      about: 'Mujer​ es el ser humano femenino o hembra, independientemente de si es niña o adulta. Tiene diferencias biológicas con el varón, como la cintura más estrecha, cadera más ancha y pelvis más amplia, diferente distribución y cantidad de vello, tejido adiposo y musculatura. Sus genitales son diferentes y sus mamas, a diferencia del varón, están desarrolladas.'
    },
    {
      img: 'https://www.elsudcaliforniano.com.mx/gossip/wevci7-emma-watson/alternates/LANDSCAPE_400/Emma%20Watson',
      name: 'Emma Charlotte Duerre Watson',
      address: 'Suite 200 Beverly Hills, CA 90212-4819',
      nickname: 'Sweet Princess',
      about: 'Mujer​ es el ser humano femenino o hembra, independientemente de si es niña o adulta. Tiene diferencias biológicas con el varón, como la cintura más estrecha, cadera más ancha y pelvis más amplia, diferente distribución y cantidad de vello, tejido adiposo y musculatura. Sus genitales son diferentes y sus mamas, a diferencia del varón, están desarrolladas.'
    },
    {
      img: 'https://www.elsudcaliforniano.com.mx/gossip/wevci7-emma-watson/alternates/LANDSCAPE_400/Emma%20Watson',
      name: 'Emma Charlotte Duerre Watson',
      address: 'Suite 200 Beverly Hills, CA 90212-4819',
      nickname: 'Sweet Princess',
      about: 'Mujer​ es el ser humano femenino o hembra, independientemente de si es niña o adulta. Tiene diferencias biológicas con el varón, como la cintura más estrecha, cadera más ancha y pelvis más amplia, diferente distribución y cantidad de vello, tejido adiposo y musculatura. Sus genitales son diferentes y sus mamas, a diferencia del varón, están desarrolladas.'
    }
  ];

  constructor(private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
    this.getGeolocation();
  }

  //Get current coordinates of device
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.geoAccuracy = resp.coords.accuracy;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.geoAddress = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }

  //Start location update watch
  watchLocation() {
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude;
      this.getGeoencoder(this.geoLatitude, this.geoLongitude);
    });
  }

  //Stop location update watch
  stopLocationWatch() {
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }


}

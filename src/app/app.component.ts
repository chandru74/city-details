import { DetailsService } from './details.service';
import { Component, OnInit} from '@angular/core';
import { City } from './city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'City Details';
  lat = 20.5937;
  lng = 78.9629;
  zoom = 8;
  constructor(private detailsService: DetailsService){}
  citydetails :City[];
  states = [];
  stateCities=[];
  markers = [];
  labelname : string;

  ngOnInit(){
  this.getCityData();
  }

  //to get the city data from the give API and get the States list
  getCityData(){
    this.detailsService.getCityData().subscribe((data)=>{
      this.citydetails = data;      
      this.citydetails.filter(item =>{
        if(!this.states.includes(item.State)){
          this.states.push(item.State);
        }
      })
    })
  }

  // to extract list of cities of a selected state
  selectedState(event){
    this.stateCities = [];
    console.log(event.target.value);
    this.detailsService.getCoordinates(event.target.value).subscribe(data =>{
      if(data.status === 'OK'){
        this.lat = data.results[0].geometry.location.lat;
        this.lng = data.results[0].geometry.location.lng;
      }
    })
    this.citydetails.filter(item =>{
      if(item.State == event.target.value){
        this.stateCities.push(item.City);
      }
    })
    this.initMap();
  }

// get the coordinates of the cities and add to markers array
  initMap(){
    this.markers = []
    for(let i=0; i<this.stateCities.length; i++){
      this.detailsService.getCoordinates(this.stateCities[i]).subscribe(data =>{
        if(data.status === 'OK'){
          let marker ={
            lat: data.results[0].geometry.location.lat,
            lng : data.results[0].geometry.location.lng,
            label: this.stateCities[i]
          }
          this.markers.push(marker);
        }
      })
    }
  }

  //show the city name when clicked on marker
  clickedMarker(label: string) {
    this.labelname = label;
  }
  

}

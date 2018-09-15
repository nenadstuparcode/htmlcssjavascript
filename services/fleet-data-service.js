import {Car} from "../classes/car.js";
import {Drone} from "../classes/drone.js";


export class FleetDataService {
    constructor(){
        this.cars = [];
        this.drones = [];
    }

    loadData(fleet){
        for(let data of fleet){
            switch(data.id){
                case data.id < 5:
                this.cars.push(data);
                break;
                case data.id > 5:
                this.drones.push(data);
                break;
            }
        }
    }
}
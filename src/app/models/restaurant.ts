import { item } from "./item";

export interface restaurant{
    restaurantName:string,
    kmAway:number,
    Menu:item[],
    rating:number,
    imageUrl:string
}
import type City from "./City";
import Hotel from "./Hotel";

/**
 * Structure describing information of the trip
 */
export default interface TripDetails {
  /**
   * The date of the trip
   */
  startDate: Date;

  /**
   * The end date of the trip
   */
  endDate: Date;

  /**
   * Idd of the location of the trip
   */
  city: City["id"] | undefined;

  /**
   * Selected hotel id
   */
  hotel: number;

  /**
   * The room in the selected hotel
   */
  room: number;
  hotels: Hotel[];
}

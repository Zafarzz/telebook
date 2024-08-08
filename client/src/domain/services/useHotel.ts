import { hotels } from "@/infra/store/hotels/mock/hotels";
import { type ComputedRef, computed, type MaybeRefOrGetter, unref } from "vue";
import type Hotel from "../entities/Hotel";
import { rooms } from "@/infra/store/rooms";

interface useHotelComposableState {
  hotel: ComputedRef<Hotel | undefined>;
}

export function useHotel(
  id: MaybeRefOrGetter<number | undefined>
): useHotelComposableState {
  const hotelId = unref(id);

  if (hotelId === undefined) {
    throw new Error("Hotel ID is not defined");
  }

  const hotel = computed(() => {
    // hotel.value?.rooms === rooms.filter((e) => hotel.value?.rooms?.find(e.id));
    return hotels.find((hotel) => hotel.id === hotelId);
  });

  return {
    hotel,
  };
}

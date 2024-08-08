import { Room } from "@/domain/entities";
import { addThumb } from "../hotels/mock/hotels";
import { amenities } from "../hotels/mock/amenities";
type type = {
  [key: number]: Room;
};

const roomsData: type = {
  1: {
    id: 1,
    title: "Стандарт",
    subtitle: `1 двуспальная кровать
 или 
2 односпальные кровати
2 основных места и 1 дополнительное`,
    price: 4790,
    picture: "/pics/room-1-1.jpg",
  },
  2: {
    id: 2,
    title: "Семейный",
    subtitle: `В номере:
1 двуспальная кровать
2 основных места и 1 дополнительное`,
    price: 5790,
    picture: "/pics/room-1-2.jpg",
  },
  3: {
    id: 3,
    title: "стандарт",
    subtitle: `В номере:2 основных места`,
    price: 2653,
    picture: "/pics/room-2-1.jpg",
  },
  4: {
    id: 4,
    title: "Стандарт Улучшенный",
    subtitle: `В номере:
      2 основных места
      `,
    price: 2950,
    picture: "/pics/room-2-2.jpg",
  },
  5: {
    id: 5,
    title: "Комфорт (круглая кровать)",
    price: 3445,
    subtitle: `В номере:
2 основных места`,
    picture: "/pics/room-2-3.jpg",
  },
  6: {
    id: 6,
    title: "Стандарт DBL",
    subtitle: `
    В номере:
2 основных места
`,
    price: 2230,
    picture: "/pics/room-3-1.jpg",
  },
  7: {
    id: 7,
    title: "Стандарт улучшенный",
    subtitle: `
    В номере:
2 основных места
`,
    price: 2230,
    picture: "/pics/room-3-2.jpg",
  },
  8: {
    id: 8,
    title: "Полулюкс",
    subtitle: `
    В номере:
2 основных места
`,
    price: 2230,
    picture: "/pics/room-3-3.jpg",
  },
  9: {
    id: 9,
    title: "Люкс DBL",
    subtitle: `
    В номере:
2 основных места
`,
    price: 2230,
    picture: "/pics/room-3-4.jpg",
  },
  10: {
    id: 10,
    title: "Люкс",
    subtitle: `
В номере:
2 основных места и 1 дополнительное
`,
    price: 2230,
    picture: "/pics/room-3-5.jpg",
  },
  11: {
    id: 11,
    title: "Стандарт улучшенный",
    price: 4790,
    subtitle: `В номере:
1 двуспальная кровать
2 основных места и 1 дополнительное`,
    picture: "/pics/room-4-1.jpg",
  },
  12: {
    id: 12,
    title: "Комфорт",
    subtitle: `
В номере:
1 двуспальная кровать
2 основных места и 1 дополнительное
`,
    price: 4990,
    picture: "/pics/room-4-2.jpg",
  },
  13: {
    id: 13,
    title: "Люкс",
    subtitle: `
    В номере:
2 основных места
`,
    price: 6600,
    picture: "/pics/room-4-3.jpg",
  },
  14: {
    id: 8,
    title: "Люкс с джакузи (белый)",
    subtitle: `
2 основных места и 1 дополнительное
`,
    price: 7580,
    picture: "/pics/room-4-4.jpg",
  },
  15: {
    id: 15,
    title: `Люкс "Облако"`,
    subtitle: `
    В номере:
2 основных места
`,
    price: 8580,
    picture: "/pics/room-4-5.jpg",
  },
  16: {
    id: 16,
    title: "Cтандартный номер с двуспальной кроватью",
    subtitle: `
1 двуспальная кровать
2 основных места и 1 дополнительное
`,
    price: 3080,
    picture: "/pics/room-6-1.jpg",
  },
  17: {
    id: 17,
    title: "Стандарт с раздельными кроватями",
    subtitle: `
В номере:
2 односпальные кровати
2 основных места и 1 дополнительное
`,
    price: 3080,
    picture: "/pics/room-6-2.jpg",
  },
  18: {
    id: 18,
    title: "Deluxe Double Room",
    subtitle: `
В номере:
1 двуспальная кровать
2 основных места и 1 дополнительное
`,
    price: 3680,
    picture: "/pics/room-6-3.jpg",
  },
  19: {
    id: 19,
    title: `Студия Люкс`,
    subtitle: `
1 двуспальная кровать
2 основных места и 2 дополнительных
`,
    price: 3780,
    picture: "/pics/room-6-4.jpg",
  },
  20: {
    id: 20,
    title: "Номер Люкс",
    price: 3280,
    subtitle: `
    1 двуспальная кровать
2 основных места и 1 дополнительное`,
    picture: "/pics/room-7-1.jpg",
  },
  21: {
    id: 21,
    price: 2480,
    title: "Стандартый",
    subtitle: `В номере:
2 основных места`,
    picture: "/pics/room-8-1.jpg",
  },
  22: {
    id: 22,
    price: 3080,
    title: "Полулюкс",
    subtitle: `В номере:
2 основных места и 1 дополнительное
`,
    picture: "/pics/room-8-2.jpg",
  },
  23: {
    id: 23,
    title: `Стандарт 1 этаж`,
    subtitle: `
1 двуспальная кровать
2 основных места и 2 дополнительных
`,
    price: 2851,
    picture: "/pics/room-9-1.jpg",
  },
  24: {
    id: 24,
    title: "Стандарт DBL/TWIN",
    price: 3781,
    subtitle: `
  В номере:
2 основных места`,
    picture: "/pics/room-9-2.jpg",
  },
  25: {
    id: 25,
    price: 3781,
    title: "Комфорт DBL",
    subtitle: `В номере:
2 основных места`,
    picture: "/pics/room-9-3.jpg",
  },
  26: {
    id: 26,
    price: 3781,
    title: "Комфорт DBL/TWIN",
    subtitle: `В номере:
2 основных места и 1 дополнительное
`,
    picture: "/pics/room-9-4.jpg",
  },
  27: {
    id: 27,
    price: 8065,
    title: "БИЗНЕС TWIN",
    subtitle: `В номере:
2 основных места 
`,
    picture: "/pics/room-10-1.jpg",
  },
  28: {
    id: 28,
    price: 12815,
    title: "ЛЮКС",
    subtitle: `В номере:
2 основных места и 1 дополнительное
`,
    picture: "/pics/room-10-2.jpg",
  },
  29: {
    id: 29,
    title: "Двухместный номер с 2 отдельными кроватями",
    subtitle: "Площадь: 20 м",
    price: 3990,
    picture: "/pics/room-11-1.jpg",
  },
  30: {
    id: 30,
    title: "Улучшенный двухместный номер с 1 кроватью",
    subtitle: "Площадь: 20 м",
    price: 4490,
    picture: "/pics/room-11-2.jpg",
  },
};
function addThumbs(rooms: type): type {
  const res = { ...rooms };
  Object.keys(rooms).map((key) => {
    const updateRoom = addThumb(rooms[Number(key)]);
    res[Number(key)] = { ...updateRoom, amenities: amenities };
  });
  return res;
  // return ro oms.map((hotel) => {
  //   /**
  //    * Add picture thumb to rooms as well
  //    */
  //   //@ts-ignore
  //   // hotel.rooms = hotel.rooms.map(addThumb);

  //   return addThumb(hotel);
  // });
}

export const rooms = addThumbs(roomsData);

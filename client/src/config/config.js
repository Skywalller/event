import Image1 from "@/assets/images/1.png";
import Image2 from "@/assets/images/2.png";
import Image3 from "@/assets/images/3.png";
import Image4 from "@/assets/images/4.png";
import Image5 from "@/assets/images/5.png";

const config = {
  CLIENT: "",
  SERVER: "",
  ERROR: "Error 505: Server error!",
  SECRET: "my-secret",
  PATHNAMES: {
    HOME: "/",
    AUTH: "/auth",
  },
  seed: {
    events: [
      {
        _id: 1,
        name: "OIL PAINTING EVENT (2 LESSONS PER BOOKING)",
        description: `Immerse yourself in the rich world of oil painting with these captivating workshops! Whether you're a seasoned artist or a complete beginner, these workshops provide an inspiring and supportive environment for all skill levels. Each booking gets you 2 lessons which are 1 week apart, giving us time to cover all of the fundamental elements of oil painting and more.`,
        location: "London",
        age: "16+",
        price: "65",
        date: {
          from: "30 SEP",
          to: "20th October 2024",
        },
        img: Image1,
      },
      {
        _id: 2,
        name: "PORTRAIT DRAWING EVENT",
        description: `Immerse yourself in the rich world of oil painting with these captivating workshops! Whether you're a seasoned artist or a complete beginner, these workshops provide an inspiring and supportive environment for all skill levels. Each booking gets you 2 lessons which are 1 week apart, giving us time to cover all of the fundamental elements of oil painting and more.`,
        location: "London",
        age: "ALL",
        price: "390",
        date: {
          from: "21 APR",
          to: "20th October 2024",
        },
        img: Image2,
      },
      {
        _id: 3,
        name: "EXHIBITION: THE GOLDEN HOUR",
        description: `The Golden Hour is roughly 60-minutes post-sunrise and 60-minutes pre-sunset. The sun is lower, the light is softer, the shadows more fabulous. Where everyone is extra and a golden glow is cast.
        This exhibition brings together works by emerging Bath-based artist Rachel Dittrich ranging from intimate portraits to landscapes capturing glorious moments in nature. Rachel is an expressive oil painter, autistic person and winner of the Cass Art Solo Show award at RWA 170. Rachel is an emerging artist producing vibrant oil paintings since 2021.`,
        location: "The Art Space, Cass Art Bristol",
        age: "ALL",
        price: "1500",
        date: {
          from: "19 DEC",
          to: "20th October 2024",
        },
        img: Image3,
      },
      {
        _id: 4,
        name: "STUDY PORTRAITURE WITH ART ACADEMY LONDON",
        description: `Art Academy London’s Certificate in Portraiture provides a unique introduction to the exacting discipline of portraiture. Here you’ll begin to learn the skills of portrait painting in small classes taught by practising artists, many of them eminent in their field. The programme is part-time and would suit beginners or people relatively new to the study of portraiture, offering you the opportunity to take a range of classes exploring some of the key components of this specialist genre, whilst being guided in tutorials with the Certificate in Portraiture Programme Leader as your work progresses.`,
        location: "London",
        age: "18+",
        price: "4,140",
        date: {
          from: "21 MAR",
          to: "20th October 2024",
        },
        img: Image4,
      },
      {
        _id: 5,
        name: "EXHIBITION: EARTH WORSHIP: MAGICK IN NATURE",
        description: `In Paganism, the term ‘magick’ embodies ritual and spiritual intentions, coined by Aleister Crowley in the 20th century to distinguish esoteric practice from stage magic. Doreen Valiente, in her book Natural Magic (1975), defines magick as an inherent aspect of the universe, “All is part of nature; but much of the realm of nature is ‘occult’, that is, hidden. The occultist, therefore, is one who ventures into these hidden realms.”`,
        location: "The Art Space, Cass Art Bristol",
        age: "ALL",
        price: "FREE",
        date: {
          from: "22 JUL",
          to: "Sunday 4th August",
        },
        img: Image5,
      },
    ],
  },
};

export default config;

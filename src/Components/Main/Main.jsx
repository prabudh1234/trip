import React, { useEffect } from "react";
import "./main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from "../../Assets/ktm.jpg";
import img1 from "../../Assets/patan.jpg";
import img2 from "../../Assets/taudaha.jpg";
import img3 from "../../Assets/godawari.jpg";
import img4 from "../../Assets/pashupatinath.jpg";
import img5 from "../../Assets/macchapuchre.jpg";
import img6 from "../../Assets/abc.jpg";
import img7 from "../../Assets/ebc.jpg";
import img8 from "../../Assets/Pokhara.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Kathmandu Durbar Square",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Kathmandu Durbar Square, a UNESCO World Heritage Site, is one of three squares within Kathmandu Valley in Nepal. Durbar Square (durbar translates to “palace” or “a court held by a prince”) is an important site for Buddhist and Hindu rituals, holy ceremonies, royal events, and kingly coronations.",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "Patan Durbar Square",
    location: "Lalitpur",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Patan Durbar Square, a UNESCO World Heritage Site, is one of three squares within Kathmandu Valley in Nepal. Durbar Square (durbar translates to “palace” or “a court held by a prince”) is an important site for Buddhist and Hindu rituals, holy ceremonies, royal events, and kingly coronations.",
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: "Taudaha",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "3000",
    description:
      "The lake is believed to be a remnant pool of the huge lake that once existed where now the city of Kathmandu sits. According to mythology, a Buddhist mythical character Manjushree cut the hill in the valley's south, allowing the lake's water to drain off, thereby creating land that was duly occupied by people.",
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: "Godawari",
    location: "Lalitpur",
    grade: "CULTURAL RELAX",
    fees: "3000",
    description:
      "Godawari is one of the popular hiking destinations in Nepal for its rich wildlife and splendid environment. Godawari is also famous for its botanical garden and Godawari temple (Kunda and navadhara). Mt. Phulchowki is located in Godawari which is the highest peak in Kathmandu valley.",
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: "Pashupatinath Temple",
    location: "Kathmandu",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Pashupatinath Temple, place of worship in the Kathmandu Valley on the Baghmati River, on the eastern outskirts of the city of Kathmandu, that is the holiest site in Nepal. It is devoted to the Hindu god Shiva in his form as Pashupati, protector of animals.",
  },
  {
    id: 6,
    imgSrc: img5,
    destTitle: "Macchapuchre",
    location: "Gandaki",
    grade: "CULTURAL RELAX",
    fees: "6000",
    description:
      "Machapuchare is at the end of a long spur ridge, coming south out of the main backbone of the Annapurna massif, which forms the eastern boundary of the Annapurna Sanctuary. The peak is about 25 km (16 mi) north of Pokhara, the provincial capital of the Gandaki Province.",
  },
  {
    id: 7,
    imgSrc: img6,
    destTitle: "Annapurna Base Camp",
    location: "Gandaki",
    grade: "CULTURAL RELAX",
    fees: "5000",
    description:
      "Annapurna is a mountain situated in the Annapurna mountain range of Gandaki Province, north-central Nepal.Mount Annapurna I is the tenth highest mountainin the world at 8,091 metres (26,545 ft).",
  },
  {
    id: 8,
    imgSrc: img7,
    destTitle: "Everest Base Camp",
    location: "Lukla",
    grade: "CULTURAL RELAX",
    fees: "6900",
    description:
      "The base camps are rudimentary campsites at the base of Mount Everest that are used by mountain climbers during their ascent and descent. They are also visited by hikers. South Base Camp is used when climbing via the southeast ridge, while North Base Camp is used when climbing via the northeast ridge.",
  },
  {
    id: 9,
    imgSrc: img8,
    destTitle: "Pokhara",
    location: "Kaski",
    grade: "CULTURAL RELAX",
    fees: "5999",
    description:
      "Pokhara's spellbinding beauty has been the subject of many travel writers. Its pristine air, the spectacular backdrop of the snowy peaks of the Annapurna Range and the serene Phewa, Begnas and Rupa Lakes, makes this destination 'the Jewel of the Himalaya'.",
  },
];

const Main = () => {
  //scroll animation

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Visited Destinations </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

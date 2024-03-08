import { useEffect, useState } from "react";
import "../../Styles/Layout/Carosel.scss";

const slideWidth = 30;

const _items = [
  {
    player: {
      title: "CYOL Quality Control",
      desc: "Test",
      image: "https://www.youtube.com/embed/Xj_tCb1WdAQ?si=ErfuHjWuNKdGcs5s",
    },
  },
  {
    player: {
      title: "Empowering Contract Farming with CYOL",
      desc: "Test",
      image: "https://www.youtube.com/embed/pKGJimYpTGE?si=D7c5oEEr-yzWmqP7",
    },
  },
  {
    player: {
      title: "Project Management Enhancements",
      desc: "Test",
      image: "https://www.youtube.com/embed/YZS6QuJqScs?si=g00QlXc3pKRWFT2Q",
    },
  },
  {
    player: {
      title: "Introduction to SAP Business One",
      desc: "Test",
      image: "https://www.youtube.com/embed/UOi7NaS1h1Y?si=AvcFUrWWDgIADOuK",
    },
  },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);

  // Extract video ID from YouTube URL
  const videoId = item.player.image
    .split("https://www.youtube.com/embed/")[1]
    .split("?")[0];

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <div className="video_overlay"></div>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={item.player.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

export const Carousel = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

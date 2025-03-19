import "@/styles/layout.scss";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { LobbyItem } from "@/context/HomeContext";

interface IProps {
  data: LobbyItem[];
  size?: number;
}

const MenuGame = (props: IProps) => {
  const { data, size = 10 } = props;
  const [itemPer, setItemPer] = useState(size);
  const [startIndex, setStartIndex] = useState(0);
  const isShowCarousel = data.length > itemPer;

  const handleNext = () => {
    if (startIndex < data.length - itemPer) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 480) {
        setItemPer(2);
      } else if (window.innerWidth < 640) {
        setItemPer(3);
      } else if (window.innerWidth < 768) {
        setItemPer(4);
      } else if (window.innerWidth < 1024) {
        setItemPer(6);
      } else if (window.innerWidth < 1280) {
        setItemPer(8);
      } else {
        setItemPer(size);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [size]);

  return (
    <div className="flex-content">
      {isShowCarousel ? (
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="carousel-button"
        >
          <ArrowLeft size={14} />
        </button>
      ) : (
        <div className="carousel-button_hidden" />
      )}
      <div className="carousel-list">
        {data.slice(startIndex, startIndex + itemPer).map((item) => (
          <div key={item.id} className="menu-item">
            <Link href={item.path} className="game-card">
              <Image
                src={
                  item.image?.original?.src ||
                  item.animatedSvg.desktop?.original?.src ||
                  "/default-img.svg"
                }
                alt={item.image.alt}
                width={50}
                height={50}
                className="game-img"
              />
            </Link>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
      {isShowCarousel ? (
        <button
          onClick={handleNext}
          disabled={startIndex >= data.length - itemPer}
          className="carousel-button"
        >
          <ArrowRight size={14} />
        </button>
      ) : (
        <div className="carousel-button_hidden" />
      )}
    </div>
  );
};

export default MenuGame;

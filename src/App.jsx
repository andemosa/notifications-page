import { useState } from "react";

import mark from "./assets/avatar-mark-webber.webp";
import angela from "./assets/avatar-angela-gray.webp";
import jacob from "./assets/avatar-jacob-thompson.webp";
import rizky from "./assets/avatar-rizky-hasanuddin.webp";
import kimberly from "./assets/avatar-kimberly-smith.webp";
import nathan from "./assets/avatar-nathan-peterson.webp";
import anna from "./assets/avatar-anna-kim.webp";
import chess from "./assets/image-chess.webp";

import "./App.css";

const articleStyles =
  "flex gap-4 py-4 w-full hover:cursor-pointer rounded-md px-3";
const imgStyles = "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14";
const timeStyles = "text-grayishBlue text-sm opacity-80";
const nameStyles = "text-darkGrayishBlue";
const linkStyles = "font-bold text-veryDarkBlue";

const info = [
  {
    id: 1,
    image: mark,
    title: (
      <p className={nameStyles}>
        <span className={linkStyles}>Mark Webber</span>&nbsp;reacted to your
        recent post&nbsp;
        <span className="hover:underline font-bold">
          My first tournament today!
        </span>
      </p>
    ),
    time: <p className={timeStyles}>1m ago</p>,
    read: true,
  },
  {
    id: 2,
    image: angela,
    title: (
      <p className={nameStyles}>
        <span className={linkStyles}>Angela Gray</span>&nbsp;followed you
      </p>
    ),
    time: <p className={timeStyles}>5m ago</p>,
    read: false,
  },
  {
    id: 3,
    image: jacob,
    title: (
      <p className={nameStyles}>
        <span className={linkStyles}>Jacob Thompson</span>&nbsp;has joined your
        group&nbsp;
        <span className="hover:underline font-bold text-blue">Chess Club</span>
      </p>
    ),
    time: <p className={timeStyles}>1 day ago</p>,
    read: true,
  },
  {
    id: 4,
    image: rizky,
    title: (
      <p className={nameStyles}>
        <span className={linkStyles}>Rizky Hasanuddin</span>&nbsp;sent you a
        private message
      </p>
    ),
    subtitle: (
      <p className="my-2 py-4 px-6 rounded-md border border-solid border-lightGrayishBlue2 text-darkGrayishBlue hover:bg-[#E5EFFA]">
        Hello, thanks for setting up the Chess Club. I&apos;ve been a member for
        a few weeks now and I&apos;m already having lots of fun and improving my
        game.
      </p>
    ),
    time: <p className={timeStyles}>5 days ago</p>,
    read: true,
  },
  {
    id: 5,
    image: kimberly,
    title: (
      <p className="flex justify-between gap-8">
        <span className={nameStyles}>
          <span className={linkStyles}>Kimberly Smith</span>&nbsp; commented on
          your picture
        </span>
        <img src={chess} alt="" className="w-10 h-10" />
      </p>
    ),
    time: <p className={timeStyles}>1 week ago</p>,
    read: false,
  },
  {
    id: 6,
    image: nathan,
    title: (
      <p className={nameStyles}>
        <span className={linkStyles}>Nathan Peterson</span>&nbsp;reacted to your
        recent post&nbsp;
        <span className="hover:underline font-bold">
          5 end-game strategies to increase your win rate
        </span>
      </p>
    ),
    time: <p className={timeStyles}>2 weeks ago</p>,
    read: false,
  },
  {
    id: 7,
    image: anna,
    title: (
      <p className={nameStyles}>
        <span className={linkStyles}>Anna Kim</span>&nbsp;left the group&nbsp;
        <span className="hover:underline font-bold text-blue">Chess Club</span>
      </p>
    ),
    time: <p className={timeStyles}>2 weeks ago</p>,
    read: false,
  },
];

function App() {
  const [data, setData] = useState(info);

  const handleMarkAll = () => {
    setData(data.slice().map((item) => ({ ...item, read: true })));
  };

  const handleClick = (id) => {
    const newArr = data.slice();
    const item = newArr.find((item) => item.id === id);
    item.read = !item.read;
    setData(newArr);
  };

  const numUnread = Object.values(data).filter((item) => !item.read).length;

  return (
    <div className="flex items-center justify-center px-2">
      <div className="bg-white my-4 rounded-lg px-4 md:px-8">
        <header className=" flex justify-between items-center w-full mx-auto pt-10 pb-0 md:max-w-2xl lg:max-w-3xl ">
          <div className="flex gap-2">
            <h1 className=" text-veryDarkBlue sm:text-xl font-bold">
              Notifications
            </h1>
            <span className="text-white bg-blue px-2 sm:px-4 py-px rounded-md">
              {numUnread}
            </span>
          </div>
          <button
            onClick={handleMarkAll}
            disabled={numUnread === 0}
            className={`hover:text-grayishBlue hover:opacity-60 transition-all delay-150 duration-500 ${
              numUnread === 0 ? "text-grayishBlue" : "text-darkGrayishBlue"
            }`}
          >
            Mark all as read
          </button>
        </header>

        <main className=" flex flex-col w-full mx-auto py-4 gap-3 md:max-w-2xl lg:max-w-3xl ">
          {data.map((item) => (
            <div
              className={`${articleStyles} ${item.read ? "" : "unread"}`}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <img src={item.image} alt="" className={imgStyles} />
              <div>
                {item.title}
                <p className={timeStyles}>{item.time}</p>
                {item.subtitle}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

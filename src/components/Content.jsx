//rafce
import React from "react";
import burger1 from "../images/burger1.jpg";
import burger2 from "../images/burger2.jpg";
import burger3 from "../images/burger3.jpg";

const Content = () => {
  return (
    <>
      {/* flex flex-col justify-center items-center bg-white h-screen font-mono py-40; */}
      <div className="menu-card">
        <img
          src={burger2}
          alt="Burger1"
          className="h-full rounded mb-20 shadow"
        />
        {/* flex flex-col justify-center items-center */}
        <div className="center-content">
          <h2 className="text-2xl mb-2">The Krusty Krab Burger</h2>
          <p className="mb-2">Served with pickles, lettuce, tomatoes,onions</p>
          <span>$15 Large $12 Regular</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={burger1}
          alt="Burger2"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">The Bacon Burger</h2>
          <p className="mb-2">Served with bacon, tomatoes, onions, lettuce</p>
          <span>$12 Large $10 Regular</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={burger3}
          alt="Burger3"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">The Double Decker</h2>
          <p className="mb-2">Served with lettuce, pickles, mayo and cheese</p>
          <span>$16 Large $13 Regular</span>
        </div>
      </div>
    </>
  );
};

export default Content;

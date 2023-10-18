import { useEffect, useState } from "react";

function MenuHype({ data }) {
    const menusData = data;
    const starter = menusData?.starter;
    const plate = menusData?.plate;
    const dessert = menusData?.dessert;

    return (
      <div className="menu-card">
        <img src={menusData?.thumbnail} alt={menusData?.title} />
        <div className="menu-title">
          <div>
              <h3>{menusData?.title}</h3>
              <p>{menusData?.description}</p>
          </div>
          <h4>{menusData?.price}€</h4>
        </div>
        <div className="menu-content">
          <div className="menu-content__item">
              <h3>{starter?.type}</h3>
              <div>
                <h4>{starter?.title}</h4>
                <p>{starter?.description}</p>
                <p>{starter?.price}€</p>
              </div>
          </div>
          <div className="separation"></div>
          <div className="menu-content__item">
          <h3>{plate?.type}</h3>
              <div>
                <h4>{plate?.title}</h4>
                <p>{plate?.description}</p>
                <p>{plate?.price}€</p>
              </div>
          </div>
          <div className="separation"></div>
          <div className="menu-content__item">
          <h3>{dessert?.type}</h3>
              <div>
                <h4>{dessert?.title}</h4>
                <p>{dessert?.description}</p>
                <p>{dessert?.price}€</p>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MenuHype;
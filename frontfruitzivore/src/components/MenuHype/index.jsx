import { useEffect, useState } from "react";

function MenuHype({ data }) {
    const menusData = data;

    return (
      <div>
        <div>
            <h3>{menusData?.title}</h3>
            <p>{menusData?.description}</p>
        </div>
        <h4>{menusData?.price}</h4>
      </div>
    );
  }
  
  export default MenuHype;
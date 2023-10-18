import { useEffect, useState } from "react";
import ButtonLink from "../../components/ButtonLink";
import MenuHype from "../../components/MenuHype";

function Home({ data }) {
  const menusData = data;
  const [menuHype, setMenuHype] = useState({}) 
  
  useEffect(() => {
    setMenuHype(menusData[0]);
  }, [menusData])
  return (
    <main className="main-home">
      <h1>Fruitzivore</h1>
      <p>LE site de commande en ligne à destination pour des fructivores</p>
      <div>
        <h2>Le menu en vogue</h2>
      </div>
      <MenuHype data={menuHype} />
      <div className="list-row">
        <ButtonLink url='/menu' content='Nos menus' />
        <ButtonLink url='/unit' content='A la carte' />
      </div>
    </main>
  );
}

export default Home;

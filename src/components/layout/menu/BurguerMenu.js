import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import burguer from "./burger.png";
import userI from "./user.png";
import { BurguerIcon, Icon, Menu } from "./styles";

export default function BurguerMenu() {
  const [classeA, setClasseA] = useState("texto");

  return (
    <>
      <BurguerIcon>
        <img src={burguer} alt="menu" />
      </BurguerIcon>
      <CSSTransition>
        <Menu>
          <Icon
            onMouseOver={() => setClasseA("texto ativo")}
            onMouseLeave={() => setClasseA("texto")}
          >
            <img src={userI} alt="#" />
            <div className={classeA}>Usuario</div>
          </Icon>
          <Icon>
            <img src={userI} alt="#" />
            <div className="texto">Pastas</div>
          </Icon>
          <Icon>
            <img src={userI} alt="#" />
            <div className="texto">Configuração</div>
          </Icon>
          <Icon>
            <img src={userI} alt="#" />
            <div className="texto">Usuario</div>
          </Icon>
          <Icon>
            <img src={userI} alt="#" />
            <div className="texto">Sair</div>
          </Icon>
        </Menu>
      </CSSTransition>
    </>
  );
}

// profile, cores, , Sair

import React from "react";
import {BackgroundH, Title, Bmenu} from './styles';
import BurguerMenu from './menu/BurguerMenu';

export default function Header() {
  return (
    <BackgroundH>
      <BurguerMenu />
      <Title>Nuvem 42</Title>
    </BackgroundH>
  );
}

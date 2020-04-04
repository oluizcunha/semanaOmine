import React from 'react';

export default function Header(props) {
  return (
    <header>
      {/* Pegando duas formas diferentes de passar parametro */}
      <h1> {props.title}</h1>
      <h1>{props.children}</h1>
    </header>
  );
}

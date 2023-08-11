import * as React from 'react';
import { useState } from 'react/index.js';

export default function Card({ card, onClickCallback, setClass }) {
  return (
    <div
      className={`card ${setClass}`}
      onClick={() => onClickCallback(card.id, card.link)}
    >
      {card.word}
    </div>
  );
}

import * as React from 'react';
import data from '../data.js';
import { useState } from 'react/index.js';
import Card from './Card.tsx';

export default function Cards({ topic }) {
  const [words, setWords] = useState([]);
  const [selected, setSelected] = useState({ id: null, word: null });

  React.useEffect(() => {
    setWords(data[topic].sort((a, b) => 0.5 - Math.random()));
  }, [topic]);

  const matchCard = (id, word) => {
    if (id !== selected.id && word === selected.word) {
      setWords(words.filter((word) => word.link !== selected.word));
      setSelected({ id: null, word: null });
    } else {
      setSelected({ id, word });
    }
  };

  return (
    <div className={`cards`}>
      {words.map((word) => (
        <Card
          key={word.id}
          card={word}
          onClickCallback={matchCard}
          setClass={`${selected.id === word.id ? 'card--selected' : ''}`}
        />
      ))}
    </div>
  );
}

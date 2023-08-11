import * as React from 'react';
import { useState } from 'react/index.js';
import data from '../data.js';
import Cards from './Cards.tsx';

export default function Topic({ children }) {
  const topics = Object.keys(data);
  const [topic, setTopic] = useState(topics[0]);
  const [displayTopics, setDisplayTopics] = useState(false);

  const toggleSelect = () => {};

  return (
    <div>
      <div className="topics">
        Select topic for your flashcards:
        <div className="select">
          <div
            className="select__title"
            onClick={() => setDisplayTopics(!displayTopics)}
          >
            {topic}
          </div>
          {displayTopics && (
            <div className="select__list">
              {topics.map((word, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name="topic"
                    id={word}
                    checked={topic === word ? true : false}
                    onChange={() => {
                      setTopic(word);
                      setDisplayTopics(false);
                    }}
                    key={word.toLowerCase()}
                  />
                  <label htmlFor={word}>{word}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Cards topic={topic} />
    </div>
  );
}

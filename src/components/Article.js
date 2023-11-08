import React from 'react';

function minutesToWords(minutes) {
    if (minutes === 1) {
      return '1 minute';
    } else {
      return `${minutes} minutes`;
    }
  }

function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      <p>{minutesToWords(minutes)}</p>
    </article>
  );
}

export default Article;
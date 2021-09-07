import './style/style.css';

import API from './modules/api';
import render from './modules/render';

const form = document.getElementById('add-form');
const refreshBtn = document.getElementById('refresh-btn');

refreshBtn.addEventListener('click', () => {
  API.getScores().then((items) => {
    render.allScores(items);
  });
});

form[2].addEventListener('click', () => {
  const name = form.elements[0].value;
  const score = form.elements[1].value;
  API.postScore(name, score);
});

window.addEventListener('load', () => {
  API.getScores().then((items) => {
    render.allScores(items);
  });
});

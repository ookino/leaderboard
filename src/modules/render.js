const ul = document.getElementById('user-scores');

const render = {
  allScores: (scores) => {
    scores.result.forEach((scoreItem) => {
      const li = document.createElement('li');
      const scoreDetail = document.createElement('p');
      scoreDetail.innerHTML = `${scoreItem.user}: <span class="score">${scoreItem.score}</span>`;
      li.appendChild(scoreDetail);
      ul.appendChild(li);
    });
  },
};

export default render;

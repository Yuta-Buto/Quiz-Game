const quiz = [
  {
    question: '1962年、宇宙飛行士ジョン・グレンを乗せてアメリカ最初の有人飛行を行った宇宙船の名前は次のうちどれ？',
    answers: [
      'ボストーク1号',
      'ソユーズTMA',
      'マーキュリー・アトラス6号',
      'アポロ15号',
    ],
    correct: 'マーキュリー・アトラス6号'
  }, {
    question: 'ギリシャ神話でゼウスの雷に打たれパエトーンが転落した川の名前が付けられた星座は次のうちどれ？',
    answers: [
      'ケフェウス座',
      'エリダヌス座',
      'オリオン座',
      'カシオペア座',
    ],
    correct: 'エリダヌス座'
  }, {
    question: '学名を「ファスコラルクトス・シネレウス」という生物は次のうちどれ？',
    answers: [
      'コアラ',
      'カンガルー',
      'アルマジロ',
      'ナマケモノ',
    ],
    correct: 'コアラ'
  }, {
    question: '全てを飲み込む範囲とされるブラックホールの半径を定義したドイツの天文学者は次のうちどれ？',
    answers: [
      'ヨハネス・ケプラー',
      'ミヒャエル・メストリン',
      'カール・フリードリヒ・ガウス',
      'カール・シュヴァルツシルト',
    ],
    correct: 'カール・シュヴァルツシルト'
  }, {
    question: 'ドヴォルザークの交響曲「新世界より」の新世界とは現在のどこの国？',
    answers: [
      'イタリア',
      'ドイツ',
      'フランス',
      'アメリカ',
    ],
    correct: 'アメリカ'
  }
];
const quizLength = quiz.length;
let quizIndex = 0; 
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//問題&選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}



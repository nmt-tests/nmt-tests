"use strict";

const EMBEDDED_TEST = {
  "title": "Національно-визвольна війна під проводом Богдана Хмельницького (1648–1657)",
  "questions": [
    {
      "id": "q1",
      "type": "single",
      "prompt": "Коли розпочалася національно-визвольна війна під проводом Богдана Хмельницького?",
      "choices": ["1648", "1649", "1651", "1657"],
      "answer": 0,
      "explain": "У тексті вказано, що війна почалася в 1648 році."
    },
    {
      "id": "q2",
      "type": "single",
      "prompt": "Який термін у джерелах також означає події національно-визвольної війни?",
      "choices": ["Руїна", "Хмельниччина", "Ординація", "Барщина"],
      "answer": 1,
      "explain": "Події війни часто називають Хмельниччиною."
    },
    {
      "id": "q3",
      "type": "single",
      "prompt": "Хто був особистим противником Хмельницького, чий напад на хутір Суботів став приводом до війни?",
      "choices": ["Ярема Вишневецький", "Адам Кисіль", "Даніель Чаплинський", "Заславський"],
      "answer": 2,
      "explain": "Приводом став напад польського шляхтича Даніеля Чаплинського на Суботів і викрадення Мотрони (Олени)."
    },
    {
      "id": "q4",
      "type": "multi",
      "prompt": "Які головні причини війни названі у тексті?",
      "choices": ["Особиста помста за Мотрону", "Соціально-економічний гніт", "Національний та релігійний утиск", "Незгода з виборами польського короля"],
      "answer": [1, 2],
      "explain": "Причини були глибинними: соціально-економічне та національно-релігійне пригнічення; любовна історія була лише приводом."
    },
    {
      "id": "q5",
      "type": "single",
      "prompt": "Який документ перед війною обмежував козаків, зокрема забороняв обирати гетьмана?",
      "choices": ["Березневі статті", "Білоцерківський договір", "Ординація Війська Запорозького", "Віленське перемир’я"],
      "answer": 2,
      "explain": "Ординація Війська Запорозького забороняла походи і вибори гетьмана, що було серед причин обурення козаків."
    },
    {
      "id": "q6",
      "type": "single",
      "prompt": "Якою була перша велика битва 1648 року?",
      "choices": ["Під Корсунем", "Під Берестечком", "Під Жовтими Водами", "Під Зборовом"],
      "answer": 2,
      "explain": "Першою великою стала битва під Жовтими Водами; згодом відбулася Корсунська."
    },
    {
      "id": "q7",
      "type": "single",
      "prompt": "Яка битва 1648 року увійшла як «найганебніша поразка поляків», де польських командирів Хмельницький називав «перина, дитина і латина»?",
      "choices": ["Під Корсунем", "Під Пилявцями", "Під Зборовом", "Під Жванцем"],
      "answer": 1,
      "explain": "Йдеться про битву під Пилявцями у вересні 1648 року."
    },
    {
      "id": "q8",
      "type": "single",
      "prompt": "Що змінилося у намірах Хмельницького після урочистого в’їзду до Києва в грудні 1648 року?",
      "choices": ["Він вирішив закінчити війну", "Він вирішив просити милості у короля", "Він вирішив створити власну козацьку державу", "Він погодився на повернення шляхти"],
      "answer": 2,
      "explain": "Побачивши підтримку народу, він вирішив боротися за створення української козацької держави."
    },
    {
      "id": "q9",
      "type": "multi",
      "prompt": "Які умови містив Зборівський договір 1649 року?",
      "choices": ["Реєстр 40 тис.", "Гетьманщина охоплює Київське, Брацлавське, Чернігівське воєводства", "Реєстр 20 тис.", "Повернення шляхти в усі воєводства"],
      "answer": [0, 1],
      "explain": "За Зборовом король визнав три воєводства за Гетьманщиною і реєстр у 40 тис."
    },
    {
      "id": "q10",
      "type": "single",
      "prompt": "Який наслідок мала зрада кримських татар у битві під Берестечком (1651)?",
      "choices": ["Рішучу перемогу козаків", "Полон короля", "Відступ козаків і оточення, вихід організував Іван Богун", "Облога Варшави"],
      "answer": 2,
      "explain": "Татари покинули поле бою, козаки опинилися в оточенні й відступили; вихід організував Іван Богун."
    },
    {
      "id": "q11",
      "type": "single",
      "prompt": "Чим відрізнявся Білоцерківський договір 1651 року від Зборівського?",
      "choices": ["Розширював територію Гетьманщини", "Лишав тільки Київське воєводство й зменшував реєстр до 20 тис.", "Запроваджував протекторат Москви", "Дозволяв вибори короля в Україні"],
      "answer": 1,
      "explain": "Він звужував Гетьманщину до Київського воєводства й зменшував козацький реєстр до 20 тис."
    },
    {
      "id": "q12",
      "type": "multi",
      "prompt": "Які події 1652 року згадані як успіхи Хмельницького?",
      "choices": ["Перемога під Батогом", "Укладання Білоцерківського договору", "Одруження Тимоша з Розандою Лупул", "Смерть Тимоша під Сучавою"],
      "answer": [0, 2],
      "explain": "У 1652 р. козаки перемогли під Батогом і відбулося весілля Тимоша з дочкою Василія Лупула."
    },
    {
      "id": "q13",
      "type": "single",
      "prompt": "Де і за яких обставин загинув Тиміш Хмельницький?",
      "choices": ["Під Берестечком, під час відступу", "Під Сучавою, у молдавському поході", "Під Пилявцями, в погоні за ворогом", "Під Жванцем, у таборі"],
      "answer": 1,
      "explain": "Він загинув під час походу на допомогу Лупулу в містечку Сучава."
    },
    {
      "id": "q14",
      "type": "multi",
      "prompt": "Які основні домовленості пов’язані з Переяславською радою та Березневими статтями?",
      "choices": ["Протекторат Московії над Гетьманщиною", "Об’єднання Гетьманщини з Московією в одну державу", "Реєстр 60 тис.", "Присяга московському царю"],
      "answer": [0, 2, 3],
      "explain": "Йшлося про протекторат (захист в обмін на залежність і данину), реєстр 60 тис. і присягу царю; об’єднання не передбачалось."
    },
    {
      "id": "q15",
      "type": "single",
      "prompt": "Чому Московія уклала Віленське перемир’я 1656 року з Польщею?",
      "choices": ["Щоб знищити козацтво", "Щоб не допустити захоплення Прибалтики Швецією", "Через брак війська на півдні", "За вимогою кримських татар"],
      "answer": 1,
      "explain": "Московія прагнула не допустити зміцнення Швеції на Балтиці і тому помирилася з Польщею."
    },
    {
      "id": "q16",
      "type": "single",
      "prompt": "Який наслідок Віленського перемир’я для Хмельницького?",
      "choices": ["Отримав допомогу Москви проти Польщі", "Уклав союз зі Швецією, Трансільванією і Валахією", "Здобув Варшаву", "Припинив війну і зрікся влади"],
      "answer": 1,
      "explain": "Через зраду Москви Хмельницький домовився зі Швецією, Трансільванією та Валахією."
    },
    {
      "id": "q17",
      "type": "single",
      "prompt": "Хто очолював козацькі полки у спільному зі шведами поході 1656 року, коли Хмельницький тяжко хворів?",
      "choices": ["Іван Богун", "Антон Жданович", "Ярема Вишневецький", "Адам Кисіль"],
      "answer": 1,
      "explain": "Похід очолював Антон Жданович, бо Хмельницький у 1656 р. мав тяжкі приступи й не водив війська."
    },
    {
      "id": "q18",
      "type": "multi",
      "prompt": "Що характеризує козацьку державу (Гетьманщину), створену під час війни?",
      "choices": ["Офіційна назва — Військо Запорозьке", "Столиця — Чигирин", "Поділ на полки і сотні", "Кошовий отаман очолює всю державу"],
      "answer": [0, 1, 2],
      "explain": "Гетьманщина мала офіційну назву Військо Запорозьке, столицю в Чигирині, поділ на полки й сотні; всю державу очолював гетьман, не кошовий."
    },
    {
      "id": "q19",
      "type": "single",
      "prompt": "Яка роль кримських татар на ранньому етапі війни і чому Хмельницький шукав їх союзництва?",
      "choices": ["Вони були противниками і їх ігнорували", "Мали сильну кінноту й могли вдарити в спину, тож їх залучили як союзників", "Просили притулку в Гетьманщині", "Очолювали козацьке військо замість гетьмана"],
      "answer": 1,
      "explain": "Татари мали потужну кінноту і могли завдати удару, тому Хмельницький залучив їх як союзників, дозволивши грабунок у визначених районах."
    },
    {
      "id": "q20",
      "type": "single",
      "prompt": "У якому році помер Богдан Хмельницький, після чого до влади прийшов Юрій і почалася Руїна?",
      "choices": ["1651", "1654", "1656", "1657"],
      "answer": 3,
      "explain": "Хмельницький помер у 1657 році; далі владу перебрав Юрій Хмельницький і почалася Руїна."
    }
  ]
};

const CHOICE_BASE_CLASS = "group flex min-h-14 cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition sm:min-h-16 sm:px-5 sm:py-4";
const MARKER_BASE_CLASS = "mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border text-xs font-bold sm:h-8 sm:w-8";

const state = {
  testPath: null,
  sourceKey: "embedded",
  seed: 1,
  storageKey: "",
  quiz: null,
  answers: {},
  checked: false,
  questionMap: new Map()
};

const ui = {
  quizTitle: document.getElementById("quiz-title"),
  quizCount: document.getElementById("quiz-count"),
  answeredText: document.getElementById("answered-text"),
  progressBar: document.getElementById("progress-bar"),
  resultSummary: document.getElementById("result-summary"),
  resultScore: document.getElementById("result-score"),
  resultPercent: document.getElementById("result-percent"),
  loadingState: document.getElementById("loading-state"),
  errorState: document.getElementById("error-state"),
  errorText: document.getElementById("error-text"),
  errorRetryBtn: document.getElementById("error-retry-btn"),
  quizState: document.getElementById("quiz-state"),
  stickyProgress: document.getElementById("sticky-progress"),
  stickySeed: document.getElementById("sticky-seed"),
  checkBtn: document.getElementById("check-btn"),
  resetBtn: document.getElementById("reset-btn"),
  retryBtn: document.getElementById("retry-btn"),
  questionsForm: document.getElementById("questions-form")
};

ui.checkBtn.addEventListener("click", onCheck);
ui.resetBtn.addEventListener("click", onReset);
ui.retryBtn.addEventListener("click", onRetry);
ui.errorRetryBtn.addEventListener("click", () => window.location.reload());
ui.questionsForm.addEventListener("change", onFormChange);

initialize();

async function initialize() {
  setView("loading");
  try {
    setupParams();
    const source = await loadQuizSource();
    const validated = validateQuiz(source);
    state.quiz = shuffleQuiz(validated, state.seed);
    state.questionMap = new Map(state.quiz.questions.map((question) => [question.id, question]));
    state.storageKey = buildStorageKey();
    state.answers = loadStoredAnswers();
    state.checked = false;

    updateHeader();
    renderQuestions();
    hideResult();
    updateProgress();
    updateChoiceVisuals();
    setView("quiz");
  } catch (error) {
    const message = error instanceof Error ? error.message : "Неизвестная ошибка.";
    showError(message);
    setView("error");
  }
}

function setupParams() {
  const params = new URLSearchParams(window.location.search);
  const rawPath = params.get("t");
  state.testPath = rawPath && rawPath.trim() ? rawPath.trim() : null;
  state.sourceKey = state.testPath ? state.testPath : "embedded";

  const parsedSeed = parseSeed(params.get("seed"));
  if (parsedSeed === null) {
    state.seed = generateSeed();
    params.set("seed", String(state.seed));
    if (state.testPath) {
      params.set("t", state.testPath);
    } else {
      params.delete("t");
    }
    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", nextUrl);
  } else {
    state.seed = parsedSeed;
  }
}

function parseSeed(value) {
  if (!value || !/^\d+$/.test(value)) {
    return null;
  }
  const numeric = Number(value);
  if (!Number.isSafeInteger(numeric) || numeric <= 0) {
    return null;
  }
  const normalized = numeric % 4294967296;
  return normalized === 0 ? 1 : normalized;
}

function generateSeed() {
  const timePart = Date.now() >>> 0;
  const randomPart = (Math.random() * 0xffffffff) >>> 0;
  return (timePart ^ randomPart) || 1;
}

async function loadQuizSource() {
  if (!state.testPath) {
    return EMBEDDED_TEST;
  }

  let response;
  try {
    response = await fetch(state.testPath, { cache: "no-store" });
  } catch {
    throw new Error(`Не удалось загрузить файл \"${state.testPath}\".`);
  }

  if (!response.ok) {
    throw new Error(`Файл \"${state.testPath}\" не найден (HTTP ${response.status}).`);
  }

  try {
    return await response.json();
  } catch {
    throw new Error(`Файл \"${state.testPath}\" содержит невалидный JSON.`);
  }
}

function validateQuiz(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("Некорректный формат теста: корневой JSON должен быть объектом.");
  }
  if (typeof payload.title !== "string" || !payload.title.trim()) {
    throw new Error("Некорректный формат теста: поле title должно быть строкой.");
  }
  if (!Array.isArray(payload.questions) || payload.questions.length === 0) {
    throw new Error("Некорректный формат теста: поле questions должно быть непустым массивом.");
  }

  const seenIds = new Set();
  const questions = payload.questions.map((question, index) => validateQuestion(question, index, seenIds));
  return {
    title: payload.title,
    questions
  };
}

function validateQuestion(question, index, seenIds) {
  const prefix = `Ошибка в вопросе #${index + 1}:`;

  if (!question || typeof question !== "object" || Array.isArray(question)) {
    throw new Error(`${prefix} объект вопроса отсутствует или некорректен.`);
  }

  if (typeof question.id !== "string" || !question.id.trim()) {
    throw new Error(`${prefix} поле id должно быть непустой строкой.`);
  }
  if (seenIds.has(question.id)) {
    throw new Error(`${prefix} id \"${question.id}\" повторяется.`);
  }
  seenIds.add(question.id);

  if (question.type !== "single" && question.type !== "multi") {
    throw new Error(`${prefix} type должен быть \"single\" или \"multi\".`);
  }

  if (typeof question.prompt !== "string" || !question.prompt.trim()) {
    throw new Error(`${prefix} поле prompt должно быть непустой строкой.`);
  }

  if (!Array.isArray(question.choices) || question.choices.length !== 4) {
    throw new Error(`${prefix} поле choices должно быть массивом из 4 строк.`);
  }
  if (!question.choices.every((choice) => typeof choice === "string")) {
    throw new Error(`${prefix} каждый элемент choices должен быть строкой.`);
  }

  if (typeof question.explain !== "string") {
    throw new Error(`${prefix} поле explain должно быть строкой.`);
  }

  let normalizedAnswer;
  if (question.type === "single") {
    if (!isIndexInRange(question.answer)) {
      throw new Error(`${prefix} answer для single должен быть числом от 0 до 3.`);
    }
    normalizedAnswer = question.answer;
  } else {
    if (!Array.isArray(question.answer) || question.answer.length < 2 || question.answer.length > 3) {
      throw new Error(`${prefix} answer для multi должен быть массивом из 2 или 3 чисел.`);
    }
    const unique = [];
    for (const value of question.answer) {
      if (!isIndexInRange(value)) {
        throw new Error(`${prefix} answer для multi содержит индекс вне диапазона 0..3.`);
      }
      if (!unique.includes(value)) {
        unique.push(value);
      }
    }
    if (unique.length !== question.answer.length) {
      throw new Error(`${prefix} answer для multi не должен содержать дубликаты.`);
    }
    normalizedAnswer = unique.sort((a, b) => a - b);
  }

  return {
    id: question.id,
    type: question.type,
    prompt: question.prompt,
    choices: [...question.choices],
    answer: normalizedAnswer,
    explain: question.explain
  };
}

function isIndexInRange(value) {
  return Number.isInteger(value) && value >= 0 && value <= 3;
}

function shuffleQuiz(quiz, seed) {
  const rng = createRng(seed);
  const questions = quiz.questions.map((question) => shuffleQuestion(question, rng));
  shuffleInPlace(questions, rng);
  return {
    title: quiz.title,
    questions
  };
}

function shuffleQuestion(question, rng) {
  const order = [0, 1, 2, 3];
  shuffleInPlace(order, rng);

  const choices = order.map((oldIndex) => question.choices[oldIndex]);
  const oldToNew = [0, 0, 0, 0];
  order.forEach((oldIndex, newIndex) => {
    oldToNew[oldIndex] = newIndex;
  });

  const answer = question.type === "single"
    ? oldToNew[question.answer]
    : question.answer.map((oldIndex) => oldToNew[oldIndex]).sort((a, b) => a - b);

  return {
    id: question.id,
    type: question.type,
    prompt: question.prompt,
    choices,
    answer,
    explain: question.explain
  };
}

function shuffleInPlace(list, rng) {
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
}

function createRng(seed) {
  let value = seed >>> 0;
  return function next() {
    value += 0x6D2B79F5;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildStorageKey() {
  return `exam_quiz_answers:v2:${encodeURIComponent(state.sourceKey)}:seed:${state.seed}`;
}

function loadStoredAnswers() {
  const restored = {};
  let raw;

  try {
    raw = window.localStorage.getItem(state.storageKey);
  } catch {
    return restored;
  }

  if (!raw) {
    return restored;
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return restored;
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return restored;
  }

  for (const question of state.quiz.questions) {
    const normalized = normalizeUserAnswer(question, parsed[question.id]);
    if (normalized !== null) {
      restored[question.id] = normalized;
    }
  }

  return restored;
}

function normalizeUserAnswer(question, value) {
  if (question.type === "single") {
    return isIndexInRange(value) ? value : null;
  }

  if (!Array.isArray(value)) {
    return null;
  }

  const unique = [];
  for (const item of value) {
    if (!isIndexInRange(item)) {
      return null;
    }
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  unique.sort((a, b) => a - b);
  return unique.length > 0 ? unique : null;
}

function saveAnswers() {
  try {
    window.localStorage.setItem(state.storageKey, JSON.stringify(state.answers));
  } catch {
  }
}

function updateHeader() {
  const total = state.quiz.questions.length;
  ui.quizTitle.textContent = state.quiz.title;
  ui.quizCount.textContent = `Вопросов: ${total}`;
  ui.stickySeed.textContent = state.testPath ? `Seed: ${state.seed} • t: ${state.testPath}` : `Seed: ${state.seed} • embedded`;
}

function renderQuestions() {
  const fragment = document.createDocumentFragment();

  state.quiz.questions.forEach((question, questionIndex) => {
    const article = document.createElement("article");
    article.className = "rounded-3xl border border-white/70 bg-white/90 p-5 shadow-soft backdrop-blur sm:p-6";
    article.dataset.questionIndex = String(questionIndex);
    article.dataset.questionCard = "1";

    const topRow = document.createElement("div");
    topRow.className = "mb-3 flex items-center justify-between gap-3";

    const number = document.createElement("p");
    number.className = "inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700";
    number.textContent = `Вопрос ${questionIndex + 1}`;

    const kind = document.createElement("p");
    kind.className = "text-xs font-semibold uppercase tracking-wide text-slate-500";
    kind.textContent = question.type === "multi" ? "Несколько ответов" : "Один ответ";

    topRow.append(number, kind);

    const prompt = document.createElement("h2");
    prompt.className = "font-display text-lg font-bold leading-snug sm:text-2xl";
    prompt.textContent = question.prompt;

    const choicesWrap = document.createElement("div");
    choicesWrap.className = "mt-4 grid gap-3";

    question.choices.forEach((choiceText, choiceIndex) => {
      const label = document.createElement("label");
      label.dataset.choiceLabel = "1";
      label.dataset.choiceIndex = String(choiceIndex);

      const input = document.createElement("input");
      input.className = "sr-only";
      input.type = question.type === "single" ? "radio" : "checkbox";
      input.name = `q-${questionIndex}`;
      input.value = String(choiceIndex);
      input.dataset.choiceInput = "1";
      input.dataset.questionIndex = String(questionIndex);
      input.dataset.choiceIndex = String(choiceIndex);
      if (isOptionSelected(question, choiceIndex)) {
        input.checked = true;
      }

      const marker = document.createElement("span");
      marker.dataset.role = "marker";
      marker.textContent = String.fromCharCode(65 + choiceIndex);

      const text = document.createElement("span");
      text.className = "flex-1 text-sm font-medium leading-relaxed text-slate-800 sm:text-base";
      text.textContent = choiceText;

      label.append(input, marker, text);
      choicesWrap.appendChild(label);
    });

    const status = document.createElement("p");
    status.dataset.role = "status";
    status.hidden = true;

    const explain = document.createElement("p");
    explain.dataset.role = "explain";
    explain.hidden = true;
    explain.className = "mt-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 sm:text-base";
    explain.textContent = question.explain;

    article.append(topRow, prompt, choicesWrap, status, explain);
    fragment.appendChild(article);
  });

  ui.questionsForm.replaceChildren(fragment);
}

function isOptionSelected(question, choiceIndex) {
  const userAnswer = state.answers[question.id];
  if (question.type === "single") {
    return userAnswer === choiceIndex;
  }
  return Array.isArray(userAnswer) && userAnswer.includes(choiceIndex);
}

function onFormChange(event) {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  const questionIndex = Number(target.dataset.questionIndex);
  if (!Number.isInteger(questionIndex) || questionIndex < 0 || questionIndex >= state.quiz.questions.length) {
    return;
  }

  const question = state.quiz.questions[questionIndex];

  if (question.type === "single") {
    const value = Number(target.value);
    if (isIndexInRange(value)) {
      state.answers[question.id] = value;
    } else {
      delete state.answers[question.id];
    }
  } else {
    const selected = [];
    const checkedInputs = ui.questionsForm.querySelectorAll(`input[data-choice-input="1"][data-question-index="${questionIndex}"]:checked`);
    checkedInputs.forEach((input) => {
      const value = Number(input.value);
      if (isIndexInRange(value) && !selected.includes(value)) {
        selected.push(value);
      }
    });
    selected.sort((a, b) => a - b);

    if (selected.length > 0) {
      state.answers[question.id] = selected;
    } else {
      delete state.answers[question.id];
    }
  }

  if (state.checked) {
    state.checked = false;
    hideResult();
  }

  saveAnswers();
  updateProgress();
  updateChoiceVisuals();
}

function onCheck() {
  if (!allQuestionsAnswered()) {
    return;
  }

  state.checked = true;
  const total = state.quiz.questions.length;
  let correct = 0;

  for (const question of state.quiz.questions) {
    if (isQuestionCorrect(question)) {
      correct += 1;
    }
  }

  showResult(correct, total);
  updateChoiceVisuals();
  ui.resultSummary.scrollIntoView({ behavior: "smooth", block: "start" });
}

function onReset() {
  state.answers = {};
  state.checked = false;

  try {
    window.localStorage.removeItem(state.storageKey);
  } catch {
  }

  const inputs = ui.questionsForm.querySelectorAll('input[data-choice-input="1"]');
  inputs.forEach((input) => {
    input.checked = false;
  });

  hideResult();
  updateProgress();
  updateChoiceVisuals();
}

function onRetry() {
  const params = new URLSearchParams(window.location.search);
  const newSeed = generateSeed();

  params.set("seed", String(newSeed));
  if (state.testPath) {
    params.set("t", state.testPath);
  } else {
    params.delete("t");
  }

  const query = params.toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
  window.location.assign(nextUrl);
}

function updateProgress() {
  const total = state.quiz.questions.length;
  const answered = countAnswered();
  const progress = total === 0 ? 0 : Math.round((answered / total) * 100);
  const allAnswered = total > 0 && answered === total;

  ui.answeredText.textContent = `Отвечено ${answered} из ${total}`;
  ui.stickyProgress.textContent = `Отвечено ${answered} из ${total}`;
  ui.progressBar.style.width = `${progress}%`;
  ui.checkBtn.disabled = !allAnswered;
}

function countAnswered() {
  let answered = 0;

  for (const question of state.quiz.questions) {
    if (isQuestionAnswered(question)) {
      answered += 1;
    }
  }

  return answered;
}

function isQuestionAnswered(question) {
  const value = state.answers[question.id];
  if (question.type === "single") {
    return isIndexInRange(value);
  }
  return Array.isArray(value) && value.length > 0;
}

function allQuestionsAnswered() {
  return countAnswered() === state.quiz.questions.length;
}

function isQuestionCorrect(question) {
  const userAnswer = state.answers[question.id];

  if (question.type === "single") {
    return userAnswer === question.answer;
  }

  const user = Array.isArray(userAnswer) ? [...new Set(userAnswer)].sort((a, b) => a - b) : [];
  if (user.length !== question.answer.length) {
    return false;
  }
  return question.answer.every((value, index) => value === user[index]);
}

function updateChoiceVisuals() {
  const cards = ui.questionsForm.querySelectorAll('article[data-question-card="1"]');

  cards.forEach((card) => {
    const questionIndex = Number(card.getAttribute("data-question-index"));
    if (!Number.isInteger(questionIndex) || questionIndex < 0 || questionIndex >= state.quiz.questions.length) {
      return;
    }

    const question = state.quiz.questions[questionIndex];
    const status = card.querySelector("[data-role='status']");
    const explain = card.querySelector("[data-role='explain']");

    if (status) {
      if (state.checked) {
        const correct = isQuestionCorrect(question);
        status.hidden = false;
        status.className = correct
          ? "mt-3 text-sm font-semibold text-emerald-700 sm:text-base"
          : "mt-3 text-sm font-semibold text-rose-700 sm:text-base";
        status.textContent = correct ? "Ответ верный" : "Ответ неверный";
      } else {
        status.hidden = true;
        status.textContent = "";
      }
    }

    if (explain) {
      explain.hidden = !state.checked;
    }

    const labels = card.querySelectorAll('label[data-choice-label="1"]');
    labels.forEach((label) => {
      const choiceIndex = Number(label.getAttribute("data-choice-index"));
      if (!isIndexInRange(choiceIndex)) {
        return;
      }

      const marker = label.querySelector("[data-role='marker']");
      const selected = isOptionSelected(question, choiceIndex);
      const visual = getChoiceVisual(question, choiceIndex, selected);

      label.className = `${CHOICE_BASE_CLASS} ${visual.label}`;
      if (marker) {
        marker.className = `${MARKER_BASE_CLASS} ${visual.marker}`;
      }
    });
  });
}

function getChoiceVisual(question, choiceIndex, selected) {
  if (!state.checked) {
    if (selected) {
      return {
        label: "border-brand-500 bg-brand-50 shadow-soft",
        marker: "border-brand-500 bg-brand-600 text-white"
      };
    }
    return {
      label: "border-slate-200 bg-white hover:border-brand-200 hover:bg-brand-50/40",
      marker: "border-slate-300 text-slate-500"
    };
  }

  const isCorrectOption = question.type === "single"
    ? question.answer === choiceIndex
    : question.answer.includes(choiceIndex);

  if (isCorrectOption) {
    return {
      label: "border-emerald-500 bg-emerald-50",
      marker: "border-emerald-500 bg-emerald-600 text-white"
    };
  }

  if (selected) {
    return {
      label: "border-rose-500 bg-rose-50",
      marker: "border-rose-500 bg-rose-600 text-white"
    };
  }

  return {
    label: "border-slate-200 bg-white",
    marker: "border-slate-300 text-slate-500"
  };
}

function hideResult() {
  ui.resultSummary.hidden = true;
  ui.resultSummary.className = "mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3";
  ui.resultScore.className = "text-base font-bold text-emerald-800 sm:text-lg";
  ui.resultPercent.className = "text-sm font-semibold text-emerald-700 sm:text-base";
  ui.resultScore.textContent = "0 / 0";
  ui.resultPercent.textContent = "0%";
}

function showResult(correct, total) {
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
  const success = percent >= 70;

  ui.resultSummary.hidden = false;
  ui.resultSummary.className = success
    ? "mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3"
    : "mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3";
  ui.resultScore.className = success
    ? "text-base font-bold text-emerald-800 sm:text-lg"
    : "text-base font-bold text-amber-800 sm:text-lg";
  ui.resultPercent.className = success
    ? "text-sm font-semibold text-emerald-700 sm:text-base"
    : "text-sm font-semibold text-amber-700 sm:text-base";

  ui.resultScore.textContent = `Результат: ${correct} / ${total}`;
  ui.resultPercent.textContent = `Точность: ${percent}%`;
}

function showError(message) {
  ui.errorText.textContent = message;
}

function setView(mode) {
  ui.loadingState.hidden = mode !== "loading";
  ui.errorState.hidden = mode !== "error";
  ui.quizState.hidden = mode !== "quiz";
}

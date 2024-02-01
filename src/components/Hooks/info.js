// useState();

// приймає [значеня] => повертає кортеж = масив з [значенням] та [функцією] *для змінити цього значення

const [age, setAge] = useState(42);

// АЛЕ
// якщо робити об'єктом
let [state, setState] = useState({ nowClicks: 0, step: 1 });
// то setState буде преезаписувати повністю УВЕСЬ об'єкт
// тож якщо робити оновлення чогось потрібно писати:
setState({ ...state, nowClicks: state.nowClicks + state.step });

// ТОЖ це поганий варіант


// краще розбити цей об'єкт на два useState
let [nowClicks, setNowClicks] = useState(0);
let [step, setStep] = useState( 1 );

//об'єкти краще обробляти іншою штукою

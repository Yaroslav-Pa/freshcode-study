import './App.css';
import UserCard from './components/userCard';
const users = [
  {
    id: 1,
    name: 'Іван',
    isMan: true,
    photo: '1.jpg',
    like: ['спорт', 'музика'],
    dislike: ['дощ', 'фастфуд'],
  },
  {
    id: 2,
    name: 'Марія',
    isMan: false,
    photo: '2.jpg',
    like: ['мистецтво', 'книги'],
    dislike: ['пізні підйоми', 'політика'],
  },
  {
    id: 3,
    name: 'Петро',
    isMan: true,
    photo: '3.jpg',
    like: ['подорожі', 'гірський велосипед'],
    dislike: ['недостатньо сну', 'швидка їжа'],
  },
  {
    id: 4,
    name: 'Олег',
    isMan: true,
    photo: '4.jpg',
    like: ['театр', 'кава'],
    dislike: ['пробки', 'неопрятність'],
  },
  {
    id: 5,
    name: 'Анна',
    isMan: false,
    photo: '5.jpg',
    like: ['велосипед', 'компютерні ігри'],
    dislike: ['холод', 'нудота'],
  },
  {
    id: 6,
    name: 'Тетяна',
    isMan: false,
    photo: '6.jpg',
    like: ['мода', 'кіно'],
    dislike: ['пил', 'брудні посуди'],
  },
  {
    id: 7,
    name: 'Оксана',
    isMan: false,
    photo: '7.jpg',
    like: ['політика', 'географія'],
    dislike: ['затяжні наради', 'зіпсовані плани'],
  },
  {
    id: 8,
    name: 'Кирил',
    isMan: true,
    photo: '8.jpg',
    like: ['фотографія', 'гуртки по інтересах'],
    dislike: ['серіали романтики', 'недостатньо часу'],
  },
  {
    id: 9,
    name: 'Олег',
    isMan: true,
    photo: '9.jpg',
    like: ['вишивання', 'музейні експозиції'],
    dislike: ['сутінки', 'розтрату часу'],
  },
  {
    id: 10,
    name: 'Андрій',
    isMan: true,
    photo: '10.jpg',
    like: ['автомобілі', 'спортивні заходи'],
    dislike: ['затримки в аеропорту', 'неякісний інтернет'],
  },
];
function App() {
  return (
    <div className="flex justify-center">
      <article className="grid grid-cols-4 justify-center items-start justify-items-center gap-x-9 gap-y-8  p-5">
        {users.map(({ id, name, isMan, photo, like, dislike }) => (
          <UserCard
            id={id}
            name={name}
            isMan={isMan}
            photo={photo}
            like={like}
            dislike={dislike}
            key={id}
          />
        ))}
      </article>
    </div>
  );
}

export default App;

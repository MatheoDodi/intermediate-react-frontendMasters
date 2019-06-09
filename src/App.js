const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Terrier' }),
    React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'mixed' }),
    React.createElement(Pet, { name: 'Jack', animal: 'Dog', breed: 'Husky' })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));

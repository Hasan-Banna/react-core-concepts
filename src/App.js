import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
function App() {
  const nayok = ['Razzak', 'Riaz', 'Shakib', 'Shuvo'];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$69.80'},
    {name: 'PDF', price: '$40.00'},
    {name: 'Premier pro', price: '$150.00'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayok.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(20);
  const handleIncrease = () => setCount(count + 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    color: 'blue',
    margin: '10px'
  }
  const{name, price} = props.product;
return(
  <div style={productStyle}>
    <h3>{name}</h3>
    <h2>{price}</h2>
    <button>Buy Now</button>
  </div>
)
}
export default App;

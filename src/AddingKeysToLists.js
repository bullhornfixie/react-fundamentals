import './App.css';

const ShowDishes = (props) => {
  return (
    <ul style={{ textAlign: "left" }}> 
      {props.list.map((dish) => (
        <li key={dish.id}>{dish.title}</li>
      ))}
    </ul>
  )
}

const dishes = [
  "Macaroni Cheese",
  "Pizza"
]

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }))
console.log(dishObjects)


function AddingKeysToLists() {
  return (
    <ShowDishes list={dishObjects} /> 
  );
}

export default AddingKeysToLists;

// props is an object 
// think of props like backpack and we are putting items in in such as "list"
// we are then asking for an item out of backpack by props.list 

// key is like an id which keeps everything in synch 
// a key is generated on iteration by using i 
// best practice to pass an array of objects rather than array 
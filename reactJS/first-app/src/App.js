import './App.css';

let name = "vansh";
function App() {
  return (
    <div>
      // navbar
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </nav>

      // container
      <div className="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt soluta saepe aut consequatur, facere ad nihil blanditiis. Aspernatur laborum eius natus ad, nemo vel laboriosam molestiae culpa excepturi magni dolorum saepe esse iste eum assumenda quasi non. Sit reiciendis illum harum, quaerat nisi beatae a! Eum similique quis corrupti velit eveniet! Praesentium exercitationem magni ducimus labore ipsum quis recusandae minus, corrupti eveniet quas perspiciatis totam ut quos, sed veniam error a. Repellat expedita recusandae ullam reiciendis tempora deleniti iste quaerat qui quisquam porro accusamus nam voluptates mollitia nostrum obcaecati asperiores, eos eaque accusantium libero similique nesciunt dolores. Sint, id unde!</p>
      </div>
    </div>
  );
}

export default App;

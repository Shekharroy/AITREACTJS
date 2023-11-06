function List() {
  var information = ["HTML", "CSS", "JS"];
  return (
    <div>
      <h2>Set of Technologies</h2>
      <ol>
        {information.map(function (element, index) {
          return <li> {element}</li>;
        })}
      </ol>
    </div>
  );
}

export default List;

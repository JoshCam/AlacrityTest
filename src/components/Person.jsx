import React from "react";

const Person = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        Name {props.first_name}: Age {props.age}
      </p>
    </div>
  );
};

export default Person;

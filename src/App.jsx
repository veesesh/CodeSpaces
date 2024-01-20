import { useEffect, useRef, useState } from "react";
import "./App.css";


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Request-Headers", "null");
myHeaders.append("api-key", "501TNEVCcPCbuNjBDKVAqbU3cMQ30SwJHBBd3DzMo0Pc2aUsEsPiw9bBfEzD7pyG");

var raw = JSON.stringify({
  "dataSource": "Cluster0",
  "database": "cvbdvb",
  "collection": "dfgsdfgdsfg",
  "document": {
    "text": "Veeeee"
  }
});

var requestOptions = {
  mode: "no-cors",
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ap-south-1.aws.data.mongodb-api.com/app/data-zvpzn/endpoint/data/v1/action/insertOne", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputField = useRef(null);
  useEffect(function () {
    // fetch(
    //   "https://realm.mongodb.com/api/client/v2.0/app/data-zvpzn/auth/providers/local-userpass/login",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username: "curiousvee19@gmail.com",
    //       password: "wJdwpaI4SfxSdvFI",
    //     }),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((re) => console.log(re));
  }, []);

  function handleClick() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Request-Headers", "null");
    myHeaders.append(
      "api-key",
      "501TNEVCcPCbuNjBDKVAqbU3cMQ30SwJHBBd3DzMo0Pc2aUsEsPiw9bBfEzD7pyG"
    );

    var raw = JSON.stringify({
      dataSource: "Cluster0",
      database: "cvbdvb",
      collection: "dfgsdfgdsfg",
      document: {
        name: inputValue,
      },
    });

    var requestOptions = {
      mode: "no-cors",
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://ap-south-1.aws.data.mongodb-api.com/app/data-zvpzn/endpoint/data/v1/action/insertOne",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        value={inputValue}
        ref={inputField}
        onChange={() => setInputValue(inputField.current.value)}
      />
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Access-Control-Request-Headers", "*");
// myHeaders.append("api-key", "501TNEVCcPCbuNjBDKVAqbU3cMQ30SwJHBBd3DzMo0Pc2aUsEsPiw9bBfEzD7pyG");

// var raw = JSON.stringify({
//   "dataSource": "Cluster0",
//   "database": "cvbdvb",
//   "collection": "dfgsdfgdsfg",
//   "document": {
//     "text": "Hello, world!"
//   }
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://ap-south-1.aws.data.mongodb-api.com/app/data-zvpzn/endpoint/data/v1/action/insertOne", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

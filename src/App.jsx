import { useEffect, useState } from "react";
import "./App.css";

var data = JSON.stringify({
  "collection": "<COLLECTION_NAME>",
  "database": "sample_training",
  "dataSource": "Cluster0",
  "projection": {
      "_id": 1
  }
});
          
var config = {
  method: 'post',
  url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-zvpzn/endpoint/data/v1/action/findOne',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'Authorization': 'Bearer <ACCESS_TOKEN>',
  },
  data: data
};

function App() {
  useEffect(function () {
    fetch(
      "https://realm.mongodb.com/api/client/v2.0/app/data-zvpzn/auth/providers/local-userpass/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "curiousvee19@gmail.com",
          password: "wJdwpaI4SfxSdvFI",
        }),
      }
    )
      .then((res) => res.json())
      .then((re) => console.log(re));
  }, []);

  return <>Test</>;
}

export default App;





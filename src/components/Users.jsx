import { Navigate } from 'react-router-dom';
import "../App.css"
import axios from 'axios';
import { useState,useEffect } from 'react';

export const Users = () => {

const [data, setData] = useState([]);

const getData = () => {  

  axios.get('http://localhost:5000/users')
    .then((res) => {
      setData(res.data);
    })
    .catch((er) => {
      console.log(er);
      setData([]);
    });
};

useEffect(() => {
  getData();
});

  return (
    <>
      <h1 id='h1'> All Users</h1>
      {data.map((e) => {
        return (
          <div>
            {' '}
            <div className="data">
              <div key={e.id}>
                <h4>Name:{e.name}</h4>
                <p>Age:{e.age}</p>
                <p>DateOfBirth:{e.dateofbirth}</p>
                <p>State:{e.stateofresidence}</p>
                <p>Address:{e.address}</p>
                <p>Pincode:{e.pincode}</p>
              </div>
            </div>
          </div>
        );
      })}

    </>
  );
};
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net';
import 'datatables.net-responsive';

export default function App() {
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [users3, setUsers3] = useState([]);
  const [users4, setUsers4] = useState([]);
  const [users5, setUsers5] = useState([]);

  useEffect(() => {
    // Fetch users with income lower than $5 USD and BMW/Mercedes car
    axios.get('http://localhost:4000/api/contents/filter1')
      .then(response => setUsers1(response.data))
      .catch(error => console.error(error));

    // Fetch male users with phone price greater than 10,000
    axios.get('http://localhost:4000/api/contents/filter2')
      .then(response => setUsers2(response.data))
      .catch(error => console.error(error));

    // Fetch users whose last name starts with "M" and quote length > 15 and email includes last name
    axios.get('http://localhost:4000/api/contents/filter3')
      .then(response => setUsers3(response.data))
      .catch(error => console.error(error));


    // Fetch users with BMW/Mercedes/Audi car and email does not include any digit
    axios.get('http://localhost:4000/api/contents/filter4')
      .then(response => setUsers4(response.data))
      .catch(error => console.error(error));

    // Fetch top 10 cities by user count and average income
    axios.get('http://localhost:4000/api/contents/filter5')
      .then((response) =>  setUsers5(response.data))
      .catch(error => console.error(error));
  }, []);

  return (console.log(1,users5),
    <div className='container'>

      <div class="card mt-5">
        <div class="card-header">
          <h4>Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h4>        </div>
        <div class="card-body">
          <div className='container'>

            <div style={{ overflowY: 'scroll', height: '50vh' }}>
              <table id='table1' className='table-responsive table table-striped table-bordered dt-responsive nowrap display'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quote</th>
                    <th>Phone Price</th>
                  </tr>
                </thead>
                <tbody>
                  {users1.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.income}</td>
                      <td>{user.city}</td>
                      <td>{user.car}</td>
                      <td>{user.quote}</td>
                      <td>{user.phone_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-header">
          <h4>Male Users which have phone price greater than 10,000</h4>
        </div>
        <div class="card-body">
          <div className='container'>
            <div style={{ overflowY: 'scroll', height: '50vh' }}>
              <table className='table table-stripped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quote</th>
                    <th>Phone Price</th>
                  </tr>
                </thead>
                <tbody>
                  {users2.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.income}</td>
                      <td>{user.city}</td>
                      <td>{user.car}</td>
                      <td>{user.quote}</td>
                      <td>{user.phone_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-header">
          <h4>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name:</h4>
        </div>
        <div class="card-body">
          <div className='container'>


            <div style={{ overflowY: 'scroll', height: '50vh' }}>
              <table className='table table-stripped'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quote</th>
                    <th>Phone Price</th>
                  </tr>
                </thead>
                <tbody>
                  {users3.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.income}</td>
                      <td>{user.city}</td>
                      <td>{user.car}</td>
                      <td>{user.quote}</td>
                      <td>{user.phone_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-header">
          <h4>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit:</h4>
        </div>
        <div class="card-body">

          <div style={{ overflowY: 'scroll', height: '50vh' }}>
            <table className='table table-stripped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Income</th>
                  <th>City</th>
                  <th>Car</th>
                  <th>Quote</th>
                  <th>Phone Price</th>
                </tr>
              </thead>
              <tbody>
                {users4.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.income}</td>
                    <td>{user.city}</td>
                    <td>{user.car}</td>
                    <td>{user.quote}</td>
                    <td>{user.phone_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-header">
          <h4>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit:</h4>
        </div>
        <div class="card-body">

          <div style={{ overflowY: 'scroll', height: '50vh' }}>
            <table className='table table-stripped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Income</th>
                  <th>City</th>
                  <th>Car</th>
                  <th>Quote</th>
                  <th>Phone Price</th>
                </tr>
              </thead>
              <tbody>
                {users5.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.income}</td>
                    <td>{user.city}</td>
                    <td>{user.car}</td>
                    <td>{user.quote}</td>
                    <td>{user.phone_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <div class="card mt-5">
        <div class="card-header">
          <h4>Show the data of top 10 cities which have the highest number of users and their average income:</h4>
        </div>
        <div class="card-body">

          <div style={{ overflowY: 'scroll', height: '50vh' }}>
            <table className='table table-stripped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Income</th>
                  <th>City</th>
                  <th>Car</th>
                  <th>Quote</th>
                  <th>Phone Price</th>
                </tr>
              </thead>
              <tbody>
                {users5.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.income}</td>
                    <td>{user.city}</td>
                    <td>{user.car}</td>
                    <td>{user.quote}</td>
                    <td>{user.phone_price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </div>
  );
}

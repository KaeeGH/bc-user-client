import React, { useState } from 'react'
import md5 from 'md5'
import axios from 'axios'
import './App.css';

const url = 'http://localhost:8000'

function Delete(userId: string) {
  axios.delete(url + '/api/users', { data: { id: userId } }).then(res => console.log(res))
}

function Post(email: string, password: string) {
  const hashed = md5(password)
  axios.post(url + '/api/users', { email: email, password: hashed})
}

function Get() {
  axios.get(url + '/api/users').then(res => console.log(res.data))
}

function App() {
  const [userId, setUserId] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <div className="App">
      <div>
        userId:<input id="userIdInput" onChange={(event) => setUserId(event.target.value)}/>
      </div>
      <div>
        email:<input id="emailInput" onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        password:<input id="password" onChange={(event) => setPassword(event.target.value)}/>
      </div>
      <button onClick={() => Get()}>GET</button>
      <button onClick={() => Post(email, password)}>POST</button>
      <button onClick={() => Delete(userId)}>DELETE</button>
    </div>
  );
}

export default App;

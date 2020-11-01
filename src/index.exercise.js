import React from 'react'
import ReactDom from 'react-dom'
import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'
import {Logo} from './components/logo'

function LoginForm({onSubmit, buttonText}) {
    function handleSubmit(event) {
      event.preventDefault()
      const {username, password} = event.target.elements
  
      onSubmit({
        username: username.value,
        password: password.value,
      })
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <button type="submit">{buttonText}</button>
        </div>
      </form>
    )
  }
function App() {
    const [openModal, setOpenModal] = React.useState('none')
    function login(formData) {
        console.log('login', formData)
      }
    
      function register(formData) {
        console.log('register', formData)
      }
    return (
        <>
            <Logo width="80" height="80" />
            <h1>Bookshelf</h1>
            <div>
                <button onClick={() => setOpenModal('login')}>Login</button>
            </div>
            <div>
                <button onClick={() => setOpenModal('register')}>Register</button>
            </div>
            <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
                <div>
                <button onClick={() => setOpenModal('none')}>Close</button>
                </div>
                <h3>Login</h3>
                <LoginForm buttonText='Login' onSubmit={login}/>
            </Dialog>
            <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
                <div>
                <button onClick={() => setOpenModal('none')}>Close</button>
                </div>
                <h3>Register</h3>
                <LoginForm buttonText='Register' onSubmit={register}/>
            </Dialog>
        </>

    )
}

ReactDom.render(<App />, document.getElementById('root'))

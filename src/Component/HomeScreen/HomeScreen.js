import React from 'react'
import { Button } from "antd"
import 'antd/dist/antd.css';
import { app } from "../../base"



const userProfile = app.firestore().collection("user")
function HomeScreen() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassWord] = React.useState("")
  const [Bio, setBio] = React.useState("")
  const [toggle, setToggle] = React.useState(true)
  const [current, setCurrent] = React.useState([])

  const click = () => {
    setToggle(!toggle)
  }

  const signOut = () => {
    app.auth().signOut()
  }

  const Register = async () => {
    await app.auth().createUserWithEmailAndPassword(email, password)
  }

  const SignInNow = () => {
    app.auth().signInWithEmailAndPassword(email, password)
  }

  console.log(current)
  React.useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrent(user)
    })

  }, [])
  return (
    <>
      <br />
      <br />
      <center>
        <Button

          onClick={
            signOut
          }

        >
          Sign Out
      </Button>
      </center>
      {
        toggle ? <div>
          <center>
            Fill In Your Details
  </center>
          <center>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",

              }}
            >
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={name}
                onChange={
                  (e) => {
                    setName(e.target.value)
                  }
                }
                placeholder="name" />
              <br />
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={email}
                onChange={
                  (e) => {
                    setEmail(e.target.value)
                  }
                }
                placeholder="email" />
              <br />
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={password}
                onChange={
                  (e) => {
                    setPassWord(e.target.value)
                  }
                }
                placeholder="password" />
              <br />
              <input
                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",
                  paddingLeft: "10px",
                  display: "flex",

                }}
                value={Bio}
                onChange={
                  (e) => {
                    setBio(e.target.value)
                  }
                }
                placeholder="Bio" />
              <br />
              <Button

                style={{
                  width: "100%",
                  height: "40px",
                  alignItems: "center",

                }}
                onClick={Register}
              >
                Sing Up
      </Button>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"

              }}>
                Already Have an account
        <div
                  onClick={click}
                >
                  Log In
          </div>
              </div>


            </div>

          </center>
          <div>
            {

              <center>
                <div>{current && current.email}</div>
                <div>{current && current.name}</div>
              </center>
            }
          </div>

        </div>
          :
          <div>
            <center>
              Log In
</center>
            <center>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",

                }}
              >

                <br />
                <input
                  style={{
                    width: "100%",
                    height: "40px",
                    alignItems: "center",
                    paddingLeft: "10px",
                    display: "flex",

                  }}
                  value={email}
                  onChange={
                    (e) => {
                      setEmail(e.target.value)
                    }
                  }
                  placeholder="email" />
                <br />
                <input
                  style={{
                    width: "100%",
                    height: "40px",
                    alignItems: "center",
                    paddingLeft: "10px",
                    display: "flex",

                  }}
                  value={password}
                  onChange={
                    (e) => {
                      setPassWord(e.target.value)
                    }
                  }
                  placeholder="password" />
                <br />


                <Button

                  style={{
                    width: "100%",
                    height: "40px",
                    alignItems: "center",

                  }}
                  onClick={SignInNow}
                >
                  Log In
    </Button>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  Dont have an account
                  <div
                    onClick={click}
                  >
                    Sign up now
          </div>
                </div>


              </div>

            </center>
            <div>
              {

                <center>
                  <div>{current && current.email}</div>
                  <div>{current && current.name}</div>
                </center>
              }
            </div>


          </div>

      }
    </>
  )
}

export default HomeScreen

import Button from './components/Button';
import Greeting from './components/Greeting';
import ClickCounter from './components/Counter/ClickCounter';
import HoverCounter from './components/Counter/HoverCounter';
import Counter from './components/Counter/Counter';
import User from './components/User/User';
import Admin from './components/User/Admin';
import Logout from './components/User/Logout';
//  Task 2021-10-01 react-prop-types passing props without REACT_API_hooks
import Paragraph from './components/Paragraph_user';
//second component
import Cookies from './components/Cookies';
import SetCookie from './components/SetCookie';
function App() {
  return (
    <>
      <h1>Render Props</h1>
      <div>
        {/* <Button text='Count' action={() => console.log('testFunc')} />
        <Greeting
          render={(type) =>
            //type ? <h1></h1> : <h6></h6>
            type === 'large' ? (
              <h1>Hellow from GreetingJSX</h1>
            ) : (
              <h6>Hellow from ternary app greeting</h6>
            )
          }
        /> */}
        {/* <Greeting render={() => <h5>Hellow from GreetingJSX2</h5>} /> */}
        {/* <Counter
          render={(count, increment) => (
            <ClickCounter count={count} increment={increment} />
          )}
        />
        <Counter
          render={(count, increment) => (
            <HoverCounter count={count} increment={increment} />
          )}
        /> */}
        {/* User / Admin */}
        {/* <Logout
          render={(logout) => (
            <User
              userData={{ name: 'John', email: 'john@johnies.jo' }}
              logout={logout}
            />
          )}
        />
        <Logout
          render={(logout) => (
            <Admin
              adminData={{
                name: 'Alexx',
                email: 'Saha@rossia.pravda',
                role: 'SEO manager',
              }}
              logout={logout}
            />
          )}
        /> */}
        <hr />
        <p>---TASK render props---</p>
        <br />
        <Paragraph
          render={(type) =>
            //type ? <h1></h1> : <h6></h6>
            type === 'has_info' ? <h1>true: {type}</h1> : <h1>false: noinfo</h1>
          }
        />
        <br />
        <hr />
        <br />
        <SetCookie
          render={(cookie) => (
            <Cookies instantData={{ id: '1', name: 'test' }} cookie={cookie} />
          )}
        />
        <SetCookie
          render={(cookie) => (
            <Cookies instantData={{ id: '2', name: 'test2' }} cookie={cookie} />
          )}
        />
      </div>
    </>
  );
}

export default App;

import Button from './components/Button';
import Greeting from './components/Greeting';
import ClickCounter from './components/Counter/ClickCounter';
import HoverCounter from './components/Counter/HoverCounter';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <>
      <h1>Render Props</h1>
      <div>
        <Button text='Count' action={() => console.log('testFunc')} />
        <Greeting
          render={(type) =>
            //type ? <h1></h1> : <h6></h6>
            type === 'large' ? (
              <h1>Hellow from GreetingJSX</h1>
            ) : (
              <h6>Hellow from ternary app greeting</h6>
            )
          }
        />
        {/* <Greeting render={() => <h5>Hellow from GreetingJSX2</h5>} /> */}
        <Counter
          render={(count, increment) => (
            <ClickCounter count={count} increment={increment} />
          )}
        />
        <Counter
          render={(count, increment) => (
            <HoverCounter count={count} increment={increment} />
          )}
        />
      </div>
    </>
  );
}

export default App;

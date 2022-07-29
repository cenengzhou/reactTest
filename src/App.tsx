import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { increment, decrement, incrementByAmount, fetchUserById } from './reducers/counter'

const Show = () => {
  const dispatch = useDispatch()
  const index = useSelector((state: any) => state.counter.value)
  store.subscribe(() => {
    console.log(store)
  })
  return (
    <div>
      <div>{JSON.stringify(store)}</div>
      <div>{index}</div>
      <button onClick={() => dispatch(fetchUserById())}>increment</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>incrementByAmount</button>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
        <div>
          <Show></Show>
        </div>
    </Provider>
  );
}

export default App;

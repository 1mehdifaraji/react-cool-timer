# react-cool-timer

React timer countdown hook with easy to use API .

### Installation

```sh
npm install --save react-cool-timer
```

or

```sh
yarn add react-cool-timer
```

or

```sh
pnpm add react-cool-timer
```

### Usage

```javascript
import { useTimer } from "react-cool-timer";

export const App = () => {
  const { timeLeft } = useTimer({
    onEndReached: () => console.log("Reached end"),
    timeInterval: 20,
  });
  return <div>Timeleft : {timeLeft}</div>;
};
```

## Available props

| Name         | Type         | Default      | Description                             |
| ------------ | ------------ | ------------ | --------------------------------------- |
| onEndReached | `() => void` | `null`       | Sets a function to run after timer ends |
| timeInterval | `number`     | **REQUIRED** | Sets time interval in seconds           |

## Developer

[@1mehdifaraji](https://github.com/1mehdifaraji)

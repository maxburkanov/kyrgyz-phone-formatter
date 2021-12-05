## Phone formatter for kyrgyzstan phone numbers

Input that only allows numbers, and formats the input text to format as you type starting from "0".

```shell script
0555555555 --> (0555) 55-55-55
```

## Usage

```shell script
yarn add phone-formatter-kyrgyz
```

```shell script
npm install phone-formatter-kyrgyz
```

```typescript
import { formatNumber } from "phone-formatter-kyrgyz";

const [input, setInput] = React.usestate<string>("");

const onChange = (e) => {
  const value = e.target.value;
  const result = formatNumber(value);

  setInput(result);
};

console.log(input);
// (0
// (05
// (055
// (0555)
// (0555) 5
// (0555) 55-
// (0555) 55-55-
// (0555) 55-55-55
```

```jsx
<input onChange={onChange} value={input}> // 0555555555 -> (0555) 55-55-55
```

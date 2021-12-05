## Phone formatter for kyrgyzstan phone numbers

Input that only allows numbers, and formats the input text to format as you type.

## Usage

```shell script
yarn add phone-formatter-kyrgyz
```

```shell script
npm install phone-formatter-kyrgyz
```

```typescript
import { formatNumber } from "phone-formatter-kyrgyz";

const [input, setInput] = React.Usestate<string>("");

const onChange = (e) => {
  const value = e.target.value;
  const result = formatNumber(value);

  setInput(result);
};
```

```jsx
<input onChange={onChange} value={input}>
```

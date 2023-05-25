# Word Finding Game

Made with **React** & **TailwindCSS** using **_Wordle Answers Solutions_ API**

![Screenshot](public/chrome-capture-2023-4-25.gif)

### Fisher-Yates Algorithm

I've used Fisher-Yates Algorithm to shuffle my array of buttons.
This algorithm picks elements starting from last one. Then it randomly picks one of the previous elements and swap places with it. It keeps doing it for every element of the array.

```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

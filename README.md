# vue-iterator
イテレータークラスとその使用例を実装した。

[DEMO](https://tktr90755.github.io/vue-iterator/) 

## Usage
```js
import Item from '@/assets/js/libs/tk90755/utils/iterator/Item.js'
import Iterator from '@/assets/js/libs/tk90755/utils/iterator/Iterator.js'
let list = [
    './images/card_club_01.png', 
    './images/card_club_02.png', 
    './images/card_club_03.png',
    './images/card_club_04.png',
    './images/card_club_05.png',
    './images/card_club_06.png',
    './images/card_club_07.png',
    './images/card_club_08.png',
    './images/card_club_09.png',
    './images/card_club_10.png',
    './images/card_club_11.png',
    './images/card_club_12.png',
    './images/card_club_13.png'
]
var iIterator = new Iterator();
for(let i in list){
    let path = list[i];
    let content = $refs[path][0];
    iterator.addItem(new Item(content, path));
}
setInterval(function(){
    let nextItem = (this.iterator.hasNext())?this.iterator.next():this.iterator.fast();
    nextItem.content.excute()
}, 100);
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Prize app 

This is a prize drawing app built with React and Redux. Written in Container/View pattern.

### To view Live Demo 
[VIEW LIVE](https://prize-page.vercel.app)

![](https://media3.giphy.com/media/DhjRqTTRtlxQ12JaRb/giphy.gif?cid=790b7611b5047806d91a285dab8599d968719ceb3bcd51e8&rid=giphy.gif&ct=g)



### To run locally

1. git clone this repo
2. `npm i`
3. `npm run start`


### *Latest Update*
Performance bug fixes:
- [x] 沒有使用的套件，請從 package.json 移除
- [x] 題目是要求使用redux 但是資料傳遞主軸是採用context api
- [x] 時間輸入超過59分鐘之後 呈現上會錯誤
- [x] 倒數計時會re-render很嚴重
  - useCountDown slipt remainTime dependency
  - pull displayTime from TimerView into useCountDown , make them useRef instead of useState
  - re-arranged startCount() and remove setCount(), depend [userSetMin, userSetSec ] in useCount
  - winnerModelView: referential issue

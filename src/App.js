import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
    {
        id: 1,
        author: "채수원",
        content: "안녕하세요",
        emotion: 5,
        created_date: new Date().getTime()
    },
    {
        id: 2,
        author: "채수원",
        content: "오늘은 잠을 별로 못 잤다.",
        emotion: 3,
        created_date: new Date().getTime()
    },
    {
        id: 3,
        author: "채수원",
        content: "오늘은 맛집을 갔다.",
        emotion: 5,
        created_date: new Date().getTime()
    }
];

const App = () => {
    return (
        <div className="App">
            <DiaryEditor />
            <DiaryList diaryList={dummyList} />
        </div>
    );
};
export default App;

import NavBar from "./NavbBar";
import NewsList from './NewsList/NewsList';
import NewsAddForm from './NewsAddForm';
import NewsFilter from './NewsFilter';

function App(props) {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <NewsList />
        <div className="content__page">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  )
}

export default App;

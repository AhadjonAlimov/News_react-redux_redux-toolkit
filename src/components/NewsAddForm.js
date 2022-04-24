import {useState} from 'react';
import {useHttp} from '../hook/useHttp';
import {useDispatch, useSelector} from 'react-redux';
import {v4} from 'uuid';
import {newsCreated} from './NewsList/news_slice';

function NewsAddForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const {filters, filterLoadingStatus} = useSelector(state => state.filter)
  const dispatch = useDispatch();
  const {request} = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newNews = {id: v4(), name, description, category};
    request("http://localhost:3001/news", "POST", JSON.stringify(newNews))
      .then(res => console.log(res))
      .then(dispatch(newsCreated(newNews)))
      .catch(err => console.log(err))

    setName("")
    setCategory("")
    setDescription("")
  }

  const renderFilters = (filters, status) => {
    if(status === "loading") {
      return <option>Loading options</option>
    }else if(status === "error") {
      return <option>Error options</option>
    }

    if(filters && filters.length > 0){
      return filters.map(({name, label}) => {
        // eslint-disable-next-line
        if(name === "all") return;
        return <option key={name} value={name}>{label}</option>
      })
    }
  }

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">Name for new News</label>
        <input 
          type="text"
          required name="name" 
          className="form-control" 
          id="name" 
          placeholder="What is name of news?" 
          value={name}
          onChange={(e) => setName(e.target.value)}  
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">Description</label>
        <textarea 
          type="text" 
          required name="text" 
          className="form-control" 
          id="text" 
          placeholder="What is yor news about?" 
          style={{"height": "120px"}} 
          value={description}
          onChange={(e) => setDescription(e.target.value)}  
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Choose category of news</label>
        <select 
          required 
          className="form-select" 
          id="category" 
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}  
        >
          <option>Category of News...</option>
          {renderFilters(filters, filterLoadingStatus)}
        </select>
      </div>
      <button type="submit" className="btn btn-dark shadow-lg w-100 text-light">Create News</button>
    </form>
  );
}

export default NewsAddForm;


// Vazifa:
// Yangiliklar qo'shish funktsyasini yozish.
// P.S. No odatiy ID uchun UUID kutubxonadan foydalanshingiz mumkin

// O'rta vazifa 
// yangiliklar qo'shilgan vaqt, category bo'yicha ajralish

// Qiyin vazifa.
// Yangiliklar db.json ga ham tushush kerak bo'ladi.
import React from 'react';

function NewsListItem({name, description, category, onDelete}) {
  let elementClassName;
  switch (category){
    case "Hot News":
      elementClassName = "bg-danger bg-gradient"
      break
    case "Sport News":
      elementClassName = "bg-primary bg-gradient"
      break
    case "World News":
      elementClassName = "bg-success bg-gradient"
      break
    default:
      elementClassName = "bg-info bg-gradient"
  }
  return (
    <li className={`card flex-row shadow-lg text-white my-2 ${elementClassName}`}>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1585007600263-71228e40c8d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHdoaXRlfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt="News Img"
        className="img-fluid w-25 d-inline"
        style={{'objectFit': "cover"}}  
      />
      <span className="position-absolute top-0 end-90 translate-middle badge border rounded-pill bg-light">
        <button onClick={onDelete} type="button" className="btn-close" aria-label="Close"></button>
      </span>
    </li>
  );
}

export default NewsListItem;
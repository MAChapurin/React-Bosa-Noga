import { Link } from "react-router-dom";


export function CatalogNavItem({title, id, currentId, setCurrentId}) {
    return (
        <li className="nav-item" id={id}>
        <Link className={`nav-link ${currentId === id ? 'active' : null}`} to="#" onClick={(e)=> {
            e.preventDefault();
            setCurrentId(id);
            console.log(title, id, currentId);
        }}>
         {title}
        </Link>
      </li>
    )
}
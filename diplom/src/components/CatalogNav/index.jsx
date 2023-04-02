import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CatalogNavItem } from "../CatalogNavItem";
import { Preloader } from "../Preloader";

export function CatalogNav() {
  const [titles, setTtitles] = useState([]);
  const [currentId, setCurrentId] = useState(11);
  const [loaded, setLoaded] = useState(false);

  const log = ()=> {

  }

  useEffect(() => {
    if (loaded) return ;
    fetch("http://localhost:7070/api/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTtitles(data);
        setLoaded(true);
      },[loaded]);
  });
  return (
    <ul className="catalog-categories nav justify-content-center">
      <CatalogNavItem key={11} id={11} title="Все" currentId={currentId} setCurrentId={setCurrentId}/>
      {titles.length
        ? titles.map((title) => {
            return (
              <CatalogNavItem key={title.id} {...title} currentId={currentId} setCurrentId={setCurrentId}/>
            );
          })
        : null}
    </ul>
  );
}

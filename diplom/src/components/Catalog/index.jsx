import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Card } from "../Card";
import { CatalogNav } from "../CatalogNav";
import { Preloader } from "../Preloader";

export function Catalog() {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(6);
  const [error, setError] = useState(null);
  const [categoryId, setCategoryId] = useState(null);

  const getData = (param, cb1, cb2) => {
    const URL = "http://localhost:7070/api/items";
    fetch(`${URL}${param}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        cb1([...catalog, ...data]);
      })
      .catch((error) => {
        console.log(error);
        cb1([]);
        cb2(error);
      })
      .finally(() => {
        setLoading(false);
        console.log("getData test finished");
      });
  };

  const loadMore = () => {
    setOffset((prev) => prev + 6);
    setLoading(true);
    getData(`?offset=${offset}&${categoryId}`, setCatalog, setError);
    // fetch(`http://localhost:7070/api/items?offset=${offset}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("LoadMore: ", data);
    //     setCatalog([...catalog, ...data]);
    //   }).catch(error => {
    //     console.log(error);
    //     setCatalog([]);
    //     setError(error);
    //   }).finally(()=> {
    //     setLoading(false);
    //   })
  };
  useEffect(() => {
    fetch("http://localhost:7070/api/items")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCatalog(data);
        setLoading(false);
      });
  }, []);
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
     <CatalogNav/>
      <div className="row">
        {catalog.length
          ? catalog.map((el) => {
              const { title, price, images, id } = el;
              return <Card key={el.id} {...el} />;
            })
          : null}
        {error ? <p>Ошибка при загрузке данных</p> : null}
      </div>
      {offset > 62 ? null : (
        <div className="text-center">
          {loading ? (
            <Preloader />
          ) : (
            <button
              onClick={() => {
                loadMore();
              }}
              className="btn btn-outline-primary"
            >
              Загрузить ещё
            </button>
          )}
        </div>
      )}
    </section>
  );
}

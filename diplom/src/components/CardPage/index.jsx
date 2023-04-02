import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { nanoid } from "nanoid";

export function CardPage() {
  const [good, setGood] = useState({});
  const [count, setCount] = useState(1);
  const {
    title,
    images,
    sku,
    manufacturer,
    color,
    material,
    reason,
    season,
    heelSize,
    price,
    oldPrice,
    sizes,
  } = good;
  const { id } = useParams();
  useEffect(() => {
    console.log("CardPage:", id);
    fetch(`http://localhost:7070/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGood(data);
      });
  }, []);
  return (
    <section className="catalog-item">
      <h2 className="text-center">{title}</h2>
      <div className="row">
        <div className="col-5">
          <img
            // src=".././img/products/sandals_myer.jpg"
            src={images ? images[0] : null}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-7">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Артикул</td>
                <td>{sku}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{manufacturer}</td>
              </tr>
              <tr>
                <td>Цвет</td>
                <td>{color}</td>
              </tr>
              <tr>
                <td>Материалы</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td>Сезон</td>
                <td>{season}</td>
              </tr>
              <tr>
                <td>Повод</td>
                <td>{reason}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <p>
              Размеры в наличии:{" "}
              {sizes &&
                sizes.map((el) => {
                  if (el.available) {
                    return (
                      <span
                        key={nanoid()}
                        className="catalog-item-size"
                        onClick={(e) => {
                          console.log(e.target);
                          e.target.className = e.target.className.includes(
                            "selected"
                          )
                            ? "catalog-item-size"
                            : "catalog-item-size selected";
                        }}
                      >
                        {el.size}
                      </span>
                    );
                  }
                  return null;
                })}
              {/* <span className="catalog-item-size selected">18 US</span>{" "}
              <span className="catalog-item-size">20 US</span> */}
            </p>
            <p>
              Количество:{" "}
              <span className="btn-group btn-group-sm pl-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    if (count <= 0) {
                      return;
                    } else {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="btn btn-outline-primary">{count}</span>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    if (count >= 10) {
                      return;
                    }
                    setCount(count + 1);
                  }}
                >
                  +
                </button>
              </span>
            </p>
          </div>
          <button
            disabled={count === 0}
            className="btn btn-danger btn-block btn-lg"
          >
            В корзину
          </button>
        </div>
      </div>
    </section>
  );
}

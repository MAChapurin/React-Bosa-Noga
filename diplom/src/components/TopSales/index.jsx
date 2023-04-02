import { useState, useEffect } from "react";
import { Card } from "../Card";
import { Preloader } from "../Preloader";

export function TopSales() {
  const [topSales, setTopSales] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:7070/api/top-sales")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTopSales(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section className={`top-sales`}>
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="row">
        {!loading ? (
          topSales.map((el) => {
            const { title, price, images } = el;
            return <Card key={el.id} {...el} />;
          })
        ) : (
          <Preloader />
        )}
      </div>
    </section>
  );
}

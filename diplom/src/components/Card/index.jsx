import { Link } from "react-router-dom";

export function Card({title, price, images}) {
    return (
        <div className="col-4">
        <div className="card">
          <img src={images[0]}
            className="card-img-top img-fluid img" alt="Босоножки 'MYER'"/>
          <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{price} руб.</p>
            <Link to="/" className="btn btn-outline-primary">Заказать</Link>
          </div>
        </div>
      </div>
    )
}

// {
//     "id": 66,
//     "category": 13,
//     "title": "Босоножки 'Myer' с завязкой на щиколотке",
//     "price": 34000,
//     "images": [
//         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer.jpg",
//         "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/sandals_myer_2.jpg"
//     ]
// }
import { Route, Router, Routes } from "react-router-dom";
import { About } from "../About";
import { CardPage } from "../CardPage";
import { Catalog } from "../Catalog";
import { Contacts } from "../Contacts";
import { Page404 } from "../Page404";
import { Preloader } from "../Preloader";
import { TopSales } from "../TopSales";

export function Main() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img
              src="./img/banner.jpg"
              className="img-fluid"
              alt="К весне готовы!"
            />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TopSales />
                  <Catalog />
                </>
              }
            />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/catalog/:id" element={<CardPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}

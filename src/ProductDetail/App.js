import React from "react";
import serviceApi from "../api/service";
import Loader from "../components/Loader";

export const App = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [thumb, setThumb] = React.useState("");

  const getProductDetail = async (id) => {
    const { response } = await serviceApi.getDetail(id);
    setThumb(response?.thumbnail);
    setProduct(response);
    setLoading(false);
  };

  React.useEffect(() => {
    setLoading(true);
    getProductDetail(1);
  }, []);

  const addToCart = async () => {};

  if (loading) return <Loader />;

  if (!product) return null;

  return (
    <div>
      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src={thumb} alt="shoe image" />
              </div>
            </div>

            <div className="img-select">
              {product?.images?.slice(0, 4)?.map((img, index) => (
                <div
                  className="img-item"
                  key={index}
                  onClick={() => setThumb(img)}
                >
                  <img src={img} alt="shoe image" />
                </div>
              ))}
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">{product?.title}</h2>
            <div className="product-rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <span>{product?.rating}</span>
            </div>
            <div className="product-price">
              <p className="new-price">
                Price: <span>{product?.price}$</span>
              </p>
            </div>
            <div className="product-detail">
              <h2>about this item: </h2>
              <p>{product?.description}</p>
              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>Shoes</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <input
                type="number"
                min={0}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={addToCart} type="button" className="btn">
                Add to Cart <i className="fas fa-shopping-cart" />
              </button>
            </div>

            <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default App;

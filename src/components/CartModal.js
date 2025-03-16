const CartModal = ({ cart, removeFromCart, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
          <div className="modal-content">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default CartModal;
  
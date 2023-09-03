import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'

const EmptyCartPage = () => {
  return (
<>
<Navbar/>
    <div style={styles.container}>
      <div style={styles.centerContent}>
        {/* <img
          src=""
          alt="Empty Cart"
          style={styles.emptyCartImg}
        /> */}
        <p>Looks like your cart is empty. Start shopping now!</p>
        <NavLink to="/"><button style={styles.backToShoppingBtn}>Back to Shopping</button></NavLink>
      </div>
    </div>
    <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundPosition: 'center' ,
    alignItems: 'center',
    height: '80vh',
    backgroundImage: 'url("https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=600")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    
  },
  centerContent: {
    textAlign: 'center',
  },
  emptyCartImg: {
    maxWidth: '600px',
    marginBottom: '20px',
  },
  backToShoppingBtn: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};

export default EmptyCartPage;

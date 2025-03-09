const Footer = () => {
  return (

    <div className="footer">

      <div className="about-content">
        <div className="column">
          <h2>About</h2>
          <p><strong>Owner:</strong> Eklio Systems</p>
          <p><strong>Headquarters Address:</strong>
            <a href="https://www.google.com/maps/search/?api=1&query=45+Rue+de+Villeneuve+94573+Rungis" target="_blank" rel="noopener noreferrer"> 
               45 Rue de Villeneuve 94573 Rungis
            </a>
          </p>
          <p><strong>SIREN:</strong> 888098001</p>
          <p><strong>VAT:</strong> FR59888098001</p>
        </div>
        <div className="column">
          <h2>Social Networks</h2>
          <p><strong>Email:</strong>
            <a href="mailto:contact@ekliosystems.com">  contact@ekliosystems.com</a>
          </p>
          <p><strong>Phone:</strong>
            <a href="tel:+33173793560">  (+33) 1 73 79 35 60</a>
          </p>
        </div>

      </div>


      <h3> - Copyright Eklio 2025 -</h3>
      <h5> Claire Garcia | Thibault Jeannesson | Judith Rapp</h5>
    </div>
  );
};

export default Footer;

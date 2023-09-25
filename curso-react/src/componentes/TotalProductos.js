import React, { useState, useEffect } from 'react';

function TotalProductos(){

    const [productsCount, setProductCount] = useState(); 

    useEffect(() => {
        const fetchData = async () => {
          try {
    
            const productsCountResponse = await fetch('http://localhost:3001/api/products');
            const productsCountNumber = await productsCountResponse.json();
    
            if (productsCountNumber) {
                setProductCount(productsCountNumber.count);
            };
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData()
      }, []
    )

    return (
        <div>
            <p>Cantidad de productos registrados: {productsCount}</p>
        </div>
    )
}

export default TotalProductos;
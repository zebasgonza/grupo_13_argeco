import React, { useState, useEffect } from 'react';

function TotalUsuarios(){

    const [usersCount, setUsersCount] = useState(); 

    useEffect(() => {
        const fetchData = async () => {
          try {
    
            const usersCountResponse = await fetch('http://localhost:3000/api/users/');
            const usersCountNumber = await usersCountResponse.json();
    
            if (usersCountNumber) {
                setUsersCount(usersCountNumber.count);
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
            <p>Cantidad de Usuarios registrados: {usersCount}</p>
        </div>
    )
}

export default TotalUsuarios;

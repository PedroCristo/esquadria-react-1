import React, { useEffect, useState } from 'react';

function companySchedule() {
  const [schedule, setSchedule] = useState({
    isOpen: false,
    message: '',
    color: ''
  });

  useEffect(() => {
    const dt = new Date();
    const th = dt.getHours();
    const td = dt.getDay();
    const tm = dt.getMonth();
    const tda = dt.getDate();
    const fy = dt.getFullYear();

    // Display the year in the footer
    setSchedule(prevState => ({
      ...prevState,
      year: fy
    }));

    // Check the time and set the schedule message
    if (th >= 8.30 && th < 18.30) {
      setSchedule(prevState => ({
        ...prevState,
        isOpen: true,
        message: 'Estamos Abertos',
        color: '#15EB07'
      }));
    } else {
      setSchedule(prevState => ({
        ...prevState,
        isOpen: false,
        message: 'Estamos Encerrados',
        color: '#CE3333'
      }));
    }

    // Check for the shop's day off (Sunday)
    if (td === 0) {
      setSchedule(prevState => ({
        ...prevState,
        isOpen: false,
        message: 'Estamos encerrados ao domingo',
        color: '#CE3333'
      }));
    }

    // Check for a specific time of the year and display a message
    if ((tm === 11 && tda > 8) || (tm === 0 && tda < 6)) {
      setSchedule(prevState => ({
        ...prevState,
        christmasMessage: 'Desejamos a todos os nossos clientes um Feliz Natal e um próspero Ano Novo!'
      }));
    }

    // Check the date for an exceptional day off
    if (tm === 11 && tda === 25) {
      setSchedule(prevState => ({
        ...prevState,
        isOpen: false,
        christmasMessage: 'Estamos Encerrados!'
      }));
    }
  }, []);

  return schedule;
}

export default companySchedule;

import React, { useEffect, useState } from 'react';

export default function companySchedule() {
  const [schedule, setSchedule] = useState({
    isOpen: false,
    message: '',
    color: ''
  });

  useEffect(() => {
    const dt = new Date();
    const th = dt.getHours();
    const td = dt.getDay();

    // Check the time and set the schedule message
    let message = '';
    let color = '';
    if (th >= 8.30 && th < 18.30) {
      message = 'Estamos Abertos';
      color = '#15EB07';
    } else {
      message = 'Estamos Encerrados';
      color = '#CE3333';
    }

    // Check for the shop's day off (Sunday)
    if (td === 0) {
      message = 'Estamos encerrados ao domingo';
      color = '#CE3333';
    }

    setSchedule(prevState => ({
      ...prevState,
      isOpen: th >= 8.30 && th < 18.30 && td !== 0,
      message,
      color
    }));

  }, []);

  return schedule;
}

export function useChristmasMessage() {
  const [message, setMessage] = useState('');
  const [christmasStyle, setChristmasStyle] = useState('none');
  const [opacityStyle, setOpacityStyle] = useState("0");
  const [positionStyle, setPositionStyle] = useState("absolute");

  useEffect(() => {
    const dt = new Date();
    const tm = dt.getMonth();
    const tda = dt.getDate();

    // Check for a specific time of the year and display a message
    let christmasMessage = '';
    let displayStyle = 'none'; 
    let opacityStyle = "0";
    let positionStyle = "absolute";
    if ((tm === 3 && tda >= 10) || (tm === 0 && tda <= 7)) {
      christmasMessage = 'Desejamos a todos os nossos clientes um Feliz Natal e um próspero Ano Novo de ';
      displayStyle = 'block';
      opacityStyle = "1";
      positionStyle = "relative"
    } 
    
    setMessage(christmasMessage);
    setChristmasStyle(displayStyle);
    setOpacityStyle(opacityStyle);
    setPositionStyle(positionStyle)

  }, []);

  return { message, christmasStyle, opacityStyle, positionStyle }; // Return message and display style
}

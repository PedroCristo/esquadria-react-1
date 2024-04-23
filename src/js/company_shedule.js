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
  const [widthStyle, setWidthStyle] = useState("50%");

  useEffect(() => {
    const dt = new Date();
    const tm = dt.getMonth();
    const tda = dt.getDate();
    const currentYear = new Date().getFullYear(); // Get the current year

    // Check for a specific time of the year and display a message
    let christmasMessage = '';
    let displayStyle = 'none';
    let opacityStyle = "0";
    let positionStyle = "absolute";
    let widthStyle = "0%";
    if ((tm === 11 && tda >= 10) || (tm === 0 && tda <= 7)) {
      christmasMessage = `Desejamos a todos os nossos clientes e colaboradores um Feliz Natal e um próspero Ano Novo de ${currentYear + 1}`;
      // christmasMessage = `Desejamos a todos os nossos clientes e colaboradores um Natal repleto de alegria e um Ano Novo de ${currentYear + 1} repleto de sucesso e prosperidade!`;
      displayStyle = 'block';
      opacityStyle = "0.8";
      positionStyle = "relative";
      widthStyle = "100%";
    }

    setMessage(christmasMessage);
    setChristmasStyle(displayStyle);
    setOpacityStyle(opacityStyle);
    setPositionStyle(positionStyle);
    setWidthStyle(widthStyle)

  }, []);

  return {
    message,
    christmasStyle,
    opacityStyle,
    positionStyle,
    widthStyle
  }; 
}

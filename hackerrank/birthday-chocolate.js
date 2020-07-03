  function birthday(s, d, m) {
      const lenght = s.length;  
    if ((lenght % 2) === 0) {
        console.log('s', s, 'd', d, 'm', m);
        console.log('its odd');
      } else {
          console.log('its not odd');
          
      }

}

birthday([ 1, 2, 1, 3, 2 ], 3, 2);
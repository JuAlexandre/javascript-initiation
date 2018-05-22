let choice = prompt('Hey mon ami ! Tu aimes ça les patates ?');

if (choice.toLowerCase() == 'oui') {
    
  for (let i = 1; i < 8; i++) {
    console.log('#'.repeat(i));
  }
  
  
} else if (choice.toLowerCase() == 'non') {
  
  alert('C\'est dommage c\'est bon les patates !');
  
} else {
  
  alert('Je vous sens comme tiraillé ...');
  
}
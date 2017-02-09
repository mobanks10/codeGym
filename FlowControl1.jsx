var moonPhase = 'full';
var foggyNight = false;

if (moonPhase === 'full' && foggyNight) {
  console.log('Howwlll!');
} else if (moonPhase === 'I swear I am not a werewolf...') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') { 
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

switch (moonPhase) {
 case 'full':
    console.log('Howwwwlll!!');
    break;
 case 'mostly full':
    console.log('Arms and legs are getting harrier');
    break;
 case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}

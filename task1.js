function golfResult(par, stroke) {
    let nickname;
    if (stroke = 1) {
        nickname = 'Hole-in-one!';
      } else if (strokes = par - 2) {
        nickname = 'Eagle';
      } else if (stroke = par - 1) {
        nickname = 'Birdie';
      } else if (stroke = par) {
        nickname = 'Par';
      } else if (stroke = par + 1) {
        nickname = 'Bogey';
      } else if (stroke = par + 2) {
        nickname = 'Double Bogey';
      } else if (strokes = par +3) {
        nickname = 'Go Home!';
      } else nickname = 'Are you plaing golf?'

      return nickname;
  
  }
  
  console.log(golfResult);

alert(`Welcome to game! You play against a computer to see who can get closer to 20!`);

var cl = 0;

var ul = 0;

var ufs = 0;

var cfs = 0;

do {
  
  var c = 0;

  var u = 0;

  alert(`Computers turn`);
  
  do {
    
    var rN = Math.floor(Math.random() * 10) + 1;
    
    c = c + rN;
    
    alert(`computer rolled ${rN}. Total score: ${c}`);
  
    if (c < 16) {
      cl = 1;
      
    } else if (c > 15) {
      cl = 2;
      
    }
    
  } while (cl != 2);
  
  if (c > 20) {
    alert(`Computer went over 20, game is over.`); 
  }
  
  
  
  
  if (c < 21) {
  
    var turn = 0;
    
    do {
    
      if (turn == 0) {
        alert(`Player turn`);
        turn = turn + 1;
        
      }
      
      var rN = Math.floor(Math.random() * 10) + 1;
      
      u = u + rN;
      
      alert(`You rolled ${rN}. Total score: ${u}`);
    
    
      if (u > 20) {
        alert(`You went over 20, game over`);
      } else {
        var uI = prompt(`Would you like to roll again? type 'n' to stop`);
        
      }
      
    } while ((uI != `n`) && (u < 20));
    
  } else {
    
  }

   alert(`Final scores for this round: You: ${u} Computer: ${c}`);
  
  if (c > 20) {
    alert(`You won this round!`);
    ufs = ufs + 1;
      
  } 

  if (c == 20) {
    if (u == 20) {
      alert(`Draw!?!?`);
      ufs = ufs + 1;
      cfs = cfs + 1;
      
    } else {
      alert(`You won this round!`);
      ufs = ufs + 1;
    }
  } else if (u == 20) {
    if (c == 20) {
       alert(`Draw!?!?`);
      ufs = ufs + 1;
      cfs = cfs + 1;
    }
  }
    
  if (u > 20) {
    alert(`Computer won this round!`);
    cfs = cfs + 1;
      
  } else if (u < 20) {
      
    if (u > c) {
      alert(`You won this round!`);
      ufs = ufs + 1;
        
    } else if (c == u) {
      alert(`Draw!?!?`);
      ufs = ufs + 1;
      cfs = cfs + 1;
    }
  }


 alert(`Current scores: You: ${ufs} Computer: ${cfs}`);
  
  var pa = prompt(`Would you like to play again? type 'n' to stop playing `);

} while (pa != `n`);

alert(`Final scores: You: ${ufs} Computer: ${cfs}`);

// hello


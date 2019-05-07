const QUESTIONS = [
    //1
    {
      question: 'Which professional baseball team ended the (at the time) longest World Series Championship drought in 2016?',
      answers: [
        'Cleveland Indians',
        'Chicago White Sox',
        'Chicago Cubs',
        'Toronto Blue Jays'
      ],
      correctAnswer: 'Chicago Cubs',
      ifCorrectAnswerImg: 'https://timedotcom.files.wordpress.com/2016/11/world-series-chicago-cubs-cleveland-indians-game-7-2.jpg',
      alt: 'Cubs players celebrating after final out',
      ifCorrectAnswerInfo: 'The Chicago Cubs ended a 107 year World Series Championship Drought when they defeated the Cleveland Indians 4-3 in a best of 7 in 2016.'
    },
  
    //2
    {
      question: 'What NBA team was the first and only team to come back from a 3-1 deficit in the Finals?',
      answers: [
        'Cleveland Cavaliers',
        'Golden State Warriors',
        'Boston Celtics',
        'Los Angeles Lakers'
      ],
      correctAnswer:'Cleveland Cavaliers',
      ifCorrectAnswerImg:'https://cdn.vidible.tv/prod/2016-06/20/5767608fe4b024a0e8660e12_1280x720_F_v1.jpg',
      alt:'Lebron and teammates lifting the trophy after game 7',
      ifCorrectAnswerInfo:'In the 2016 NBA Finals, the Cleveland Cavaliers were down 3-1 in a best of 7 against the Golden State Warriors. They won the last 3 games to bring Cleveland its first Professional Sports Championship in 52 years.'
    },
  
    //3
    {
      question: 'Who has the most Super Bowl Rings in NFL history?',
      answers: [
        'Joe Montana',
        'Charles Haley',
        'Tom Brady',
        'Peyton Manning'
      ],
      correctAnswer:'Tom Brady',
      ifCorrectAnswerImg:'https://media.comicbook.com/2019/02/tom-brady-thanos-super-bowl-53-1156821-1280x0.jpeg',
      alt:'Tom Brady as Thanos with rings as infinity stones',
      ifCorrectAnswerInfo: 'After leading the New England Patriots to a win in Super Bowl 53, Tom Brady now has the record for the most rings by a player with 6.'
    },
  
    //4
    {
      question: 'In 2014 the NCAA Football championship switched to a playoff bracket format. Which team won the inaugural tournament?',
      answers: [
        'Ohio State',
        'Alabama',
        'LSU',
        'Clemson'
      ],
      correctAnswer:'Ohio State',
      ifCorrectAnswerImg:'https://bigtennetworks.files.wordpress.com/2015/01/usatsi_8328216.jpg?w=970&h=546&crop=1',
      alt:'OSU players celebrating on stage after win',
      ifCorrectAnswerInfo: 'Ohio State won the inaugural College Football Playoff Tournament with a win against Oregon, 42-20.'
    },
  
    //5
    {
      question: 'Which NCAA Men’s Basketball team was the first to lose as a 1-seed?',
      answers: [
        'Duke',
        'North Carolina',
        'Michigan State',
        'Virginia'
      ],
      correctAnswer:'Virginia',
      ifCorrectAnswerImg:'https://i.kinja-img.com/gawker-media/image/upload/s--Y_kUJrZi--/c_scale,f_auto,fl_progressive,q_80,w_800/wsmn3vj5bskbo2k5tuov.jpg',
      alt:'Sad Virginia players on the bench',
      ifCorrectAnswerInfo: 'In March of 2018, #16 UMBC defeats #1 Virginia 74-54 marking the first time in NCAA Men’s Basketball history that a #1 seed has lost to a #16 seed.'
    },
  
    //6
    {
      question: 'What city has hosted the most Summer Olympic Games?',
      answers: [
        'Los Angeles',
        'Tokyo',
        'London',
        'Athens'
      ],
      correctAnswer:'London',
      ifCorrectAnswerImg:'http://www.londonolympics2012.com/wp-content/uploads/london-2012.jpg',
      alt:'Aerial view of London Olympic Stadium',
      ifCorrectAnswerInfo: 'London has hosted the most Summer Olympic games with 3 in 1908, 1948, and 2012.'
    },
  
    //7
    {
      question: 'Which country do most NHL players come from?',
      answers: [
        'United States',
        'Russia',
        'Sweden',
        'Canada'
      ],
      correctAnswer:'Canada',
      ifCorrectAnswerImg:'https://www.macleans.ca/wp-content/uploads/2017/12/DEC05_OLYMPICS_POST01.jpg',
      alt:'Sidney Crosby in Team Canada Uniform',
      ifCorrectAnswerInfo: 'Canada. Roughly half of NHL players are Canadian.'
    },
  
    //8
    {
      question: 'Which country has the most Olympic Gold Medals?',
      answers: [
        'China',
        'Germany',
        'Great Britain',
        'United States'
      ],
      correctAnswer:'United States',
      ifCorrectAnswerImg:'https://cdn.citylab.com/media/img/citylab/2016/08/RTX2KNQH/facebook.jpg?1494531041',
      alt:'Women from Team USA holding gold medals',
      ifCorrectAnswerInfo: 'The United States has a total of 1,127 Olympic Gold Medals. Followed by the Soviet Union as a close second with 473.'
    },
  
    //9
    {
      question: 'As of 2019, what NFL team has gone the longest without a playoff win?',
      answers: [
        'Cincinnati Bengals',
        'Cleveland Browns',
        'Detroit Lions',
        'Buffalo Bills'
      ],
      correctAnswer:'Cincinnati Bengals',
      ifCorrectAnswerImg:'https://www.gannett-cdn.com/-mm-/3a5bce2959fa77b07d2ff93a7cac3d29ff9d6b11/c=0-142-1704-2414/local/-/media/USATODAY/usatsports/2014/12/30/964a74ea1ed89533690f6a7067001974.jpg?width=534&height=712&fit=crop',
      alt:'Bengals player with hands over his face',
      ifCorrectAnswerInfo: 'While the Cleveland Browns have the longest playoff appearance drought, the Cincinnati Bengals have gone the longest without a win. Winning their last playoff game in 1990.'
    },
  
    //10
    {
      question: 'UConn has the most NCAA Women’s Basketball Championships. Which team is #2?',
      answers: [
        'Baylor',
        'Tennessee',
        'Notre Dame',
        'USC'
      ],
      correctAnswer:'Tennessee',
      ifCorrectAnswerImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tennessee_Lady_Volunteers_logo.svg/1200px-Tennessee_Lady_Volunteers_logo.svg.png',
      alt:'Tennessee Lady Volunteers logo',
      ifCorrectAnswerInfo: 'Tennessee has the second most NCAA Women’s Basketball Championship Titles with 8. Their most recent was 2008.'
    },
  ];
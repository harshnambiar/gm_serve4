exports.calculateScore = async (req, res) => {
    try {
      const { data } = req.body;
      if (!data) {
        throw 'data is required';
      }
    const maxScoreFromVotes = 80; 
    const maxScoreFromAge = 20;
    const ageInHours = data.launchAge;
    const votes = data.votes;

    var scoreFromVotes = Math.log1p(votes) / Math.log1p(1000) * maxScoreFromVotes; 
    scoreFromVotes = Math.min(scoreFromVotes, maxScoreFromVotes);

    let scoreFromAge = maxScoreFromAge; 
    if (ageInHours > 24) {
        let daysSincePost = (ageInHours - 24) / 24;
        scoreFromAge -= daysSincePost * 5; 
        scoreFromAge = Math.max(0, scoreFromAge); 
    }

    let totalScore = scoreFromVotes + scoreFromAge;
    let reliabilityScore = (totalScore / (maxScoreFromVotes + maxScoreFromAge)) * 100; 
    if (!data.proofFlag){
        reliabilityScore = (reliabilityScore * 95)/100;

    }
    if (data.followers/3000 >= 1){

    }
    else if (data.followers/3000 > 0.5 && data.followers/3000 < 1){
        reliabilityScore = (reliabilityScore * 95)/100;
    }
    else if (data.followers/3000 < 0.5 && data.followers/3000 > 0.1){
        reliabilityScore = (reliabilityScore * 85)/100;
    }
    else {
        reliabilityScore = (reliabilityScore * 75)/100;
    }
    const now = Date.now();
    if ( now - data.accTimestamp <= 432000000){
        reliabilityScore = (reliabilityScore * 75)/100;
    }


    return res.json({ reliabilityScore: reliabilityScore });

      
   
      
      
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        errors: err,
      });
    }
  };

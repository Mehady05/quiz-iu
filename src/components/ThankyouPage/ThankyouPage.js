import "./ThankyouPage.css";

const ThankyouPage = ({score, levels}) => {
  if(levels){
    let total = 49;
    if(score === total){
      console.log('C2 advanced')
    }
    else if(score < total && score > 40){
      console.log('C1 English level advanced')
    }
    else if(score < 40 && score > 32){
      console.log('B2 English level upper intermediate')
    }
    else if(score < 32 && score > 24){
      console.log('B1 English level intermediate')
    }
    else if(score < 24 && score > 18){
      console.log('A2 English level pre-intermediate')
    }
    else if(score < 18 && score > 10){
      console.log('A1 English level elementary')
    }
    else if(score < 6 ){
      console.log('beginner')
    }
    else{
      console.log('very bad condition');
    }
  }
  
  return (
      <div class="row">
        <div class="col-md-6 col-sm-12 mx-auto">
          <div class="thankyou-page-inner">
            <div class="wrapper">
              <div class="tick">
                <div class="done-tick"></div>
                <i class="fa-solid fa-check"></i>
              </div>
              <h2>Thank you For participating in this Examination</h2>
              <h3 className="score">Your Score is {score}</h3>
              <p>Please check your english level.......</p>
              {/* <div class="next-prev-btn">
                <button class="next back">Back Home</button>
              </div> */}
            </div>
             <div className="identity">
              <p>Md.Mehedi Hasan</p>
              <p>Junior Front End Developer</p>
              <p>MERN Stack</p>
              <p>Islamic University Kushtia</p>
             </div>
          </div>
        </div>
      </div>
  );
};

export default ThankyouPage;

import React from 'react';

function FetchImage() {

  

        let  file1 = "https://img.freepik.com/free-photo/green-park-view_1417-1492.jpg";

        let file2  = "Image4.jpg";

        let  imageArray = ["Image1.jpg", "Image2.jpg", "Image3.jpg", "Image4.jpg"];
        
        let resArray = imageArray.map(item => <img src={"./"+item} width="100"></img>);
       


  return (
      <>
        <h3>Working with Images using Arrays in React JS</h3>
        <hr/>

        {resArray}

         



        
       
       
       
      </>     
  );
}

export default FetchImage;

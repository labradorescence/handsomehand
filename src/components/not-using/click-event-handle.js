// import React from 'react';

// import React from "react"

// class Click extends React.Component{ 

//     handleClickNextBound(){
//      console.log("next button clicked!")
//    }
   
//    render(){
//    return (
//        <div>
//            <button onClick = {this.handleClickNextBound}> next </button>
//        </div>
//    )
//    }
// }

// export default Click



//class
//import React from 'react'
// class Click extends React.Component{
    
//     render(){
//     return (
//         <div>
//             <button onClick = { () => console.log("next button clicked!") }> next </button>
//         </div>
//     )
//     }
// }

// export default Click


//function
import React from 'react'

function Click(){

    function clickNext(event){
      console.log(event)
    }
    
    return (
        <div>
            <button onClick = {clickNext}> next </button>
        </div>
    )
}

export default Click
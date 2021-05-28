// import React from 'react'

function Clock(props) {
          return (
                    <>
                    <h2>
                    {props.date.toLocaleString()}          
                    </h2>
                    </>
          )
}

// class Clock extends React.Component {
//           render() {
//                     return (
//                               <>
//                                         <h2>
//                                                   {this.props.date.toLocaleString()}
//                                         </h2>
//                               </>
//                     )

//           }
// }
export default Clock



import React from "react"
import './ClassComponent.css'

export default class ClassComponent extends React.Component {

    render() {
        let number=1;
        let name="Azlan";
        

        if (name==="Azlan"){
            return (
                <h2>{number}.{name}</h2>
            );
        }
        else{
            return(<h3>Name is not Azlan</h3>);
        };

        


        // return(
            

        //     <div className="myclasscomponent">
        //         <h1>First Class Component
        //             {number}
        //         </h1>
        //         <h2>Hey {name}</h2>
        //         {
        //             name==="Azlan"?<h2>{name}</h2>:
        //             <h3>Name is not Azlan</h3>
        //         }
        //     </div>
        // )

    }

    
}
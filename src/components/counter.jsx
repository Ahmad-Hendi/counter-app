import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div>
               
                {/* <h4>#{this.props.id}</h4> */}
                <span className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button 
                    onClick={ () => this.props.onIncrement (this.props.counter) } 
                    className="btn btn-secondary btn-sm"
                    
                > 
                    increment 
                </button>

                <button 
                onClick={ () => this.props.onDelete(this.props.counter.id)}
                className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
              </div>
              );
            }
    
            formatCount () {
                const { value } = this.props.counter;
                return value === 0 ? "zeor" : value;
            }
    
            getBadgeClasses(){
            let classes = "badge m-2 badge-";
            classes += this.props.counter.value === 0 ? "warning" : "primary";
            return classes;
        }
            
    }
        

    
    

      

  
        

   

       
    

  
    
   

        
export default Counter;

           
        
  
 



{ /* additional notes 

    (+=) :
    permet d'ajouter une valeur à une variable. 
    Le type des deux valeurs permet de définir si 
    l'utilisation de cet opérateur les concatènera ou les additionnera.

    -------------------------------------------------------------------------------------------
    -------------------------------------------------------------------------------------------
    if (this.state.tags.length === 0) return 'There are no tags';
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    explination : 
    we are saying if there is no tags then render ther are no tags 
    Else render the lmist of the tags




     // renderTags() {        {/* if the array has at least one element so render this array in list  }
    // if (this.state.tags.length === 0) return 'There are no tags';
    // return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }
    

*/}
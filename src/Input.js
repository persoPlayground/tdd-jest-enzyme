import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

// export const _Input = ({success}) => {
//     return(
//     <div data-test-id="input-component" >
//         {!success &&  
//           <form><input data-test-id="input-box" /><input type="submit" data-test-id="input-submit"/> </form>
//     }
//     </div>
//     )
// }

// export default connect(state => { success })(_Input);

export class _Input extends Component {

    render(){
        return(
            <div data-test-id="input-component" >
                {!this.props.success &&  
                  <form><input data-test-id="input-box" /><input type="submit" data-test-id="input-submit"/> </form>
            }
            </div>
            )
    }
}
 

export default connect(state => { success }, { guessWord })(_Input);
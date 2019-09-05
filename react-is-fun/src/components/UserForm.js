import React from 'react';
import './UserForm.css'

var style={
    marginLeft: 300
}
class UserForm extends React.Component{
    render(){
        return(
            <div class="myDiv">
                <form onSubmit={this.props.getWeatherDataByCity}>
                    <table width="750" bgcolor="#FEFEFE" height="100" style={style}>   
                        <tr>
                            <td>
                                <input type="text" name="city" placeholder="City" required/> &nbsp;
                                <input type="text" name="country" placeholder="Country" required/> &nbsp;
                                <button class="btn" type="submit">
                               <span class="glyphicon glyphicon-search"></span></button>
                            </td>
                        </tr>       
                    </table>
                </form>
            </div>
        )
    }
}

export default UserForm;
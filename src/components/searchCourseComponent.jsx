import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SchedulePage from './schedulePage';

class SearchCourseComponent extends Component {

    state = {
        classInfo :  this.props.class, 
    }
    render() { 
        const course= this.props.class;
        return (
            <React.Fragment>
                <li style={{backgroundColor:this.props.bgcolor, width:"60%"}}>
                    <table style={{border : "1px solid black", width:"100%"}}>
                        <tbody>
                        <tr style={{height:100, width:"60%"}}>
                            <td style={{padding: 10 , width:"2%", verticalAlign:"top", textAlign:"left"}}><b>{this.props.id+1}</b></td>
                            <td style={{padding: 10 , width:"8%", verticalAlign:"top", textAlign:"left"}}><b style={{color: "blue"}}>{course.Subj + course.CRS}</b></td>
                            <td style={{padding: 10 , width:"40%"}}>
                                <span style={{color: "blue"}}><b>{course.Title+ ' - '+ course.Cmp +' - Section ' +course.Sctn}</b></span>
                                <p><span>by <b>{course.Instr}</b></span><span style={{marginLeft: 40}}>Credit: NA</span> </p>
                                <span><b>Days:</b> {course.Days}</span><span style={{marginLeft: 40}}> <b>Time:</b> {course.Start_Time} <b>-</b> {course.End_Time}</span>
                                <p><b>Instruction Mode:</b> {course.Instruction_Mode}</p>
                                <span><b>Enrollment Cap:</b> {course.Enrl_Cap}</span><span style={{marginLeft: 40}}> <b>Wait Cap:</b> {course.Wait_Cap}</span>
                            </td>
                            <td style={{padding: 10, width:"8%" }}><button onClick={()=>this.addClass(this.state.classInfo)} className='btn btn-primary btn-sm' style={{marginLeft: 30 }}>Add Class</button></td>
                        </tr>
                        </tbody>
                    </table>
                </li>
            </React.Fragment>
            );
    }

    addClass =  (classInfo)=>{
        fetch(`/addClass/`+classInfo.Subj+`/`+classInfo.CRS+`/`+classInfo.Title+`/`+classInfo.Cmp+`/`+classInfo.Sctn+`/`+classInfo.Days+`/`
                +classInfo.Start_Time+`/`+classInfo.End_Time+`/`+classInfo.Mtg_Start_Date+`/`+classInfo.Mtg_End_Date+`/`+classInfo.Duration+`/`
                +classInfo.Instruction_Mode+`/`+classInfo.Building+`/`+classInfo.Room +`/`+classInfo.Instr+`/`+classInfo.Enrl_Cap+`/`+classInfo.Wait_Cap+`/`
                +`x/x`)

        ReactDOM.render(
            <React.StrictMode>
                <SchedulePage/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
}
 
export default SearchCourseComponent;
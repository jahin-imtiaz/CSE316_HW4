import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../schedulePage.css'
import ScheduleCourseComponent from './scheduleCourseComponent';
import SearchResultsComponents from './searchResultsComponents';
class SchedulePage extends Component {
    
    componentWillMount(){
        var days = []
        fetch("/schedule/Su")
            .then(res => res.json())
            .then(
                (result) => {
                    days.push(result);
                },
                (error) => {
                    
                }
            )
        fetch("/schedule/M")
            .then(res => res.json())
            .then(
                (result) => {
                    days.push(result);
                },
                (error) => {
                    
                }
            )
        fetch("/schedule/T")
            .then(res => res.json())
            .then(
                (result) => {
                    days.push(result);
                },
                (error) => {
                    
                }
            )
        fetch("/schedule/W")
            .then(res => res.json())
            .then(
                (result) => {
                    days.push(result);
                },
                (error) => {
                    
                }
            )
        fetch("/schedule/TH")
            .then(res => res.json())
            .then(
                (result) => {
                    days.push(result);
                },
                (error) => {
                    
                }
            )
        fetch("/schedule/F")
            .then(res => res.json())
            .then(
                (result) => {
                    days.push(result);
                },
                (error) => {
                    
                }
            )
        fetch("/schedule/Sa")
            .then(res => res.json())
            .then(
                (result) => {
                    days.push(result);
                    this.setState({
                        sundayCourses: days[0],
                        mondayCourses: days[1],
                        tuesdayCourses: days[2],
                        wednesdayCourses: days[3],
                        thursdayCourses: days[4],
                        fridayCourses: days[5],
                        saturdayCourses: days[6],
                    });
                },
                (error) => {
                    
                }
            )
    }

    state = { 
        sundayCourses: '',
        mondayCourses: '',
        tuesdayCourses: '',
        wednesdayCourses: '',
        thursdayCourses: '',
        fridayCourses: '',
        saturdayCourses: '',
     }
    render() { 
        return ( 
            <React.Fragment>
                <table className="scheduleTable">
                    <thead>
                    <tr>
                        <th className="scheduleTable">SUN</th>
                        <th className="scheduleTable">MON</th>
                        <th className="scheduleTable">TUE</th>
                        <th className="scheduleTable">WED</th>
                        <th className="scheduleTable">THU</th>
                        <th className="scheduleTable">FRI</th>
                        <th className="scheduleTable">SAT</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="scheduleTable">
                            {this.state.sundayCourses ? Object.entries(this.state.sundayCourses).map((keyPair, i) => <ScheduleCourseComponent key={i} id={i} course={keyPair[1]}/>) : '' }
                        </td>
                        <td className="scheduleTable">
                            {this.state.mondayCourses ? Object.entries(this.state.mondayCourses).map((keyPair, i) => <ScheduleCourseComponent key={i} id={i} course={keyPair[1]}/>) : ''}
                        </td>
                        <td className="scheduleTable">
                            {this.state.tuesdayCourses ? Object.entries(this.state.tuesdayCourses).map((keyPair, i) => <ScheduleCourseComponent key={i} id={i} course={keyPair[1]}/>) : '' }
                        </td>
                        <td className="scheduleTable">
                            {this.state.wednesdayCourses ? Object.entries(this.state.wednesdayCourses).map((keyPair, i) => <ScheduleCourseComponent key={i} id={i} course={keyPair[1]}/>) : '' }
                        </td>
                        <td className="scheduleTable">
                            {this.state.thursdayCourses ? Object.entries(this.state.thursdayCourses).map((keyPair, i) => <ScheduleCourseComponent key={i} id={i} course={keyPair[1]}/>) : ''}
                        </td>
                        <td className="scheduleTable">
                            {this.state.fridayCourses ? Object.entries(this.state.fridayCourses).map((keyPair, i) => <ScheduleCourseComponent key={i} id={i} course={keyPair[1]}/>) : ''}
                        </td>
                        <td className="scheduleTable">
                            {this.state.saturdayCourses ? Object.entries(this.state.saturdayCourses).map((keyPair, i) => <ScheduleCourseComponent key={i} id={i} course={keyPair[1]}/>) : ''}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div style={{textAlign:"center", marginTop:20}}>
                    <button className='btn btn-primary btn-sm' onClick={()=>this.backHomeButton()}>Return To Home</button>
                </div>
            </React.Fragment>
         );
    }

    backHomeButton= ()=>{
        ReactDOM.render(
            <React.StrictMode>
                <SearchResultsComponents/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }

}
 
export default SchedulePage;
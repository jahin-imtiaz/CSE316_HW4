import React, { Component } from 'react';
import '../schedulePage.css'
class ScheduleCourseComponent extends Component {
    state = { 
        course : this.props.course
     }
    render() { 
        var course = this.state.course;
        return ( 
            <React.Fragment>
                <div className="scheduleTable">
                    <b>{course.Start_Time}</b> {course.Subj+" "+course.CRS+"-"+course.Sctn}<br />
                    {course.Title}
                </div>
            </React.Fragment>
         );
    }
}
 
export default ScheduleCourseComponent;
import React, { Component } from 'react';
import SearchCourseComponent from './searchCourseComponent'
import logo from '../sbuLogo.png'

class SearchResultsComponents extends Component {

    componentWillMount(){
        fetch("/search")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        classes: result
                    });
                },
                (error) => {
                    
                }
            )
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        var searchValue = event.target.search.value;
        var filterValue = event.target.filter.value;
        
        fetch("/search/"+searchValue+"/"+filterValue)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        classes: result
                    });
                },
                (error) => {
                    
                }
            )
    }

    state = { 
        classes : '',
     }
    render() {
        return (
            <React.Fragment>
                <img src={logo} alt="SBU Logo" style={{marginLeft:30}}></img>
                <span style={{fontFamily:"monospace", fontSize:30, marginLeft:10}}><b>Stony Brook <b style={{color:"red"}}>University</b></b></span>
                <span style={{fontFamily:"monospace", fontSize:30, marginLeft:100}}><b>SBU Class Find</b></span>
                <hr style={{height:"2px", borderWidth:0, color:"gray", backgroundColor:"gray"}}/>
                <form id="form" onSubmit={this.handleSubmit} style={{marginLeft:40}}>
                    Search <input type="text" name="search" style={{height:30}}/> in
                    <select name="filter" id="filter" form="form" style={{height:30}}>
                        <option value="allFields">All Fields</option>
                        <option value="courseName">Course Name</option>
                        <option value="courseNumber">Course Number</option>
                        <option value="day">Days</option>
                        <option value="time">Time</option>
                        <option value="instructor">Instructor</option>
                    </select>
                    <button style={{marginLeft: 10, height:30, marginBottom:5}} type="submit" className='btn btn-primary btn-sm'>Find</button>
                    <br/>
                </form>
                <h4 style={{marginLeft:40}} >Examples: CSE, 114</h4>
                <ul style={{listStyleType:"none"}}>{ Object.entries(this.state.classes).map((keyPair, i) => <SearchCourseComponent key={keyPair[0]} id={i} class={keyPair[1]} bgcolor={i % 2 === 0 ? 'white' : '#e8e6e6'}/>) }</ul>
            </React.Fragment>
        );
    }

}
 
export default SearchResultsComponents;
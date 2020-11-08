var config = require('./config');
var mysql = require('mysql');

const con = mysql.createConnection(config.mySql);
con.connect(err => {
    if(err) console.log(err);
});

const all = async () => {
    return new Promise((resolve, reject) =>{
        var sql = 'SELECT * FROM courses_table'
        con.query(sql, (err, result) =>{
            if (err) {
                throw err;
            }
            resolve(result);
        });
    });
};

const getWithSearchAndFilter = async (searchParam, filter) => {
    return new Promise((resolve, reject) =>{

        var sql = 'SELECT * FROM courses_table'
        
        if(filter === "allFields"){
            sql = 'SELECT * FROM courses_table WHERE Subj LIKE "%'+searchParam+'%" OR '+
                                                    'CRS LIKE "%'+searchParam+'%" OR '+
                                                    'Title LIKE "%'+searchParam+'%" OR '+
                                                    'Cmp LIKE "%'+searchParam+'%" OR '+
                                                    'Sctn LIKE "%'+searchParam+'%" OR '+
                                                    'Days LIKE "%'+searchParam+'%" OR '+
                                                    'Instruction_Mode LIKE "%'+searchParam+'%" OR '+
                                                    'Building LIKE "%'+searchParam+'%" OR '+
                                                    'Room LIKE "%'+searchParam+'%" OR '+
                                                    'Instr LIKE "%'+searchParam+'%" OR '+
                                                    'Enrl_Cap LIKE "%'+searchParam+'%" OR '+
                                                    'Wait_Cap LIKE "%'+searchParam+'%" OR '+
                                                    'Cmbnd_Descr LIKE "%'+searchParam+'%" OR '+
                                                    'Cmbnd_Enrl_Cap LIKE "%'+searchParam+'%" OR '+
                                                    'Start_Time LIKE "%'+searchParam+'%" OR End_Time LIKE "%'+searchParam+'%" OR '+
                                                    'Mtg_Start_Date LIKE "%'+searchParam+'%" OR Mtg_End_Date LIKE "%'+searchParam+'%";'
        }
        else if(filter === 'courseName'){
            sql = 'SELECT * FROM courses_table WHERE Subj LIKE "%'+searchParam+'%";';
        }
        else if(filter === 'courseNumber'){
            sql = 'SELECT * FROM courses_table WHERE CRS LIKE "%'+searchParam+'%";';
        }
        else if(filter === 'day'){
            sql = 'SELECT * FROM courses_table WHERE Days LIKE "%'+searchParam+'%" ORDER BY Start_Time;';
        }
        else if(filter === 'time'){
            sql = 'SELECT * FROM courses_table WHERE Start_Time LIKE "%'+searchParam+'%" OR End_Time LIKE "%'+searchParam+'%";';
        }
        else if(filter === 'instructor'){
            sql = 'SELECT * FROM courses_table WHERE Instr LIKE "%'+searchParam+'%";';
        }
        
        
        con.query(sql, (err, result) =>{
            if (err) {
                throw err;
            }
            resolve(result);
        });
    });
};

const getSchedule = async (day) => {
    return new Promise((resolve, reject) =>{
        var sql = 'SELECT * FROM student_schedule_table WHERE Days LIKE "%'+day+'%" ORDER BY Start_Time;'
        con.query(sql, (err, result) =>{
            if (err) {
                throw err;
            }
            resolve(result);
        });
    });
};

const addToSchedule = async (Subj, CRS, Title , Cmp, Sctn, Days, Start_Time, End_Time, Mtg_Start_Date, Mtg_End_Date, Duration, Instruction_Mode, Building , Room, Instr, Enrl_Cap, Wait_Cap, Cmbnd_Descr, Cmbnd_Enrl_Cap) => {

    return new Promise((resolve, reject) =>{
        var sql = `SELECT Count(*) AS count FROM student_schedule_table WHERE (Start_Time BETWEEN "`+Start_Time+`" AND "`+End_Time+`") OR (End_Time BETWEEN "`+Start_Time+`" AND "`+End_Time+`");`
        con.query(sql, (err, result) =>{
            if (err) {
                throw err;
            }
            if(parseInt(Object.keys(result)[0]) === 0){
                var sql2 = `insert into student_schedule_table values ('`+Subj+`',`+CRS+`,'`+Title+`','`+Cmp+`','`+Sctn+`','`+Days+`','`+Start_Time+`','`+End_Time+`','`+Mtg_Start_Date+`','`+Mtg_End_Date+`',`+Duration+`,'`+Instruction_Mode+`','`+Building+`','`+Room+`','`+Instr+`',`+Enrl_Cap+`,`+Wait_Cap+`,'`+Cmbnd_Descr+`','`+Cmbnd_Enrl_Cap+`');`
                con.query(sql2, (err2, result2) =>{
                    if (err2) {
                        
                    }
                });
            }
            resolve(result);
        });
    });
};


module.exports.all = all
module.exports.getWithSearchAndFilter = getWithSearchAndFilter 
module.exports.getSchedule = getSchedule
module.exports.addToSchedule = addToSchedule
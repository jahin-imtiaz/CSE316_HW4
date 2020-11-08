const express = require('express');
var dbCalls = require('./databaseCalls');

var router = express.Router();

router.get('/search', async (req, res) =>{
    try{
        let searchResult = await dbCalls.all();
        res.setHeader('Content-Type', 'application/json');
        res.json(searchResult);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/search/:searchParam/:filter', async (req, res)=>{
    try{
        let searchResult = await dbCalls.getWithSearchAndFilter(req.params.searchParam, req.params.filter);
        res.setHeader('Content-Type', 'application/json');
        res.json(searchResult);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/schedule/:day', async (req, res) =>{
    try{
        let searchResult = await dbCalls.getSchedule(req.params.day);
        res.setHeader('Content-Type', 'application/json');
        res.json(searchResult);
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

// router.get('/addClass/:Subj/:CRS/:Title/:Cmp/:Sctn/:Days/:Start_Time/:End_Time/:Mtg_Start_Date/:Mtg_End_Date/:Duration/:Intruction_Mode/:Building /:Room/:Instr/:Enrl_Cap/:Wait_cap/:Cmbnd_Descr/:Cmbnd_Enrl_Cap',async (req, res) =>{
//     console.log("came to post ")
//     var p = req.params;
//     try{
//         await dbCalls.addToSchedule(p.Subj, p.CRS, p.Title , p.Cmp, p.Sctn, p.Days, p.Start_Time, p.End_Time, p.Mtg_Start_Date, p.Mtg_End_Date, p.Duration, p.Intruction_Mode, p.Building ,p.Room, p.Instr, p.Enrl_Cap, p.Wait_cap, p.Cmbnd_Descr, p.Cmbnd_Enrl_Cap);
//         res.setHeader('Content-Type', 'application/json');
//         res.json({});
//     }
//     catch(e){
//         console.log(e);
//         res.sendStatus(500);
//     }
// })
router.get('/addClass/:Subj/:CRS/:Title/:Cmp/:Sctn/:Days/:Start_Time/:End_Time/:Mtg_Start_Date/:Mtg_End_Date/:Duration/:Intruction_Mode/:Building/:Room/:Instr/:Enrl_Cap/:Wait_cap/:Cmbnd_Descr/:Cmbnd_Enrl_Cap',async (req, res) =>{
    var p = req.params;
    try{
        await dbCalls.addToSchedule(p.Subj, p.CRS, p.Title , p.Cmp, p.Sctn, p.Days, p.Start_Time, p.End_Time, p.Mtg_Start_Date, p.Mtg_End_Date, p.Duration, p.Intruction_Mode, p.Building ,p.Room, p.Instr, p.Enrl_Cap, p.Wait_cap, p.Cmbnd_Descr, p.Cmbnd_Enrl_Cap);
        res.setHeader('Content-Type', 'application/json');
        res.json({});
    }
    catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports =  router;
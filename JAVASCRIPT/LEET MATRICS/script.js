document.addEventListener("DOMContentLoaded",function(){

    const searchBtn = document.getElementById("search_btn");
    const usernameInput = document.getElementById("user_input");
    const statsContainer = document.querySelector(".stats_container");
    const easyProgressCircle = document.querySelector(".easy_progress");
    const mediumProgressCircle = document.querySelector(".medium_progress");
    const hardProgressCircle = document.querySelector(".hard_progress");
    const easyLabel = document.getElementById("easy_label");
    const mediumLabel = document.getElementById("medium_label");
    const hardLabel = document.getElementById("hard_progress");
    const cardStatsContainer = document.querySelector(".stats_card");


    // return true or false based on regex
    function validateUsername(username){
        if(username.trim() === ""){
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }

    function updateProgress(solved,total,label,circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }


    function displayUserData(parseddata){
        const totalQues = parseddata.data.allQuestionsCount[0].count;
        const totalEasyQues = parseddata.data.allQuestionsCount[1].count;
        const totalMediumQues = parseddata.data.allQuestionsCount[2].count;
        const totalHardQues = parseddata.data.allQuestionsCount[3].count;


        const solvedTotalQues = parseddata.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parseddata.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parseddata.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parseddata.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

    }


    async function fetchUserDetails(username) {
    //    const url = `https://leetcode-stats-api.herokuapp.com/${username}}` 
       try{
        searchBtn.textContent = "Searching...";
        searchBtn.disabled = true;

        // const response = await fetch(url);
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
        const targetUrl = 'https://leetcode.com/graphql/';
        
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");

        const graphql = JSON.stringify({
            query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
            variables: { "username": `${username}` }
        })
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
        };

        const response = await fetch(proxyUrl+targetUrl, requestOptions);        
        if(!response.ok){
            throw new Error("Unable to fetch the User details");
        }
        const parseddata = await response.json();
        console.log("Logging data: ",parseddata);

        displayUserData(parseddata);
       }
       catch(error){
            statsContainer.innerHTML = `<p>No data Found</p>`;
       }
       finally{
            searchBtn.textContent = "Search";
            searchBtn.disabled = false;
       }
    }



    searchBtn.addEventListener("click", function () {
        const username = usernameInput.value;
        console.log("loggin username: ",username);
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    });

});
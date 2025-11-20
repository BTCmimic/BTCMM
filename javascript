let miner = null;
let tokens = 0;
let rewardTimer = null;
let timeRemaining = 600; // 10 minutes in seconds

function loginMiner() {
    const minerName = document.getElementById("minerName").value;
    if (minerName) {
        miner = minerName;
        document.getElementById("minerDisplayName").innerText = miner;
        document.querySelector(".miner-login").style.display = "none";
        document.querySelector(".dashboard").style.display = "block";
        startRewardCountdown();
    } else {
        alert("Please enter a miner name!");
    }
}

function startRewardCountdown() {
    rewardTimer = setInterval(() => {
        if (timeRemaining <= 0) {
            allocateRewards();
            timeRemaining = 600; // reset timer to 10 minutes
        } else {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            document.getElementById("countdown").innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

function allocateRewards() {
    // Simulate reward allocation
    const rewardAmount = Math.floor(Math.random() * 10) + 1; // Random token between 1-10
    tokens += rewardAmount;
    document.getElementById("minerTokens").innerText = tokens;
    document.getElementById("rewardStatus").innerText = `You've earned ${rewardAmount} tokens!`;
}

function mineTokens() {
    // Simulate mining action (in reality, you'd integrate with a mining process)
    const miningReward = Math.floor(Math.random() * 5) + 1; // Random tokens per mining session
    tokens += miningReward;
    document.getElementById("minerTokens").innerText = tokens;
    document.getElementById("rewardStatus").innerText = `You mined ${miningReward} tokens!`;
}

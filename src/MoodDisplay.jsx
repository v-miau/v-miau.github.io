import { useState } from "react";

const emoticons ={
	neutral: {
		emoji: "🐱",
		flavor: "A cat looking calm and composed.",
		color: "black"
	},
	smirk: {
		emoji: "😼",
		flavor: "A cat wearing a knowing, playful grin.",
		color: "green"
	},
	happy: {
		emoji: "😺",
		flavor: "A cheerful cat smiling with its mouth open.",
		color: "orange"
	},
	sad: {
		emoji: "😿",
		flavor: "A tearful cat showing sadness.",
		color: "royalblue"
	},
	pout: {
		emoji: "😾",
		flavor: "A grumpy cat with a displeased expression.",
		color: "crimson"
	},
	joy: {
		emoji: "😹",
		flavor: "A cat laughing so hard that tears appear.",
		color: "goldenrod"
	},
	love: {
		emoji: "😻",
		flavor: "A smitten cat whose eyes are hearts.",
		color: "deeppink"
	},
	scream: {
		emoji: "🙀",
		flavor: "A startled cat reacting with alarm.",
		color: "purple"
	}
}


const MoodDisplay = () => {
	const [mood, setMood] = useState("neutral");
    const emoticon = emoticons[mood];
	const [changeCount, setChangeCount] = useState(0);

	function changeMood(newMood) {
		if (newMood === mood) return;

		setMood(newMood);
		setChangeCount(count => count + 1);
		
	}

	const createMoodButton = (moodName) => (
		<button key={moodName} onClick={()=>{ changeMood(moodName)}}>
			{moodName}
		</button>
	);

	const setRandomMood = () => {
		const moods = Object.keys(emoticons);
		const randomMood = moods[Math.floor(Math.random() * moods.length)];
		changeMood(randomMood);
	};

	return (
		<div>
			<h1>Today's Mood</h1>
			<h1>{emoticon.emoji}</h1>
			<p>{mood}</p>
			<p id="cool" style={{ color: emoticon.color }}>{emoticon.flavor}</p>
			<div className="mood-buttons">
				{Object.keys(emoticons).map(createMoodButton)}
				<button onClick={()=>{setRandomMood()}}>random</button>
			</div>
			<p className ="click-counter"> Amount of changes: {changeCount}</p>
		</div>
	);
}

export default MoodDisplay;
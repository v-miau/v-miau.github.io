import { useState } from "react";

const unknown = {
    emoji: "❓",
    flavor: "Please pick a mood, or use the 'random' button to pick a random mood.",
    color: "black",
};


const moods ={
	neutral: {
		emoji: "🐱",
		flavor: "A cat looking calm and composed.",
		color: "brown"
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
		color: "purple",
	},
}


const MoodDisplay = () => {
	const [moodName, setMood] = useState("unknown");
    const moodDetails = moods[moodName] ?? unknown;
	const [changeCount, setChangeCount] = useState(0);

	function changeMood(newMood) {
		if (newMood === moodName) return;

		setMood(newMood);
		setChangeCount(count => count + 1);
		
	}

	const createMoodButton = (moodName) => (
		<button key={moodName} onClick={()=>{ changeMood(moodName)}}>
			{moodName}
		</button>
	);

	const setRandomMood = () => {
		const moodOptions = Object.keys(moods);
		const randomMood = moodOptions[Math.floor(Math.random() * moodOptions.length)];
		changeMood(randomMood);
	};

	return (
		<div>
			<h1>Today's Mood</h1>
			<h1>{moodDetails.emoji}</h1>
			<p>{moodName}</p>
			<p id="cool" style={{ color: moodDetails.color }}>{moodDetails.flavor}</p>
			<div className="mood-buttons">
				{Object.keys(moods).map(createMoodButton)}
				<button onClick={setRandomMood}>random</button>
			</div>
			<p className = "click-counter"> Amount of changes: {changeCount}</p>
			{changeCount > 99 && <p> Please quit changing the mood. </p>}
			{changeCount === 67 && <p> 🖕 </p>}
		</div>
	);
}

export default MoodDisplay;
import React, { useEffect, useState } from "react";

const LandingPage = () => {
	const [string, setString] = useState("");
	const [bit, setBit] = useState("");
	const [art, setArt] = useState([]);

	//let artArray = [];

	const stringToBinary = (input) => {
		var characters = input.split("");

		return characters
			.map((char) => {
				const binary = char.charCodeAt(0).toString(2).slice(-5);
				//const pad = Math.max(8 - binary.length, 0);
				// Just to make sure it is 8 bits long.
				// for (const i of binary) {
				// 	setArt((art) => [...art, i]);
				// }
				return binary;
			})
			.join("\n");
	};

	const onChangeHandler = (event) => {
		setString(event.target.value);
		setBit(stringToBinary(event.target.value));
		// setArt((art) => []);
		// for (const i of bit) {
		// 	if (i !== "\n") {
		// 		setArt((art) => [...art, i]);
		// 	} else {
		// 		continue;
		// 	}
		// }
	};

	useEffect(() => {
		setArt((art) => []);
		for (const i of bit) {
			if (i !== "\n") {
				setArt((art) => [...art, i]);
			} else {
				continue;
			}
		}
	}, [bit]);

	// const append = () => {
	// 	for (const i of bit) {
	// 		if (i !== "\n") {
	// 			setArt((art) => [...art, i]);
	// 		} else {
	// 			continue;
	// 		}
	// 	}
	// };

	return (
		<div>
			<h1>Text2Bit2Art</h1>
			<input className="String-input" type="text" onChange={onChangeHandler} value={string}></input>
			<p className="bit">{bit}</p>
			<div className="art">
				{art.map((i, index) => {
					if (i === "0") {
						return (
							<p className="colorZero" key={index}>
								{i}
							</p>
						);
					} else {
						return (
							<p className="colorOne" key={index}>
								{i}
							</p>
						);
					}
				})}
			</div>
			{/* <button onClick={append}></button> */}
		</div>
	);
};

export default LandingPage;

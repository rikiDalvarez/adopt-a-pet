
import React from "react"
import { useState, useEffect } from "react"
import { Pet } from "./Pet.js";
import useBreedList from "./useBreedList";
import Results from "./Results"
	
const animals = ["cat", "dog", "fox", "panther", "bird"];

function SearchParams() {
	const [ location, setLocation] = useState("")
	const [animal, setAnimal] = useState("");
	const [breed, setBreed] = useState("");
	const [pets, setPets] = useState([]);
	const [breeds] = useBreedList(animal)


	useEffect(() => {
		requestPets();
	}, [animal])


	
	async function requestPets() {
		const res = await fetch(
			`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
		);
	
		const json = await res.json();
		setPets(json.pets)
		
	}

	return (
		<>

			{/* form */}
			<div className="search-params">
				<form action="" onSubmit={
					(e) => {
						e.preventDefault();
						requestPets();
					}
				}>
					
					<label htmlFor="location">
						<input type="search" value = {location} id = "location" onChange = {e => setLocation(e.target.value)} placeholder = "Location"
						/>
					</label><br />
					
					<button type="submit"> submit</button><br />

					<label htmlFor="animal">
						Animal <br />
						<select name="" id="animal" value={animal}
							onChange={e => { setAnimal(e.target.value); console.log("setting event", e) }}
							onBlur={e => setAnimal(e.target.value)}>
							<option/>
							{animals.map(animal => (
								<option value={animal} key = {animal}>{animal}</option>
							))}							
						</select>
					</label> <br />

					<label htmlFor="breed">
						breed <br />
						<select name="" id="breed" value={breed}
							onChange={e => setBreed(e.target.value)}
							onBlur={e => setBreed(e.target.value)}>
							<option/>
							{breeds.map(breed => (
								<option value={breed} key ={breed}>{breed}</option>
							))}							
						</select>
					</label>
				
				</form>
				<Results pets={pets} />
			</div>
			
			
		</>
	)
}

export default SearchParams;
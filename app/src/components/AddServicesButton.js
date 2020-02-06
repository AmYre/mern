import React, { useContext } from "react";
import { Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalContext";
import axios from 'axios';

const AddServices = () => {
	const [services, setServices] = useContext(GlobalContext);

	const addService = (data) => axios({
		method: 'post',
		url: 'http://localhost:5000/posts',
		data: data})

	return (
		<Button
			color="dark"
			style={{
				marginBottom: "2rem"
			}}
			onClick={ () => {
				const namePrompt = prompt("Enter what U want");
				if (namePrompt) {

					const update = {id : Math.floor(Math.random() * Math.floor(5000)), title:'pouvoir', desc: namePrompt};

					addService(update);
					setServices([...services, update]);

				}
			}}>
			Ajoutez un Service
		</Button>
	);
};

export default AddServices;
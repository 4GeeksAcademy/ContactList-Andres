import { ids } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [        {
				"name": "name",
				"phone": "phone",
				"email": "email",
				"address": "address",
			},],
			contact: null
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas");
					const data = await response.json();
					setStore({ contacts: data });
				} catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},

			getContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${id})`);
					const data = await response.json();
					setStore({ contact: data });
				} catch (error) {
					console.error("Error fetching contact:", error);
				}
			},

			createContact: async (contact) => {
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/${contact})`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contact)
					});
					getActions().getContacts();
				} catch (error) {
					console.error("Error creating contact:", error);
				}
			},

			deleteContact: async (id) => {
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/${id}`, {
						method: "DELETE"
					});
					getActions().getContacts();
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			}
		}
	};
};

export default getState;


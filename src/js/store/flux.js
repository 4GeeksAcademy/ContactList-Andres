import { ids } from "webpack";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: []
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas");
					const data = await response.json();
					setStore({ contacts: data.agendas });
				} catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},

			getContact: async (slug) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug})`);
					const data = await response.json();
					setStore({ contact: data.slug });
				} catch (error) {
					console.error("Error fetching contact:", error);
				}
			},

			createContact: async (slug) => {
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/${slug})`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(slug)
					});
					getActions().getContacts();
				} catch (error) {
					console.error("Error creating contact:", error);
				}
			},

			deleteContact: async (index) => {
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/${index}`, {
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


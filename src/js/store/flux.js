const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
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
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${contactName})`);
					const data = await response.json();
					setStore({ contact: data });
				} catch (error) {
					console.error("Error fetching contact:", error);
				}
			},

			createContact: async (contact) => {
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/${contactName})`, {
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
					await fetch(`https://playground.4geeks.com/contact/agendas/${contactName}`, {
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


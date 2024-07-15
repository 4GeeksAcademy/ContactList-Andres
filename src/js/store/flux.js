const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: [],
			ContactsAgenda: []
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

			createContact: async (newContact) => {
				console.log(newContact)
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/pruebaAndres/contacts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(newContact)
					});
					getActions().getContactsAgenda();
				} catch (error) {
					console.error("Error creating contact:", error);
				}
			},

			getContactsAgenda: async () => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/pruebaAndres/contacts`);
					const data = await response.json();
					setStore({ ContactsAgenda: data.contacts });
				} catch (error) {
					console.error("Error fetching contact:", error);
				}
			},

			deleteContact: async (id) => {
				console.log(id)
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/pruebaAndres/contacts/${id}`, {
						method: "DELETE"
					});
					getActions().getContactsAgenda();
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			},

			editContactData: async (id, updatedContact) => {
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/pruebaAndres/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(updatedContact)
					});
					getActions().getContactsAgenda();
				} catch (error) {
					console.error("Error editing contact:", error);
				}
			}
		}
	};
};

export default getState;



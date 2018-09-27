const defaultState = {
	contacts: [],
	contact: null,
	loading: false,
	errors: {},
};

export default (state = defaultState, action = {}) => {
	switch (action.type) {
	case 'FETCH_CONTACTS_FULFILLED': {
		return {
			...state,
			contacts: action.payload.data,
			loading: false,
			errors: {},
		};
	}

	case 'FETCH_CONTACTS_PENDING': {
		return {
			...state,
			loading: true,
			errors: {},
		};
	}

	case 'FETCH_CONTACTS_REJECTED': {
		return {
			...state,
			loading: false,
			errors: { message: action.payload.message },
		};
	}

	case 'SAVE_CONTACT_PENDING': {
		return {
			...state,
			loading: true,
		};
	}

	case 'SAVE_CONTACT_FULFILLED': {
		return {
			...state,
			contacts: [...state.contacts, action.payload.data],
			errors: {},
			loading: false,
		};
	}

	case 'SAVE_CONTACT_REJECTED': {
		const errors = {
			message: 'some problems'
		};
		return {
			...state,
			errors,
			loading: false,
		};
	}

	case 'FETCH_CONTACT_PENDING': {
		return {
			...state,
			loading: true,
			contact: null,
		};
	}

	case 'FETCH_CONTACT_FULFILLED': {
		return {
			...state,
			contact: action.payload.data,
			errors: {},
			loading: false,
		};
	}

	case 'UPDATE_CONTACT_PENDING': {
		return {
			...state,
			loading: true,
		};
	}

	case 'UPDATE_CONTACT_FULFILLED': {
		const contact = action.payload.data;
		return {
			...state,
			contacts: state.contacts.map(item => (item.id === contact.id ? contact : item)),
			errors: {},
			loading: false,
		};
	}

	case 'UPDATE_CONTACT_REJECTED': {
		const errors = {
			message: 'some problems',
		};
		return {
			...state,
			errors,
			loading: false,
		};
	}

	case 'DELETE_CONTACT_FULFILLED': {
		const responseUrl = action.payload.request.responseURL;
		const id = parseInt(responseUrl.slice(responseUrl.lastIndexOf('/') + 1), 10);
		return {
			...state,
			contacts: state.contacts.filter(item => item.id !== id),
		};
	}

	default:
		return state;
	}
};

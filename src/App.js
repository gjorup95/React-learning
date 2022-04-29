const createPolicy = (name, amount) => {
	return {
		type: "CREATE_POLICY",
		payload: {
			name: name,
			amount: amount,
		},
	};
};

const deletePolicy = (name) => {
	return {
		type: "DELETE_POLICY",
		payload: {
			name: name,
		},
	};
};

const createClaim = (name, amountOfMoneyToCollect) => {
	return {
		type: "CREATE_CLAIM",
		payload: {
			name: name,
			amountOfMoneyToCollection: amountOfMoneyToCollect,
		},
	};
};

// Reducers (departments)

const claimHistory = (oldListOfClaims = [], action) => {
	if (action.type === "CREATE_CLAIM") {
		// this is important
		return [...oldListOfClaims, action.payload];
	}
	return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
	if (action.type === "CREATE_CLAIM") {
		return bagOfMoney - action.payload.amountOfMoneyToCollect;
	} else if (action.type === "CREATE_POLICY") {
		return bagOfMoney + action.payload.amount;
	}
	return bagOfMoney;
};
const policies = (listOfPolicies = [], action) => {
	if (action.type === "CREATE_POLICY") {
		return [...listOfPolicies, action.payload.name];
	} else if (action.type === "DELETE_POLICY") {
		return listOfPolicies.filter((name) => name !== action.payload.name);
	}
	return listOfPolicies;
};

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
	accounting: accounting,
	claimHistory: claimHistory,
	policies: policies,
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy("alex", 20));
store.dispatch(createPolicy("Gert", 30));
store.dispatch(createPolicy("Svend", 40));

store.dispatch(createClaim("Alex", 120));
store.dispatch(createClaim("Jim", 50));

store.dispatch(deletePolicy("Svend"));

console.log(store.getState());

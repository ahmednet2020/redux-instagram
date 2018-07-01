export default function posts(state = [], action) {
	switch(action.type)
	{
		case 'add':
		return [action.payload,...state]
		case 'INCREMENT_LIKES':
		const i = action.index;
		return [
		...state.slice(0, i),
		{...state[i],likes:state[i].likes+1},
		...state.slice(i + 1)
		];
		default:
		return state;
	}

}
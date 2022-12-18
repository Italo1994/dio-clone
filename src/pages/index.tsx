// import { useState, useEffect, useCallback, useMemo } from 'react';

// const Teste = () => {

// 	const [name, setName] = useState('Italo');
// 	const [age, setAge] = useState(18);

// 	const handleChangeName = useCallback( () => {
// 		setName(prev => prev === 'Italo' ? 'Jennifer' : 'Italo')
// 	}, [] );

// 	const handleChangeAge = useCallback( () => {
// 		console.log('age atual', age, newAge);
// 		const newAge = 10 * age;

// 		setAge(prev => prev === 18 ? 20 : 18)
// 	}, [] );

// 	const calculo = useMemo( () => {
// 		console.log("Calculou", age);
// 		return 10 * age;
// 	}, [age]);

// 	console.log("Renderizou", calculo);

// 	// useEffect( () => {
// 	// 	changeUser()
// 	// }, [] )



// 	return(
// 		<>
// 			{/*<p>{name}</p>*/}
// 			<p>{age}</p>
// 			<br/>
// 			<p>{name}</p>
// 			<br/>
// 			<button onClick={handleChangeAge}>Alterar Idade</button>
// 			<br/>
// 			<button onClick={handleChangeName}>Alterar Nome</button>
// 		</>
// 	)
// }

// export { Teste }
const Request1 = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success request1');
	}, 100)
});

const Request2 = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success request2');
	}, 100)
});

// через async/await
const initial = async () => {
	const resultOne = await Request1();
	const resultTwo = await Request2();
	console.log(resultOne);
	console.log(resultTwo);
}

initial();

Request1()
	.then(res => console.log(res))
	.catch(err => console.log(err))

Request2()
	.then(res => console.log(res))
	.catch(err => console.log(err))

// Через .then
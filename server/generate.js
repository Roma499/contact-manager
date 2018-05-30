const faker = require('faker');

function generateContacts() {
	const contacts = [];
	for (let id = 0; id < 50; id++) {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();
		const email = faker.internet.email();
		const phone = faker.phone.phoneNumberFormat();
		let calls;
		for (let id = 0; id < faker.random.number(5); id++) {
        	if (!calls) {
        		calls = [];
			}
			calls.push({
				duration: faker.random.number(200),
				timestamp: faker.date.recent()
			});
		}

		contacts.push({
			id,
			firstName,
			lastName,
			email,
			phone,
			calls
		});
	}
	return { contacts };
}
module.exports = generateContacts;

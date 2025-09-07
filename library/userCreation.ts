import { faker } from '@faker-js/faker';

const countries = [
    'India',
    'United States',
    'Canada',
    'Australia',
    'New Zealand',
    'Singapore',
  ];

export function generateUser() {
    const userData = {
        email: faker.internet.userName() + '@yopmail.com',
        title: faker.number.int({min:1,max:2}),
        password: faker.internet.password(),
        dayOfBirth: faker.number.int({min:1,max:20}).toString(),
        monthOfBirth: faker.date.month(),
        yearOfBirth: faker.number.int({min:1980,max:2005}).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        companyName: faker.company.name(),
        address: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.helpers.arrayElement(countries),
        state: faker.location.state(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        mobileNumber: faker.phone.number()
    }
    const fullName = `${userData.firstName} ${userData.lastName}`;
    return {
        ...userData,
        name: fullName
    };
}
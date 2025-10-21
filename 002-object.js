// let home_data = {
//     "rooms": ["living", "bedroom", "kitchen", "washrooms"],
//     "addr": {
//         "house number": 900,
//         "street": "Main Road",
//         "city": "Kolhapur",
//         "pin": 416001
//     },
//     "electric_status": true,
//     "room_temperature": 25.5
// }


// An object is a datatype in JS that stores values in key value pairs for better data retreival.

const manali = {
    fName: "Manali",
    lName: "Chirmure",
    age: 22,
    gender: "Female",
    address: {
        houseNumber: 900,
        street: "Main Road",
        city: "Kolhapur",
        pin: 416001
    },
    verifiedUser: true,
    college: {
        collegeName: "Dr. Ghali",
    },
    phone: 8888899999,
    email: "manali@gmail.com",
    dateOfBirth: "2004-01-01",
    passDetails: {
        validTill: "2025-10-31",
        from: {
            village: "Nesari",
            taluka: "Gadhinglaj",
            dist: "Kolhapur"
        },
        to: {
            village: "Gadhinglaj",
            taluka: "Gadhinglaj",
            dist: "Kolhapur"
        },
        depot: {
            village: "Gadhinglaj",
            taluka: "Gadhinglaj",
            dist: "Kolhapur"
        }
    }
}

// Place this object in your HTML Script tag, and design a beautiful UI, for this person's profile

// Object methods:
// Object.values(manali.address).forEach(e => {console.log(e)})
// Here we have accessed the values inside the user's address and after we recieved the result as an Array, we used forEach method to iterate
// console.log();
// Object.keys(manali.address).forEach(e => {console.log(e)})
// Here we have accessed the keys inside the user's address and after we recieved the result as an Array, we used forEach method to iterate

// function fullName(Object) {
//     return `${Object.fName} ${Object.lName}`
// }

// console.log(`${fullName(manali)} is ${18 + 3} years old`)

// console.log(Object.entries(manali.address)) // Returns an array of arrays in a format where keys and values are present at first and second index respectively.

// Object.assign(manali, { identityCardLink: "https://somestorage.com/asukhdsaduihad-sdsada-asdasd"})
// assign method in Objects is used to add a new field in the object, or if the field exists, the data gets updated as we assign new info.
// assign method also allows us to change the datatype of existing data in an object.
// Object.assign(manali, { country: "USA"})
// Object.assign(manali, { address: "India"})
// console.log(manali.address)
// console.log(manali)

let college = {
    name: "dr. ghali college",
    address: {
        city: "gadhinglaj",
        district: "kolhapur",
        state: "Maharashtra",
        pin: 416502
    },
    streams: ["BA", "BCom", "BSc", "AI", "BBA", "MBA"]
}

delete college.address.state; // delete property is used when we want to get rid of a key value pair from an object

console.log(college)


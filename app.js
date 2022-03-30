//iterator

// const users = ["john", "mary", "pete"];

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? {
//             value: names[nextIndex++],
//             done: false,
//           }
//         : {
//             done: true,
//           };
//     },
//   };
// }

// const names = nameIterator(users);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log("hello");
// console.log(names.next().value);
// console.log(names.next().value);

//generator

// const users = ["john", "mary", "pete"];

// function* generateId() {
//   let index = 1;

//   while (true) {
//     yield index++;
//   }
// }

// const ids = generateId();

// console.log(ids.next().value);
// //....

// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);
// console.log(ids.next().value);

const data = [
  {
    name: "john",
    age: 15,
    location: "london",
    image: "https://randomuser.me/api/portraits/med/men/27.jpg",
  },
  {
    name: "pete",
    age: 15,
    location: "bishkek",
    image: "https://randomuser.me/api/portraits/med/men/10.jpg",
  },
  {
    name: "mary",
    age: 15,
    location: "NY",
    image: "https://randomuser.me/api/portraits/med/men/5.jpg",
  },
];

//profile iterator

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profile-display").innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">
          <h3>Name: ${currentProfile.name}</h3>
          <p>Age: ${currentProfile.age}</p>
          <p>Location: ${currentProfile.location}</p>
        </li>
      </ul>
    `;

    document.getElementById("image-display").innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    alert("No more Users");
  }
}

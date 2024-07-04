// Function to encode password using SHA-256 algorithm
function encodePassword(password) {
  // Convert password string to array buffer
  const passwordBuffer = new TextEncoder().encode(password);
  console.log(passwordBuffer);
  // Encode password buffer using SHA-256 hashing algorithm
  //  return crypto.subtle.digest('SHA-256', passwordBuffer)
  // .then(hashBuffer => {
  //     // Convert hash buffer to hexadecimal string
  //     const hashArray = Array.from(new Uint8Array(hashBuffer));
  //     const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  //     return hashHex;
  // });
}

// Example usage
const password = "pass@123";

// encodePassword(password)
//   .then((encodedPassword) => {
//     console.log("Encoded Password:", encodedPassword);
//     // Now you can use the encoded password to make the API call for login
//     // Example:
//     // makeLoginRequest(encodedPassword);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

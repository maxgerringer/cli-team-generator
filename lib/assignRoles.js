const employee = (role) => [
   {
      type: `input`,
      message: `Enter the ${role}'s name: `,
      name: `name`,
   },
   {
      type: `input`,
      message: `Enter the ${role}'s ID: `,
      name: `id`,
   },
   {
      type: `input`,
      message: `Enter the ${role}'s email address: `,
      name: `email`,
   },
];

module.exports = {
   Manager: [
      ...employee("Manager"),
      {
         type: `input`,
         message: `Enter the Manager's office number: `,
         name: "uniqueParam",
      },
   ],
   Engineer: [
      ...employee("Engineer"),
      {
         type: `input`,
         message: `Enter the Engineer's GitHub: `,
         name: `uniqueParam`,
      },
   ],
   Intern: employee("Intern").concat([
      {
         type: `input`,
         message: `Enter the Intern's school: `,
         name: `uniqueParam`,
      },
   ]),
   addRole: {
      type: `list`,
      message: `Add another team member or choose "Render" to finalize: `,
      choices: ["Engineer", "Intern", "Render"],
      name: `role`,
   },
};

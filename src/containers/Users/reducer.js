const initialState = {
  users: {
    staff: [
      {
        id: 1,
        firstName: "Selvam",
        lastName: "Mariappan",
        students: [
          {
            firstName: "student1 firstName",
            lastName: "student1 lastName",
          },
          {

            firstName: "student2 firstName",
            lastName: "student2 lastName",
          },
          {
            firstName: "student3 firstName",
            lastName: "student1 lastName",
          },
          {
            firstName: "student4 firstName",
            lastName: "student34lastName",
          },
          {
            firstName: "student5 firstName",
            lastName: "student5 lastName",
          }
        ]
      },

      {
        id: 2,
        firstName: "Ravi",
        lastName: "Ram",
      },
      {
        id: 3,
        firstName: "Shankar",
        lastName: "Ganesh",
      },
    ]
  },
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return state.users;
    case "LOAD_USER":
      return state;
    default:
      return state;
  }
}

export default userReducer;

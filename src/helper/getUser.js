export const getUser = async (email) => {
  const response = await fetch(
    `http://localhost:8000/api/v1/auth/user/${email}`
  );
  const user = await response.json();
  return user;
};

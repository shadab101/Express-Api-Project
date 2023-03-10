import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAllUsers = (req, res) => {
    res.send(users);
};
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ id: uuidv4(), ...user });
    res.send(` ${user.firstName} user is created and added to the DB`);
};

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send("user deleted");
};
export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(user);
};

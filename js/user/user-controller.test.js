const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
//
test('find user by email when exists', () => {
  const user = new User(5678, "Pepe", "pepemujica@generation.org");
  userController.add(user);
  expect(userController.findByEmail("pepemujica@generation.org")).toEqual(user);
});

test('return undefined when find user by email that does not exist', () => {
  expect(userController.findByEmail("pocholo@example.com")).toBeUndefined();
});

test('find user by ID when exists', () => {
  const user = new User(555, "Michael", "michael@generation.org");
  userController.add(user);
  expect(userController.findById(555)).toEqual(user);
});

test('return undefined when find user by ID that does not exist', () => {
  expect(userController.findById(767)).toBeUndefined();
});

//eliminar usuario cuando no existe
test('remove user when not in the list', () => {    
  const user = new User(1112, "Cristian", "cristian@generation.org");
  userController.remove(user); 
  expect(userController.getUsers()).not.toContain(user); //verifica si la lista no contiene el usuario
});

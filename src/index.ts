/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: ROLE
}

type TAdminAccount = {
  account: string | number,
  permission: ROLE.ADMIN
}

type TNormalAccount = {
  account: string | number,
  permission: ROLE.NORMAL
}


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.
*/

enum ROLE {
  ADMIN = "Adimn",
  NORMAL = "Normal"
}

type PersonAdmin = TPerson & TAdminAccount
type PersonNormal = TPerson & TNormalAccount

const usersAdmin: PersonAdmin[] = [
 
]

const userNormal: PersonNormal = {
  id: "1243123",
  name: "jOSE",
  email: "jose@email.co",
  password: "123easeas4abc",
  role: ROLE.NORMAL,
  account: "312321df",
  permission: ROLE.NORMAL
}

const userAdmin: PersonAdmin = {
  id: "01",
  name: "Felipe",
  email: "felipe@email.co",
  password: "1234abc",
  role: ROLE.ADMIN,
  account: "1234",
  permission: ROLE.ADMIN
}

const users: Array <PersonAdmin  | PersonNormal> = [
  userAdmin, 
  userNormal
]
 
console.log(users)
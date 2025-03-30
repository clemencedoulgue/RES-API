import { v4 as uuidv4 } from 'uuid';
uuidv4();
let users =[];
export const getUsers = 
        (req,res)=>{
            console.log(users);
            res.send(users); 
    }
export const createUser =  (req,res)=>{
    const user = req.body;

    const userWithId = ({...user,id: uuidv4()});
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database! `)};

export const getUser = (req,res)=>{

}
export const deleteUser = (req,res)=>{
    const {id} = req.params;

    res.send(`User with the id ${id} deleted from the database`);
}
export const updatUser = (req,res) => {
    const {id} = req.params;

    const {firstName,lastName,age} = req.body;
    
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated`);
}
    
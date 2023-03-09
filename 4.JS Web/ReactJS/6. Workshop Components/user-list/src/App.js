import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import UsersList from './components/UsersList';
import { create, deleteById, editById, getAll } from './services/userService';


function App() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        phoneNumber: '',
        address: {
            country: '',
            city: '',
            street: '',
            streetNumber: ''
        },
    });


    useEffect(() => {
        setLoading(true);
        getAll()
            .then(data => {
                setUsers(data.users);
                setLoading(false);
                setError(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
                console.log(err.message);
            });
    }, []);


    async function createUser(ev, close) {
        ev.preventDefault();

        const newUser = await create(values);
        setUsers([...users, newUser.user]);

        close();
    }

    async function deleteUser(id, close) {
        await deleteById(id);
        setUsers(users.filter(u => u._id !== id));
        close();
    }

    async function editUser(ev, id, close) {
        ev.preventDefault();

        const newUser = await editById(id, values);

        setUsers(users.map(u => u._id === id ? newUser.user : u));

        close();
    }

    return (
        <>
            <Header />

            <main className="main">
                {loading
                    ? <Loading />
                    : <UsersList
                        users={users}
                        error={error}
                        createUser={createUser}
                        deleteUser={deleteUser}
                        editUser={editUser}
                        values={values}
                        setValues={setValues} />}


            </main>

            <Footer />

        </>
    );
}

export default App;

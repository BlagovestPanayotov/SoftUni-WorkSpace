import { useState } from 'react';
import { getById } from '../../services/userService';
import Error from '../Error';
import ModifyUser from './CreateEdit';
import DeleteBox from './DeleteBox';
import NoUsers from './NoUsers';
import User from './User';
import UserDetails from './UserDetails';

function Table({ users, error, createUser, deleteUser, editUser, values, setValues }) {

    const [selectedUser, setSelectedUser] = useState(null);
    const [modifyForm, setModifyForm] = useState(false);
    const [deleteConformation, setDeleteConformation] = useState(false);


    function onChange(event) {
        const params = ['country', 'city', 'street', 'streetNumber'];
        if (params.includes(event.target.name)) {
            setValues(() => {
                const data = { ...values };
                data.address[event.target.name] = event.target.value;

                return data;
            });
        } else {
            setValues({ ...values, [event.target.name]: event.target.value });
        }
    };

    async function infoOnClick(id) {
        const data = await getById(id);
        setValues({ ...data.user });
        setSelectedUser(values);
    };

    function onClose() {
        setSelectedUser(null);
        setModifyForm(false);
        setDeleteConformation(false);
        setValues({
            _id: '',
            firstName: '',
            lastName: '',
            email: '',
            imageUrl: '',
            address: {
                phoneNumber: '',
                country: '',
                city: '',
                street: '',
                streetNumber: ''
            }
        });
    };

    function onClickModifyUser(id) {
        setModifyForm(id);
    }

    function onClickDeleteUser(id) {
        setDeleteConformation(id);
    }

    async function onEditClick(id) {
        const data = await getById(id);
        setValues({ ...data.user });
        setModifyForm(true);
    }




    return (
        <>
            {selectedUser && <UserDetails {...selectedUser} onClose={onClose} />}
            {modifyForm && <ModifyUser onClose={onClose} createUser={createUser} editUser={editUser} user={values} onChange={onChange} />}
            {deleteConformation && <DeleteBox onClose={onClose} deleteUser={() => deleteUser(deleteConformation, onClose)} />}

            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                Image
                            </th>
                            <th>
                                First name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Last name<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Email<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Phone<svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                    role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>
                                Created
                                <svg className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn active-icon" aria-hidden="true" focusable="false" data-prefix="fas"
                                    data-icon="arrow-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="currentColor"
                                        d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                    </path>
                                </svg>
                            </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ?
                            users.map(u => <User
                                {...u}
                                key={u?._id}
                                onClickModifyUser={() => onClickModifyUser(u._id)}
                                infoOnClick={infoOnClick}
                                onClickDeleteUser={() => onClickDeleteUser(u._id)}
                                onEditClick={() => onEditClick(u._id)}
                            />) : null}
                    </tbody>
                </table>
            </div>
            <button className="btn-add btn" onClick={onClickModifyUser}>Add new user</button>
        </>
    );

}

export default Table;
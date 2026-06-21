function Profile(props) {

    return (
        <div>

            <h2>Student Profile</h2>

            <h3>Name: {props.name}</h3>

            <h3>Course: {props.course}</h3>

            <p>
                Welcome to {props.course} Course!
            </p>

        </div>
    );
}

export default Profile;
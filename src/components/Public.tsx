const Public = (props: { login: void; }) => {


    return (
        <div>
            <button onClick={()=>props.login} >Log In</button>
            <h1>Public</h1>
        </div>
    );
}

export default Public;

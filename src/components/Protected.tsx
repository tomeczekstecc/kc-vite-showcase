// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Protected = (props) => {
    return (
        <div>
            <button
                style={{
                    margin: '0 auto',
                    marginBlock: '1em',
                    display: 'block',
            }}>
                <a href={`${import.meta.env.VITE_KC_URL}/realms/${import.meta.env.VITE_KC_REALM}/account?referrer=${import.meta.env.VITE_KC_CLIENT_ID}&referrer_uri=${import.meta.env.VITE_KC_URL}`}>manage
                    account</a>

            </button>
            <button onClick={() => props.logout()}>logout</button>
            <h1>Protected</h1>
        </div>
    );
}

export default Protected;

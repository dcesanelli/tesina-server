import Link from 'next/link';
import HeadContent from '../components/HeadContent';

function HomePage() {
    let loggedIn = false;
    return (
        <div className="l-wrapper">
            <div className="l-content">
                <HeadContent title="Bienvenidos a Nubes!"></HeadContent>
                <div className="l-centered-column">
                    <h1>Bienvenidos a Nubes!</h1>

                    {loggedIn && (
                        <>
                            <p>Welcome !</p>
                            <button onClick={() => { }}>Logout</button>
                        </>
                    )}
                    {!loggedIn && (
                        <div>
                            <Link href="/login">Login</Link>
                            <div>o</div>
                            <Link href="/signup">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;

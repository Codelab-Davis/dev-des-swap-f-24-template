const LoginPage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">Login</h1>
            <p className="text-base text-gray-500">
                Login to access all the features we offer
            </p>

            {/* TODO: Replace this with the LoginForm component */}
            <div
                className={`bg-gray-300 text-gray-500 p-2 border 
                            rounded-lg w-64 text-center mx-auto my-2 
                            h-56 grid place-items-center`}
            >
                <span>
                    Oops.. I forgot to add something here. Can you help me out?
                </span>
            </div>

            <p className="text-black text-sm mx-auto">
                Don't have an account?{' '}
                <a className="text-blue-500 hover:underline" href="/signup">
                    Sign Up
                </a>
            </p>
        </div>
    );
};

export default LoginPage;

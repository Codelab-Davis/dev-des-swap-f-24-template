import SignUpForm from '@/components/SignUpForm';

const SignUpPage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="font-semibold text-2xl">Sign Up</h1>
            <p className="text-base text-gray-500">
                Sign up to access all the features we offer
            </p>

            <SignUpForm />

            <p className="text-black text-sm mx-auto">
                Already have an account?{' '}
                <a className="text-blue-500 hover:underline" href="/login">
                    Login
                </a>
            </p>
        </div>
    );
};

export default SignUpPage;

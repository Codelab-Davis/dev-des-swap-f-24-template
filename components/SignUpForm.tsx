import { signUp } from '@/server-actions/auth';

const SignUpForm = ({}) => {
    return (
        <form
            // TODO: Something seems missing here? Maybe an action property?
            className="flex flex-col gap-4 py-2"
        >
            <div className="flex flex-col">
                <label className="text-foreground font-medium" htmlFor="name">
                    Full name
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label className="text-foreground font-medium" htmlFor="email">
                    Email
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jdoe@mail.com"
                    required
                />
            </div>

            <div className="flex flex-col">
                <label
                    className="text-foreground font-medium"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="p-2 border border-gray-300 rounded-md text-gray-800 bg-gray-100"
                    type="password"
                    id="password"
                    name="password"
                    required
                />
            </div>

            <button
                type="submit"
                className={`bg-slate-800 w-full py-3 px-5 rounded-md 
                            text-white font-medium hover:bg-slate-700 
                            transition-colors duration-300 ease-in-out`}
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUpForm;

export default function LoginButton({handleLogin, handleKeyPress}){
    return (
        <div className="col-md-6 text-right">
            <div className="form-group">
                <button
                    type="button"
                    className="btn btn-primary sign-up"
                    onClick={handleLogin}
                    onKeyDown={handleKeyPress}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};


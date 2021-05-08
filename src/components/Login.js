import React from "react";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      userNiceName: "",
      userEmail: "",
      loggedIn: false,
      loading: false,
      error: "",
    };
  }

  createMarkup = (data) => ({
    __html: data,
  });

  onFormSubmit = (event) => {
    event.preventDefault();

    const siteUrl = "https://beta.ficoinmarket.com";

    const loginData = {
      username: this.state.username,
      password: this.state.password,
    };
    const headers = {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    };

    this.setState(
      { loading: true },
      () => {
        axios
          .post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData, {
            headers: headers,
          })
          .then((res) => {
            if (undefined === res.data.token) {
              this.setState({ error: res.data.message, loading: false });
              return;
            }

            const { token, user_nicename, user_email } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("userName", user_nicename);

            this.setState({
              loading: false,
              token: token,
              userNiceName: user_nicename,
              userEmail: user_email,
              loggedIn: true,
            });
          })
          .catch((err) => {
            // this.setState({ error: err.response.data.message, loading: false });
            console.log(err);
          });
      },
      []
    );
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      password,
      userNiceName,
      loggedIn,
      error,
      loading,
    } = this.state;

    const user = userNiceName ? userNiceName : localStorage.getItem("userName");

    // if ( loggedIn || localStorage.getItem( 'token' ) ) {
    // 	return ( <Redirect to={`/dashboard/${user}`} noThrow /> )
    // } else {
    return (
      <React.Fragment>
        <div className="jumbotron" style={{ height: "100vh" }}>
          <h4>Login</h4>
          {error && (
            <div
              className="alert alert-danger"
              dangerouslySetInnerHTML={this.createMarkup(error)}
            />
          )}
          <form onSubmit={this.onFormSubmit}>
            <label className="form-group">
              Username:
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={this.handleOnChange}
              />
            </label>
            <br />
            <label className="form-group">
              Password:
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleOnChange}
              />
            </label>
            <br />
            <button className="btn btn-primary mb-3" type="submit">
              Login
            </button>
            {/* { loading && <img className="loader" src={Loader} alt="Loader"/> } */}
          </form>
        </div>
      </React.Fragment>
    );
    // }
  }
}

// return (
//   <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-md w-full space-y-8">
//       <div>
//         <img
//           className="mx-auto h-12 w-auto"
//           src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//           alt="Workflow"
//         />
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Sign in to your account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Or{" "}
//           <a
//             href="#"
//             className="font-medium text-indigo-600 hover:text-indigo-500"
//           >
//             start your 14-day free trial
//           </a>
//         </p>
//       </div>
//       <form
//         className="mt-8 space-y-6"
//         action="#"
//         method="POST"
//         onSubmit={this.onFormSubmit}
//       >
//         <input type="hidden" name="remember" defaultValue="true" />
//         <div className="rounded-md shadow-sm -space-y-px">
//           <div>
//             <label className="sr-only">Username</label>
//             <input
//               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Email address"
//               value={username}
//               onChange={this.handleOnChange}
//             />
//           </div>
//           <div>
//             <label className="sr-only">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Password"
//               value={password}
//               onChange={this.handleOnChange}
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <input
//               id="remember_me"
//               name="remember_me"
//               type="checkbox"
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//             />
//             <label
//               htmlFor="remember_me"
//               className="ml-2 block text-sm text-gray-900"
//             >
//               Remember me
//             </label>
//           </div>

//           <div className="text-sm">
//             <a
//               href="#"
//               className="font-medium text-indigo-600 hover:text-indigo-500"
//             >
//               Forgot your password?
//             </a>
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
//             Sign in
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

export default Login;
